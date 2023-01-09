
class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    set capacity(value) {
        this._capacity = value;
    }

    get capacity() {
        return this._capacity;
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw Error('Not enough space in the collection.');
        }

        const currentBook = {
            bookName,
            bookAuthor,
            payed: false
        };

        this.books.push(currentBook);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.findBookByName(bookName);

        if (!book) {
            throw Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let book = this.findBookByName(bookName);

        if (!book) {
            throw Error("The book, you're looking for, is not found.");
        }

        if (!book.payed) {
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let indexOfBook = this.books.indexOf(book);
        this.books.splice(indexOfBook, 1);

        return `${bookName} remove from the collection.`;

    }

    getStatistics(...parameter) {

        let message = '';

        if (parameter.length == 0) {
            message += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
            this.books.sort((b1, b2) => b1.bookName.localeCompare(b2.bookName));
            let sortedArray = [];
            for (let currentBook of this.books) {
                let isPayed = currentBook.payed ? 'Has Paid' : 'Not Paid';
                let bookOutput = `${currentBook.bookName} == ${currentBook.bookAuthor} - ${isPayed}.`;
                sortedArray.push(bookOutput);
            }

           message += sortedArray.join('\n');

        } else {
            let bookAuthor = parameter;
            let book = this.books.find(b => b.bookAuthor == bookAuthor);

            if (!book){
                throw Error(`${bookAuthor} is not in the collection.`);
            }

            let isPayed = book.payed ? 'Has Paid' : 'Not Paid';

            message = `${book.bookName} == ${bookAuthor} - ${isPayed}.`;
        }

        return message;
    }

    findBookByName(name) {
        return this.books.find(b => b.bookName == name);
    }

}

const library = new LibraryCollection(5)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics("Miguel de Cervantes"));








