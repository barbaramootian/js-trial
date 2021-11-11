// var add = function(number1, number2){
//     return number1 + number2;
// };
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add (5, 10);
// alert(result);

// var enoughSleep = true;
// if(enoughSleep){
//     console.log("I'm ready to go!")
// }else{
//     console.log("I need a nap.")
// }

// var temperature = 30;
// if (temperature < 20){
//     console.log("Dont forget a jacket!");
// }else{
//     console.log ("keep cool today!");
// }
// confirm(temperature)
var one = 22;
var two = 3;
var add = one + two;
var minus = one - two;
var multiply = one * two;
var divide = one/two;
	document.write("First No: = " + one + " Second No: = " + two + " <br />");
	document.write(one + " + " + two + " = " + add + "<br/>");
	document.write(one + " - " + two + " = " + minus + "<br/>");
	document.write(one + " * " + two + " = " + multiply + "<br/>");
	document.write(one + " / " + two + " = " + divide + "<br/>");

    var students = new Array("Babi", "Fiona", "Reson", "Wanjiku", "Mootian");
    Array.prototype.displayItems=function(){
        for (i=0;i<this.length;i++){
            document.write(this[i] + "<br />");
        }
    }	
    document.write("students array<br />");
    students.displayItems();
    document.write("<br />The number of items in students array is " + students.length + "<br />");
    document.write("<br />The SORTED students array<br />");
    students.sort();
    students.displayItems();
    document.write("<br />The REVERSED students array<br />");
    students.reverse();
    students.displayItems();
    document.write("<br />THE students array after REMOVING the LAST item<br />");
    students.pop();
    students.displayItems();
    document.write("<br />THE students array after PUSH<br />");
    students.push("New Stuff");
    students.displayItems();
