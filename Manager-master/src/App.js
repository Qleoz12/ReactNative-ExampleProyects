import React ,{Component} from 'react';

import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import {allReducers} from './reducers';
import Router from './Router';




class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAb6UfgoofvvdpHkU0rAvUMWK05j7SEZts",
            authDomain: "manager-90c6f.firebaseapp.com",
            databaseURL: "https://manager-90c6f.firebaseio.com",
            projectId: "manager-90c6f",
            storageBucket: "",
            messagingSenderId: "1007236764502"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(allReducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store = {store}>
               <Router/>
            </Provider>
        );
    };
}
export default App;