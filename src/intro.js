//tuple
var title;
title: ["1", "titulo"];
//enum { chave: valor}
var Color;
(function (Color) {
    Color["write"] = "#fff";
    Color["red"] = "#f00";
    Color["blue"] = "#00f";
})(Color || (Color = {}));
