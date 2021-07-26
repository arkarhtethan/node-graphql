const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const app = express();
const schema = require('./schema/schema')

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