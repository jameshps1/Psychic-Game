var cpuChoice = [
    ["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"],["m"],
    ["n"],["o"],["p"],["q"],["r"],["s"],["t"],["u"],["v"],["w"],["x"],["y"],["z"],
]

var random = Math.floor((Math.random()*(cpuChoice.length-1))); 
var cpuPick = cpuChoice[random]; // the word to guess will be chosen from the array above
var cpuPick = new Array(cpuPick.length);
var number = 0;
<imput>type="text" onkeyup="playerGuwss()"</imput>
var playerGuwss = [
    <imput>type="text" onkeyup="playerGuwss()"</imput>,
    ["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"],["m"],
    ["n"],["o"],["p"],["q"],["r"],["s"],["t"],["u"],["v"],["w"],["x"],["y"],["z"],
]

if ("playerGuwss"==="cpuPick") {
    index("<h1>Wins:</h1>"[+1])
}
else {
    index("<h1>Guesses Left:</h1>"[-1])
}
