//Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.

//Example: <br>
//Input: [1,4,6,3,2] <br>
//Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

function weekNumbersToWords() {
  let day;

    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    console.log (day)
  }
  
  weekNumbersToWords()