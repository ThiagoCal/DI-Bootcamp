const allBooks = [
    {
        name: "Lord of the Rings - the two tower",
        author: "Tolkien",
        image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0074/9780007488339.jpg",
        alreadyRead: true,
    },
    {
        name: "Lord of the Rings - the fellowship of the ring",
        author: "Tolkien",
        image: "https://m.media-amazon.com/images/I/81MZ8OjmQrL.jpg",
        alreadyRead: false,
    }
]


function addBooks(){
    let division = document.querySelector(".listBooks")
    let bookCard = document.createElement("div")
    let table = document.createElement("table")
    let innerTable = document.createElement("tr")
    for(let book of allBooks){
        let tableRow = document.createElement("tr")
        let header = document.createElement("th")
        let title = document.createTextNode(book["name"])
        tableRow.appendChild(title)
        header.appendChild(tableRow)
        innerTable.appendChild(header)
    
        let bookInfo = document.createElement("td")
        let author = document.createTextNode(book["author"])
        bookInfo.appendChild(author)
        tableRow.appendChild(bookInfo)

        let imageTd = document.createElement("td")
        let imageBook = document.createElement("img")
        imageBook.setAttribute("src", book["image"])
        imageTd.appendChild(imageBook)
        tableRow.appendChild(imageTd)

        if(book["alreadyRead"] === true){
            tableRow.style.backgroundColor = "red"
        }

    }
    table.appendChild(innerTable)
    bookCard.appendChild(table)
    division.appendChild(bookCard)
}


addBooks();