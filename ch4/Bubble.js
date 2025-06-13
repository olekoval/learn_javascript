var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 
              64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var count = scores.length
var max = scores[0]
var N = 0
var arr = [];

function maX1(count) {
    while (count > 0) {
        if (max < scores[count - 1]) {
            max = scores[count - 1]
          }   
        console.log("Bubble solution #", N, "score", scores[N]);
        N = N + 1;
        count = count - 1;
    }
    console.log("Bubbles tests:", N);
    console.log("Highest bubble score:", max);
}

function maX2(count){
    var i = 0
    while (count > 0){
        if (scores[count] === max){
            arr[i] = count; 
            i = i + 1;
        }
     count = count - 1;   
    }
console.log(arr);    
}

maX1(count);
maX2(count);