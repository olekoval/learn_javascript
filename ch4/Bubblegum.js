// завдання сторінка 171
// відповідь сторінка 199

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
// var i = 0
// while (i < hasBubbleGum.length){
//     if(hasBubbleGum[i]){
//        console.log(products[i] + " contains bubble gum"); 
//     }
//     i = i + 1;
// }
// завдання сторінка 173 відповідь сторінка 200
for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
    if(hasBubbleGum[i]){
       console.log(products[i] + " contains bubble gum"); 
    }
}
