 var count = 99;
 var row_take = "Take one down, pass it around,";
 var row_main = " bottles of beer on the wall";
 var row_no = "No more bottles of beer on the wall";
        while (count > 0){
            if (count == 1){
               console.log(count + " bottle of beer on the wall,");
               console.log(count + " bottle of beer on the wall");
               console.log(count + " bottle of beer,");
               console.log(row_take)
            } else {
                console.log(count + row_main + ",");
                console.log(count + row_main);
                console.log(count + row_main.slice(0, 15) + ",");
                console.log(row_take);
            }
            --count;
        }
console.log(row_no + ",")
console.log(row_no.slice(0, 23) + ",");
console.log("Go to the store, buy some more,")
console.log("99 " + row_no.slice(8, 35) + "!")