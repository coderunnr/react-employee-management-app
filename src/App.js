import React, { Component } from 'react';

import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC8lfNCea4bjzPPd2T6OI2NElIqgvksbNY',
            authDomain: 'geniusclub-d42ea.firebaseapp.com',
            databaseURL: 'https://geniusclub-d42ea.firebaseio.com',
            projectId: 'geniusclub-d42ea',
            storageBucket: 'geniusclub-d42ea.appspot.com',
            messagingSenderId: '817859667998'
          });       
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
