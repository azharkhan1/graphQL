const graphql= require('graphql');
const {GraphQLObjectType,GraphQLInt,GraphQLString} = graphql;

const UserType = new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLInt},
        first_name:{type : GraphQLString},
        last_name : {type:GraphQLString},
        gender : {type:GraphQLString},
        id:{type:GraphQLInt},
    })
})


module.exports = UserType;