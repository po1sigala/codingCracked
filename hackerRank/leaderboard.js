//print m ints the jth int should indicate the rank after the jth game
//take int leaderboard scores and alices scores
//equal scores share ranking
function climbingLeaderboard(a, scores, b, alice) {
    let ranking = 1;
    let aliceRanks = [];
    alice.map(aliceScore => {
        scores.map((oldScore, i, leaderboard) => {
            if (oldScore > leaderboard[i - 1] && i != 0) {
                ranking++;
            } else if (aliceScore > oldScore) {
                aliceRanks.push(ranking);
            }
            if (i === oldScore.length - 1) {
                ranking++;
                aliceRanks.push(ranking);
            }
            if (oldScore != leaderboard[i - 1]) {
                ranking++;
            }
        });
    });
    return aliceRanks;
}

console.log(
    climbingLeaderboard(7, [100, 100, 50, 40, 40, 20, 10], 4, [5, 25, 50, 120])
);
