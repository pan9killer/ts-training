var player1 = {
    game: 'CS:GO',
    hours: 300,
    server: 'basic'
};
var player2 = {
    game: 2048,
    hours: '300 h.',
    server: 'arcade'
};
var player3 = {
    game: 'Chess',
    hours: {
        total: 500,
        inMenu: 50
    },
    server: 'chess'
};
var FigureNames;
(function (FigureNames) {
    FigureNames["Rect"] = "rect";
    FigureNames["Triangle"] = "triangle";
    FigureNames["Circle"] = "circle";
    FigureNames["Line"] = "line";
})(FigureNames || (FigureNames = {}));
function calculateAmountOfFigures(figure) {
    var AmountOfFiguresObject = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0
    };
    figure.forEach(function (item) {
        switch (item.name) {
            case FigureNames.Rect:
                AmountOfFiguresObject.squares++;
                break;
            case FigureNames.Triangle:
                AmountOfFiguresObject.triangles++;
                break;
            case FigureNames.Circle:
                AmountOfFiguresObject.circles++;
                break;
            default:
                AmountOfFiguresObject.others++;
        }
    });
    return AmountOfFiguresObject;
}
var data = [
    {
        name: FigureNames.Rect,
        data: { a: 5, b: 10 }
    },
    {
        name: FigureNames.Rect,
        data: { a: 6, b: 11 }
    },
    {
        name: FigureNames.Triangle,
        data: { a: 5, b: 10, c: 14 }
    },
    {
        name: FigureNames.Line,
        data: { l: 15 }
    },
    {
        name: FigureNames.Circle,
        data: { r: 10 }
    },
    {
        name: FigureNames.Circle,
        data: { r: 5 }
    },
    {
        name: FigureNames.Rect,
        data: { a: 15, b: 7 }
    },
    {
        name: FigureNames.Triangle
    }
];
console.log(calculateAmountOfFigures(data));
