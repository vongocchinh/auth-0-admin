import {combineReducers} from 'redux';

import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import CategoryMessage from './category/category';
var myReducer=combineReducers({
    getFirebase:firebaseReducer,
    getFirestore:firestoreReducer,
    CategoryMessage
});
export default myReducer;