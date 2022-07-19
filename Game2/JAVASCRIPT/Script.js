const CardArray = [
    {
        name: 'fires',
        img: './SRC/fries.png',
        
    },
    {
        name: 'cheeseburger',
        img: './SRC/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './SRC/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './SRC/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './SRC/milkshake.png',
    },
    {
        name: 'pizza',
        img: './SRC/pizza.png'
    },
    {
        name: 'fires',
        img: './SRC/fries.png',
        
    },
    {
        name: 'cheeseburger',
        img: './SRC/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './SRC/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './SRC/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './SRC/milkshake.png',
    },
    {
        name: 'pizza',
        img: './SRC/pizza.png'
    },
]
console.log(CardArray);
CardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('#grid');
const Result = document.querySelector('#result')
let CardChosn = [];
let CardChosnIds = [];
const CardsWon = [];
function CreateBoard(){
    for (let i=0;i<CardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','./SRC/blank.png');
        card.setAttribute('data-id',i);
        // console.log(card , i)
        card.addEventListener('click',flipcard)
        grid.append(card);
    }
}

CreateBoard()

function CheckMatch(){ 
    const Cards = document.querySelectorAll('img')
    if (CardChosn[0] == CardChosn[1])
    {
        alert('match')
        Cards[CardChosnIds[0]].setAttribute('src','./SRC/white.png')
        Cards[CardChosnIds[1]].setAttribute('src','./SRC/white.png')
        Cards[CardChosnIds[0]].removeEventListener('click',flipcard)
        Cards[CardChosnIds[1]].removeEventListener('click',flipcard)
        CardsWon.push(CardChosn)

    }
    else{
        Cards[CardChosnIds[0]].setAttribute('src','./SRC/blank.png')
        Cards[CardChosnIds[1]].setAttribute('src','./SRC/blank.png')
    }
    Result.innerHTML = CardsWon.length
    CardChosn = [];
    CardChosnIds = [];
    if ( CardsWon.length == CardArray.length/2) {
      Result.innerHTML = 'WIN'
    }
   
}
function flipcard(){
   const cardId = this.getAttribute('data-id')
   CardChosn.push(CardArray[cardId].name);
   CardChosnIds.push(cardId)
   this.setAttribute('src',CardArray[cardId].img)
   if (CardChosn.length === 2){
        setTimeout(CheckMatch,500);
   }
}