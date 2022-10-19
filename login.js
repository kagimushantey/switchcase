console.log("hello user");
const age = document.getElementById('myage').value;
console.log(age);

function ChangeColor()   
{  
     document.getElementById('signup').style.backgroundColor = 'Red';  
     setTimeout("ChangeColor2()", 2000);  
} 
function ChangeColor2()
{
   document.getElementById('signup').style.backgroundColor = 'blue';  
     setTimeout("ChangeColor()", 2000);  
} 
let plat = 17;
let name = "me";
if(plat==17){
     console.log("they are 17");
}else{
     console.log("they are not 17");
}
/* switch case for someone in an elevator coming up to the level you input*/
let level= 4;
switch (level) {/* expression is the level the user has entered*/
/* cases are the levels the elevator moves to*/
     case 1:
          console.log("add one more level");
          break;/*break creates a stop for the loop to jump to the next case*/
          case 2:
               console.log("add one more level");
               break;
               case 3:
                    console.log("reached innovation village level,open up");
                    break;
                    case 4:
                         console.log("go down one more level");
                         break;
                         case 5:
                              console.log("go  down two more level");
                              break;

     default:/* the default is wat is printed if the value doesnot fall in any case*/
          console.log("level undefined");
          break;
}