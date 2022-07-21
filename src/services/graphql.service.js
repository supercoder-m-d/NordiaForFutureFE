import gql from 'graphql-tag';
import {client} from './client';

const filterEvents = () => {
    const query = `query ($network: EthereumNetwork!, $address: String!, $eventType: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $to: ISO8601DateTime, $txFrom: [String!]) {
		ethereum(network: $network){
          smartContractEvents(options:{
            desc: "block.height"
            limit:$limit, offset: $offset},
            date: {since: $from, till: $to},
            txFrom:{in: $txFrom}
          	 smartContractAddress: {is: $address},
            smartContractEvent: {is: $eventType}
          ) {
            smartContractEvent {
              name          
            }
			block {
		        height
		        timestamp {
		          iso8601
		          unixtime
		        }
		    }
	      	arguments {
	        	value
	        	argument
	      	}
          }
        }
	}`;
    return gql(query);
}
export const getEventCount = async (options) => {
    const data = await client.query({
        query: gql(`query ($network: EthereumNetwork!, $address: String!, $eventType: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $to: ISO8601DateTime, $txFrom: [String!]) {
            ethereum(network: $network) {
              smartContractEvents(
                options: {limit: $limit, offset: $offset}
                date: {since: $from, till: $to}
                txFrom: {in: $txFrom}
                smartContractAddress: {is: $address}
                smartContractEvent: {is: $eventType}
              ) {
                count(smartContractEvent: {is: $eventType})
              }
            }
          }
          `),
          variables: options,
          fetchPolicy: 'network-only'
    });
    return data;
}
export const getEvents = async (options) => {
    const data = await client.query({
        query: filterEvents(),
        variables: options,
        fetchPolicy: 'network-only'
    });
    return data;
}