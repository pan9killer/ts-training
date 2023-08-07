var Directions;
(function (Directions) {
    Directions["Top"] = "top";
    Directions["Down"] = "down";
    Directions["Left"] = "left";
    Directions["Right"] = "right";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
function frame(elem, dir, tFunc) {
    if (dir === Directions.Right) {
        console.log(tFunc);
    }
}
frame('id', Directions.Right, TimingFunc.LINEAR);
