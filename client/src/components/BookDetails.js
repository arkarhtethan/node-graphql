import React, { Component } from 'react'
import { graphql, } from "@apollo/client/react/hoc"
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    displayBookDetails () {
        const { book } = this.props.data;
        console.log(this.props)
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(book => <li key={book.id}>{book.name}</li>)}
                    </ul>
                </div>
            )
        }

    }

    render () {
        return (
            <div id="book-details">
                <p>Output book details here</p>
                {this.displayBookDetails()}
            </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId,
            }
        }
    }
})(BookDetails);