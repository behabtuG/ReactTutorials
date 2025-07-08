//While Loop

let a = 100;

// while(a < 100){
//     console.log(a)
//     a+=10
// }

/*
Output:

10
20
30
40
50
60
70
80
90

Note:
In 'Do While' Loop, the code inside of the loop is executed first.
Then the condition (a < 10) is evaluated.
If the condition is true then the code inside of the loop is executed again.
The iteration of loop continues as long as the condition remains true.
In the above example the condition (a < 10) is never returns true.
But, still the code inside of the loop gets executed one time.
And we can see 100 printed in the output. 
*/

do {
  console.log(a); //100
  a -= 10;
} while (a < 10);
