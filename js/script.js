$(document).ready(function(){
    var cardList = $('.cardList');
    var cards = $('.card');
    var cardWidth = $(cards).width();
    var cardListWidth = $(cardList).width();
    var winnerCard = ".winner"; //Класс, выигранной карты
    var winner = null;
    var speed = 3000;
    var winnerNumber = null;
    /**Вычислим номер с эти классом или можно без класса сразу указать номер*/
    $.each(cards, function (i, value) {
        var isWinner = $(this).hasClass("winner");
        if (isWinner) {
            winner = $(this);
            winnerNumber = (i + 1);
        }
    });
    console.log("winNumber:" + winnerNumber + " winner" + winner.html());
    //ni - порядковый номер выигранной карты
    //m - число карт в видимой части галереи
    //W - лина галереи
    //xW - длина колоды карт до выигранной карты
    //dW - разница между длиной до выигранной и длиной галереи
    var ni = winnerNumber;
    //
    var m = cardListWidth / cardWidth; //M
    var W = m * cardWidth; //
    var sW = W / 2;
    var sw = cardWidth / 2;
    var xW = ni * cardWidth;
    var dW = xW - W + sW + sw; //
    //
    var leftAlign = dW;

    $('#spin').click(function () {
        cards.first().css('margin-left', 0);
        cards.first().animate({
            "margin-left": -leftAlign + "px"
        }, speed);
        return false;
    });
});
