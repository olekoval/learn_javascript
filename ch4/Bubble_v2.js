var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 
              64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var count = scores.length
var max = scores[0]
var N = 0
var arr = [];

function maX1(i) {
    while (i < count) {
        if (max < scores[i]) {
            max = scores[i]
          }   
        console.log("Bubble solution #", i, "score", scores[i]);
        i = i + 1;
    }
    console.log("Bubbles tests:", i);
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
console.log("Solutions with highest score:", " #", arr[0] , ", #", arr[1])   
}

maX1(N);
maX2(N);