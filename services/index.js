// import {request, gql} from "graphql-request";

// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl85fvr1i0xk401t180um6lid/master",
    cache: new InMemoryCache(),
});

export default client;