// ここからコードを書きます🤗
// alert(111);

// console.log("初めてのJavascript");
// console.log(23+5,'１問目');
// console.log(2000-1800);
// console.log("18+5");


// // 変数
// const firstname="望斗"
// const lastname="福田"

// console.log(firstname);
// console.log(lastname);

// // 演習
// const score=100

// if(score >= 80 ){
//     console.log("素晴らしい！おめでとう！");
// }else{
//     console.log("もっと頑張りましょう！");
// }

//演習

// const rondom = Math.floor(Math.random()*5);

// if(rondom === 0){
//     $("h1").html("大凶")
//     $("h1").css("color","red")
//     console.log("大凶です")
// }else if(rondom === 1){
//     $("h1").html("凶")
//     console.log("凶です")
// }else if(rondom === 2){
//     $("h1").html("吉")
//     console.log("吉です")
// }else if(rondom === 3){
//     $("h1").html("中吉")
//     console.log("中吉です")
// }else if(rondom === 4){
//     $("h1").html("大吉")
//     console.log("大吉です")
// }

const win =("あなたの勝ちです");
const lose =("あなたの負けです");
const again =("引き分けです");

// グーを選択
$("#aa").on("click",function(){
        const rondom = Math.floor(Math.random()*3);
        $(".jibun").html('<img src="img/imgぐー.jpg" alt=""></img>');
    if(rondom === 0){
        $(".aite").html('<img src="img/imgぐー.jpg" alt=""></img>');
        $(".kekka").html(again);
        console.log(again);
    }else if(rondom === 1){
        $(".aite").html('<img src="img/imgちょき.jpg" alt=""></img>');
        $(".kekka").html(win);
        console.log(win);
    }else if(rondom === 2){
        $(".aite").html('<img src="img/imgぱー.jpg" alt=""></img>');
        $(".kekka").html(lose);
        console.log(lose);
    }
});

// チョキを選択
$("#bb").on("click",function(){
    const rondom = Math.floor(Math.random()*3);
    $(".jibun").html('<img src="img/imgちょき.jpg" alt=""></img>');
if(rondom === 0){
    $(".aite").html('<img src="img/imgぐー.jpg" alt=""></img>');
    $(".kekka").html(lose);
    console.log(lose);
}else if(rondom === 1){
    $(".aite").html('<img src="img/imgちょき.jpg" alt=""></img>');
    $(".kekka").html(again);
    console.log(again);
}else if(rondom === 2){
    $(".aite").html('<img src="img/imgぱー.jpg" alt=""></img>');
    $(".kekka").html(win);
    console.log(win);
}
});

// パーを選択
$("#cc").on("click",function(){
    const rondom = Math.floor(Math.random()*3);
    $(".jibun").html('<img src="img/imgぱー.jpg" alt=""></img>');
if(rondom === 0){
    $(".aite").html('<img src="img/imgぐー.jpg" alt=""></img>');
    $(".kekka").html(win);
    console.log(win);
}else if(rondom === 1){
    $(".aite").html('<img src="img/imgちょき.jpg" alt=""></img>');
    $(".kekka").html(lose);
    console.log(lose);
}else if(rondom === 2){
    $(".aite").html('<img src="img/imgぱー.jpg" alt=""></img>');
    $(".kekka").html(again);
    console.log(again);
}
});




// // 足し算する関数
// function add(a1,a2,en){
//     if(en=="+"){
//         var n = a1 + a2;
//     }
//     if(en=="-"){
//         var n = a1 - a2;       
//     }
//     return n;
// }
// var t = add(10,40,"+");
// console.log(t);