import React, { Component } from 'react'
import {
    gql,
} from "@apollo/client"
import {
    graphql,
} from "@apollo/client/react/hoc"

const getBooksQuery = gql`
query {
    books {
        name
        id
        genre
    }
}
`;

class BookList extends Component {
    displayBook () {
        var data = this.props.data;
        if (data.loading) {
            return <div>Loading Book.......</div>
        } else {
            return data.books.map(book => {
                return <li key={book.id}>
                    {book.name}
                </li>
            })
        }
    }
    render () {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBook()}
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);