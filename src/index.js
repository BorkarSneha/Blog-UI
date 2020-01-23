import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startSetUsers} from './actions/users'
import {startSetPosts} from './actions/posts'
import {startSetComments} from './actions/comments'
import 'bootstrap/dist/css/bootstrap.css'

const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUsers())
store.dispatch(startSetPosts())
store.dispatch(startSetComments())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

