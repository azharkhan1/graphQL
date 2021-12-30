const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schemas');
const app = express();




app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql:true,
    })
)

app.listen(5000,()=>{
    console.log('server is listening on PORT',5000);
})