import React, { Component } from 'react'
import {
    graphql,
} from "@apollo/client/react/hoc"
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        }
    }

    displayBook () {
        var data = this.props.data;
        if (data.loading) {
            return <div>Loading Book.......</div>
        } else {
            return data.books.map(book => {
                return <li onClick={(e) => { this.setState({ selected: book.id }); }} key={book.id}>
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
                <BookDetails bookId={this.state.selected} />
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);