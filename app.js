let button=document.getElementById("button");
let colour=document.getElementById("color");
var numberInShape=1;
var oldvalue=0;

button.onclick=()=>{
    let n=document.getElementById("number").value;
    const colour=document.getElementById("color");
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const  rect=document.getElementById("rectangle");
    const box=document.getElementById("box");

    n= Number(n)+Number(oldvalue);
    for(let j=numberInShape;j<=n;j++){
        let shape=document.createElement("div");
        shape.innerHTML += numberInShape;
        if(circle.checked)
            shape.classList.add("circle");
        else if(square.checked)
            shape.classList.add("square");
        else if(rect.checked)
            shape.classList.add("rectangle");
        else
        document.write("Invalid Input");
        
        numberInShape++;
        box.appendChild(shape);
        oldvalue=document.getElementById("box").lastElementChild.innerHTML;
    }
};