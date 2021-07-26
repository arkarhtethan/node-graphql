const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema')

const app = express();

app.use(cors())

mongoose.connect(
    'mongodb://127.0.0.1:27017/gql-ninja',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log("now listening for request on 4000");
})