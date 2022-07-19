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
// console.log(CardArray);
CardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('#grid');
const CardChosn = [];
function CreateBoard(){
    for (let i=0;i<CardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','./SRC/blank.png');
        card.setAttribute('data-id',i);
        console.log(card , i)
        card.addEventListener('click',flipcard)
        grid.append(card);
    }
}

CreateBoard()

function flipcard(){
   const cardId = this.getAttribute('data-id')
   CardChosn.push(CardArray[cardId].name);
   this.setAttribute('src',CardArray[cardId].img)
}