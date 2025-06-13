var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 
              64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var count = scores.length
var max = scores[0]
var N = 0
var arr = [];

function maX1(n) {
    while (n < count) {
        if (max < scores[n]) {
            max = scores[n]
          }   
        console.log("Bubble solution #", n, "score", scores[n]);
        n = n + 1;
    }
    console.log("Bubbles tests:", n);
    console.log("Highest bubble score:", max);
}

function maX2(n){
    var i = 0
    while (n < count){
        if (scores[n] === max){
            arr[i] = n; 
            i = i + 1;
        }
     n = n + 1;   
    }
console.log(arr);    
}

maX1(N);
maX2(N);