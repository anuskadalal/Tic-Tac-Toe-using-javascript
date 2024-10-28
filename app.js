let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turnO=true;
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msgpara=document.querySelector("#msg");
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkfunction();
    })
});
 const showwinner=(winner)=>{
    msgpara.innerText=`Congratulations! Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
checkfunction=()=>{
   for (let pattern of winpatterns){
    let posval1=boxes[pattern[0]].innerText;
let posval2=boxes[pattern[1]].innerText;
let posval3=boxes[pattern[2]].innerText;
if(posval1!=""&& posval2!="" && posval3!="")
    if(posval1==posval2 && posval2==posval3){
        
        showwinner(posval1);
    }
   }
};

resetbtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
