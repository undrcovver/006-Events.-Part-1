let input1 = document.querySelector("#input1");

let addBtn = document.querySelector("#add-btn");
let remBtn = document.querySelector("#rem-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");
let clearBtn = document.querySelector("#wide-btn");

let num0 = document.getElementById("b0");
num0.addEventListener("click", add0)
let num1 = document.getElementById("b1");
num1.addEventListener("click", add1)
let num2 = document.getElementById("b2");
num2.addEventListener("click", add2)
let num3 = document.getElementById("b3");
num3.addEventListener("click", add3)
let num4 = document.getElementById("b4");
num4.addEventListener("click", add4)
let num5 = document.getElementById("b5");
num5.addEventListener("click", add5)
let num6 = document.getElementById("b6");
num6.addEventListener("click", add6)
let num7 = document.getElementById("b7");
num7.addEventListener("click", add7)
let num8 = document.getElementById("b8");
num8.addEventListener("click", add8)
let num9 = document.getElementById("b9");
num9.addEventListener("click", add9)
function add0()
{
    input1.value+="0";
}
function add1()
{
    input1.value+="1";
}
function add2()
{
    input1.value+="2";
}
function add3()
{
    input1.value+="3";
}
function add4()
{
    input1.value+="4";
}
function add5()
{
    input1.value+="5";
}
function add6()
{
    input1.value+="6";
}
function add7()
{
    input1.value+="7";
}
function add8()
{
    input1.value+="8";
}
function add9()
{
    input1.value+="9";
}

addBtn.onclick = add;
remBtn.onclick = rem;
mulBtn.onclick = mul;
divBtn.onclick = div;
clearBtn.onclick = clr;

function clr()
{
    input1.value = "";
}

function add() {
    // для избегания конкатенации преобразовываезначение поля ввода в число
    input1.value+=" + "
}

function rem() {
    input1.value+= " - "
}

function mul() {
    input1.value+= " * "
}

function div() {
    input1.value+= " / "
}
