let books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    soldOut: false,
    inStock: false,
    price: "CHF 30"
    }, 
    {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    soldOut: false,
    inStock: false,
    price: "CHF 30"
    },
    {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    soldOut: false,
    inStock: false,
    price: "CHF 30"
    }
];


let booksTitle;
let booksAuthor;
let booksPrice;

function displayBooks() {

for (let i = 0; i <= books.length - 1; i++) {
    //title-author

    booksTitle = document.createElement("h3");
    booksAuthor = document.createElement("p");
    booksPrice = document.createElement("p")
    
    document.body.appendChild(booksTitle);
    document.body.appendChild(booksAuthor);
    document.body.appendChild(booksPrice);
    
    booksTitle.innerHTML = books[i].title;
    booksAuthor.innerHTML = "Author : " + books[i].author;
    booksPrice.innerHTML = "Price: " + books[i].price
    }
}

displayBooks()

books.sort ((a,b) => {
    let ta = a.title.toLowerCase();
    let tb= b.title.toLowerCase();
    
    if (ta < tb) {
        return -1;
    }
    if (ta > tb) {
        return 1;
    }
    return 0;
});

books.forEach((e) => {
    displayBooks()
})