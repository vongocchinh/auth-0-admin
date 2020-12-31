import React, { Component } from 'react'
import AddCategory from './../../components/category/addCategory/addCategory';
import { compose } from 'redux';
import * as action from '../../action/category';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
 class categoryAdd extends Component {
    render() {
        var {CategoryMessage}=this.props;
        if(CategoryMessage.addCategorySuccess){
            setTimeout(() => {
                this.props.resetCategory();
            }, 500);
            return <Redirect to="/category" />

        }
        return (
           <>
               <AddCategory addCategory={this.addCategory}/>
           </>
        )
    }
    addCategory=(data)=>{
        this.props.addCategory(data);
    }
}
const mapStateToProps=(state)=>{

    return {
        CategoryMessage:state.CategoryMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        addCategory:(data)=>{
            dispatch(action.addCategory(data));
        },
        resetCategory:()=>{
            dispatch(action.resetCategory());
        }
    }
}
export default compose(connect(mapStateToProps,dispatchToProps),firestoreConnect(own=>[
    {
        collection:"category"
    }
])) (categoryAdd);