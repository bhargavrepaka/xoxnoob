const tiles=Array.from(document.getElementsByClassName("tile"))
const playerDisplay=document.querySelector(".display-player")
const resetButton= document.querySelector(".reset")
const announcer=document.querySelector(".announcer")

console.log(playerDisplay,resetButton,announcer)


let board=["","","","","","","","",""]
let currentPlayer="X"
let isGameActive=true


const playerxwon="Player X Wins"
const playerowon="Player O Wins"
const tie="Tie"


const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]

]


const announce=(type)=>{
    switch(type){
        case playerowon:
            announcer.innerHTML = "Player <span class='playerO'>&nbsp; O </span>&nbsp; Won";
            break;
        case playerxwon:
            announcer.innerHTML = "Player <span class='playerX'>&nbsp; X </span>&nbsp; Won";
            break;
        case tie:
            announcer.innerText = 'Tie';
    
    }
    announcer.classList.remove("hide")
}

const handleResultValidation=()=>{
    let roundWon=false
    for(let i=0;i<=7;i++){
        
        const winningCondition=winningConditions[i]
        const a=board[winningCondition[0]]
        const b=board[winningCondition[1]]
        const c= board[winningCondition[2]]
        console.lo
        if(a===""||b===""|| c===""){
            continue
        }
        if(a===b && b===c){
            roundWon=true
            console.log(roundWon)
            break
        }
    }
    if(roundWon){
        announce(currentPlayer==="X"?playerxwon:playerowon)
        isGameActive=false
        return
    }
    if(!board.includes("")){
        announce(tie)
        return
    }
}




const isValidAction=(tile)=>{
    if(tile.innerText=="X"|| tile.innerText=="O"){
        return false
    }
    return true
}


const updateBoard=(index)=>{
    board[index]=currentPlayer
}

const changePlayer=()=>{
    playerDisplay.classList.remove(`player${currentPlayer}`)
    currentPlayer= currentPlayer=== "X"? "O": "X";
    playerDisplay.innerText=currentPlayer
    playerDisplay.classList.add(`player${currentPlayer}`)
}


const userAction=(tile,index)=>{
    if(isValidAction(tile)&&isGameActive){
        tile.innerText=currentPlayer
        updateBoard(index)
        handleResultValidation()
        console.log("is reaching change player",index)
        changePlayer()

    }
    

}



tiles.forEach((tile,index)=>{
    tile.addEventListener("click",()=>{
        userAction(tile,index)
    })
})


resetButton.addEventListener("click",()=>{
    window.location.reload();

})



// console.log(tiles)

// tiles.forEach(tile => {
//     tile.addEventListener("click",()=>{
//         console.log(tile)
//         if (tile.innerText=="x"){
//             tile.innerText=""
//         }else{
//             tile.innerText="x"
//         }
        

//     })
    
// });