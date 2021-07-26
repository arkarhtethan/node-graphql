import React, { Component } from 'react'
import {
    gql,
} from "@apollo/client"
import {
    graphql,
} from "@apollo/client/react/hoc"

const getAuthorsQuery = gql`
query {
    authors {
        name
        id
    }
}
`;



class AddBook extends Component {
    displayAuthors () {
        var data = this.props.data;
        console.log(data);
        if (data.loading) {
            return <div>Loading Book.......</div>
        } else {
            return data.authors.map(author => {
                return <option value={author.id} key={author.id}>
                    {author.name}
                </option>
            })
        }
    }
    render () {
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>

            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);