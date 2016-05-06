$(function () {
    //  bingo game
    // ①
    //  75までの数字をランダムに表示できる
    //  被らない数字を表示する
    //配列
    //1〜75までの数字配列を定義
    var numbers = [];
    for (i = 1; i < 76; i++) {
        numbers.push(i);
    }
    console.log(numbers);
    //配列をシャッフル(ソート)する
    numbers.sort(function () {
        return Math.random() - .5
    });
    console.log(numbers);
    // ②
    //出た数字を画面に表示できる
    //先頭から1つずつ取り出す
    //returnはそこで処理を抜ける
    $(".number_button").on("click", function () {
        if(numbers.length <= 0){
            alert("Game end＼(^o^)／");
            return;
        }
        var number = numbers.shift();
        $(".display").text(number);
        console.log(numbers);
        // ③
        //  これまでに出た数字を列挙できる
        //append 挿入って意味
        var historyDisplay = $(".history");
        var currentHistory = historyDisplay.text();
        //最初の履歴かどうか判別
        var newHistory = "" ;
        if(currentHistory == ""){
            newHistory = number;
        }
        else {
            newHistory = currentHistory + "," + number;
        }

        historyDisplay.text(newHistory);
    });


});
