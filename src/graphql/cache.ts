import { gql, InMemoryCache, makeVar } from '@apollo/client';
import { EventInterface } from '../types';

// Initializes to true if localStorage includes a 'token' key,
// false otherwise

const GET_TEST = gql`
    query {
        test @client
    }
`;

// export const cache: InMemoryCache = new InMemoryCache();
export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                test: {
                    read() {
                        console.log('READ');
                        return localStorage.getItem('test');
                    },
                },
            },
        },
    },
});
// cache.writeQuery({
//     query: GET_TEST,
//     data: {
//         test: localStorage.getItem('test'),
//     },
// });

const getLocalStorage = () => {
    try {
        const data = localStorage.getItem('test');
        if (!data) return {};
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
};

export const testVar = makeVar<EventInterface>(getLocalStorage());
