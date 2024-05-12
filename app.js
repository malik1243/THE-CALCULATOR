const display=document.getElementById('display');

function toDisplay(input){
display.value +=input;
}

function tocalculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="sytax error"
    }
}

function toclear(){
    display.value ="";
}