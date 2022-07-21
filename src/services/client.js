import { ApolloClient,
    InMemoryCache } from '@apollo/client'
  
  export const client = new ApolloClient({
    uri:"https://graphql.bitquery.io/",
    cache: new InMemoryCache(),
    shouldBatch: true,
  });
  