function num1(){
    document.calc.i.value += 1;
}
function num2(){
    document.calc.i.value += 2;
}
function num3(){
    document.calc.i.value += 3;
}
function num4(){
    document.calc.i.value += 4;
}
function num5(){
    document.calc.i.value += 5;
}
function num6(){
    document.calc.i.value += 6;
}
function num7(){
    document.calc.i.value += 7;
}
function num8(){
    document.calc.i.value +=8;
}
function num9(){
    document.calc.i.value +=9;
}
function numo(){
    document.calc.i.value += 0;
}
function add(){
    document.calc.i.value += "+";
}
function min(){
    document.calc.i.value += "-";
}
function mul(){
    document.calc.i.value += "*";
}
function divd(){
    document.calc.i.value += "/";
}
function clr(){  
    document.calc.i.value = "";  
    document.calc.r.value = "";               
}
function result(){
    document.calc.r.value = eval(document.calc.i.value);
}