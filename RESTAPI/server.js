const express = require("express");
const app = express();
const PORT = 3001;
//data
const alex = {
    id: 121000,
    token: "abcd1",
    secretToken: "blah",
    video: "something.mp4"
};

const josh = {
    id: 1210001,
    token: "abcd12",
    secretToken: "blahblah",
    video: "somethingElse.mp4"
};
const ruth = {
    id: 131000,
    token: "abffcd1",
    secretToken: "blab blah",
    video: "another.mp4"
};
const amber = {
    id: 1255000,
    token: "2222dkjshfdkjh1",
    secretToken: "bloop",
    video: "whoop.mp4"
};
//API routes
app.get("/data", function(req, res) {
    console.log(`hit data route`);
    res.json(alex);
});
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});
