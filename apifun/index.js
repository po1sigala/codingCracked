$(document).ready(function() {
    console.log("loaded");
    $("#button").on("click", function() {
        console.log("clicked");
        let query = $("#searchBox").val();
        const queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            query +
            "&api_key=3QGN2O8Bws9dO6cv6z5FmzS3twWYL4ZZ&limit=10&offset=0&rating=PG-13&lang=en";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            let gif = response.data[0];
            let link = gif.url;
            console.log(gif);
            let gifURL = gif.images.original.url;
            console.log(gifURL);
            let gifTitle = gif.title;
            console.log(gifTitle);
            //create card div
            let cardDiv = $("<div>")
                .addClass("card")
                .attr("style", "width: 18rem;");
            //create img tag
            let imgTag = $("<img>")
                .attr("src", gifURL)
                .addClass("card-img-top");
            //create card body
            let cardBody = $("<div>").addClass("card-body");
            //create crad title for going in card div
            let cardTitle = $("h5")
                .text(gifTitle)
                .addClass("card-title");
            //create card text
            let cardText = $("<p>")
                .addClass("card-text")
                .text(
                    `you searched giphy for ${query} here you go. \nclick the link below to go to giphy`
                );

            //create button link
            let button = $("<a>")
                .addClass("btn btn-primary")
                .attr("href", link)
                .attr("target", "_blank")
                .text("source");
            //put title text and button in card body

            cardBody
                .append(cardTitle)
                .append(cardText)
                .append(button);

            cardDiv.append(imgTag).append(cardBody);
            //adding the finished card to the card row
            $("#gifRow").prepend(cardDiv);
        });
    });
});
