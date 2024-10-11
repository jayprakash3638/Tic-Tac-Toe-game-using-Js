let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGametbtn = document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//true0==true->0 and false->X
let count=0;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) => {
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
        count++;
        let iswinner=checkWinner();
        if(count===9 && !iswinner){
            gamedraw();
        }

    });
});
const gamedraw=()=>{
    msg.innerText=`game was a draw`;
    msgcontainer.classlist.remove("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner=() =>{
    for(let pattern of winpattern){
    
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val&& pos2val===pos3val){
            showWinner(pos1val);
        }
    }

    }
};

newGametbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);