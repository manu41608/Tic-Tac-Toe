const logo=document.getElementsByClassName('logo1');
const text=document.getElementsByClassName('ab');
const boxes=document.getElementsByClassName('box')
const status1=document.getElementById('status');
const btn= document.getElementById('resetbtn')



logo[0].addEventListener('click',()=>{
    text[0].classList.toggle('active')
});
let winGame=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

var currentUser='x';
var gameOver=false;

function addbox(){
    Array.from(boxes).forEach((e)=>{
        console.log(e)
        status1.innerHTML=`${currentUser} Turn`
            e.addEventListener('click',(p)=>{
                p.preventDefault()
                // let ting = new Audio('ting.mp3')
                // ting.play()
                if(gameOver==false){
                    status1.innerHTML=`${currentUser=='x'?'0':'x'} Turn`
                }
                if(e.textContent !='x' && e.textContent!='0' && gameOver == false){
                    let ting = new Audio('ting.mp3')
                    ting.play()
                    e.textContent=currentUser
                    // clearBox()
                    if(currentUser=='x'){
                      currentUser='0'
                    }
                    else if(currentUser=='0'){
                      currentUser='x'
                    }
                    checkwin()
                }               
          })
    })
}



function clearBox(){
    Array.from(boxes).forEach((e)=>{
    e.textContent=''
    })

}
function initialise(){
     clearBox()
     addbox()
}
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    clearBox()
    gameOver=false;
    status1.innerHTML=`${currentUser} Turn`
    // for(i in boxes){
    //     console.log(boxes[i].innerHTML)
    // }
})
const checkwin=()=>{
    winGame.forEach((e)=>{
        var xyes=0;
        var oyes=0;
        for(i of e){
            if(boxes[i].innerHTML=='x'){
                // console.log("x")
                 xyes+=1
            }
            else if(boxes[i].innerHTML=='0'){
                 oyes+=1
                // console.log("no")
            }
            // console.log(boxes[i].innerHTML)
        }
        // console.log("x",xyes)
        // xyes=0
        // console.log("0",oyes)
        // oyes=0
        if(xyes==3){
            status1.innerHTML='X won the Game';
            gameOver=true;
            let overtune=new Audio('gameover.mp3')
            overtune.play()
            
        }
        else if(oyes==3){
            console.log('0 win')
            status1.innerHTML='0 won the Game'
            gameOver=true;
            let overtune=new Audio('gameover.mp3')
            overtune.play()
            
        }
        else{
             xyes=0;
             oyes=0;
        }
    })
}

initialise()


