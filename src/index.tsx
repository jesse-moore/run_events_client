import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    NormalizedCacheObject,
    ApolloProvider,
} from '@apollo/client';
import { Provider } from 'react-redux';
import { cache } from './graphql/cache';
import { typeDefs } from './graphql/schemas/local';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    // uri: 'http://localhost:4000/graphql',
    typeDefs,
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
