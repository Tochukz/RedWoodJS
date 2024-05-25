## GraphQL Queries and Mutations for Playground
### Description
Here we show examples of execution of queries and mutations for GraphQl API using a GraphQL client such as _GraphQL Playground_ or _GraphiQl_.  

### Queries
__Query definition__  
We will use the following query definition to demonstrate execution of queries in the subsequent sections.
```js
type Post {
  id: Int!
  title: String!
  body: String!
  createdAt: DateTime!
}

type Query {
   posts: [Post!]!
   post(id: Int!)
 }
```
Here we have two queries, _posts_ and _post(id)_ which returns a collection of _Post_ and a single _Post_ object respectively.

__Collection of posts__  
To execute this `posts` query which returns a collection of `Post` objects
```js
query {
  posts {
    id
    title
    body
    createdAt
  }
}
```
__Single post__  
To execute the `post(id)` query which returns a single `Post` object.
```js
query {
  post(id: 1) {
    id
    title
    body
    createdAt
  }
}
```
Take note that we pass a number literal of 1 to the `id` argument.  

__Single post with variable__  
If we want to pass a variable to the `id` argument instead of a literal, we can do
```js
query Post($id: Int!){
  post(id: $id) {
    id
    title
    body
    createdAt
  }
}

```
And then in the variable section we will have
```js
{
  "id": 3
}
```

### Mutations
__Mutation with primitive arguments__  
Say we have a mutation defined as follows
```js
type User {
  id: ID!
  name: String!
  email: String!
}

type Mutation {
  createUser(name: String!, email: String!): User
}
```  
The mutation have two primitive arguments - name and email.     
To execute this mutation we do
```js
mutation {
  createUser(name: "John Doe", email: "john@aol.com") {
    id
    name
    email
  }
}
```
Take note that we pass the string literal _"John Doe"_ and _"john@aol.com"_ for the _name_ and _email_ arguments respectively.

__Mutation with input type__  
Say we have a mutation with `input type` defined as follows
```js
input CreateContactInput {
  name: String!
  email: String!
  message: String !
}

type Contact {
  id: ID!
  name: String!
  message: String!
  createdAt: DateTime!
}

type Mutation {
  createContact(input: CreateContactInput!): Contact!
}
```
To execute the mutation we do
```js
mutation {
  createContact(input: {
    name: "Chucks",
    email: "truetochukz@yahoo.com",
    message: "Just testing the contact creation"
  }) {
    id
    name
    message
    createdAt
  }
}
```  
Note that we pass the input object to the mutation.  

__Mutation with input type using variables__  
If we want to use variables for the input type instead of the object literals, we can do
```js
mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
    id
    name
    message
    createdAt
  }
}
```
And then in the variables section
```js
{
  "input": {
    "name": "Chucks II",
    "email": "truetochukz@aol.com",
    "message": "Just testing variable inputs"
  }
}
```  

### Postman  
When queries or mutation are sent by a client to the Graphql API, they are usually sent as a POST HTTP request.  
We can show this by using Postman to execute the same set of query and mutation using a POST request. 

Here we will list samples of the payload that must be sent as a raw post data in Postman.

__Query collection of posts__
```json
{
    "query": "query {posts {id title body createdAt }}",
    "variables":{"id": 3},    
    "extensions":{}
}
```

__Query Single post__  
```json
{
    "operationName":"Post",
    "query": "query Post($id: Int!) {post(id: $id) {id title body createdAt }}",
    "variables":{"id": 3},    
    "extensions":{}
}
```

__Mutate single contact__  
```json
{
    "operationName":"CreateContact",
    "query":"mutation CreateContact($input: CreateContactInput!) {createContact(input: $input) {id name message createdAt }}",
    "variables":{
        "input":{
            "name":"Tochukwu",
            "email":"truetochukz@aol.com",
            "message":"Just testing variable inputs"
        }
    },
    "extensions":{}
}
```
