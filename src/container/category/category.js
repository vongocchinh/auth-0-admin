import React, { Component } from 'react'
import CategoryItem from '../../components/category/categoryItem'
import Category from '../../components/category/category'
// import {db} from './../../config/config';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import * as action from './../../action/category';
class category extends Component {
    
    render() {
        var {CategoryFire,CategoryMessage}=this.props;
        console.log(CategoryMessage);
        if(CategoryMessage.deleteCategorySuccess&&CategoryMessage.updateCategorySuccess){
            this.props.resetCategory();
        }
        return (
            <Category show={this.show(CategoryFire)} />
        )
    }
    show=(category)=>{
        var result=null;
        if(category){
            result=category.map((data,key)=>{
                return <CategoryItem 
                    category={data}
                    key={key}
                    stt={key}
                    onDelete={this.onDelete}
                    updateCategory={this.updateCategory}
                />
            })
        }
        return result;
    }
    onDelete=(category)=>{
        this.props.onDelete(category);
    }
    updateCategory=(data)=>{
        this.props.updateCategory(data);
    }
}
const mapStateToProps=(state)=>{
    return {
        CategoryFire:state.getFirestore.ordered.category,
        CategoryMessage:state.CategoryMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        onDelete:(category)=>{
            dispatch(action.deleteCategory(category));
        },
        resetCategory:()=>{
            dispatch(action.resetCategory());
        },
        updateCategory:(category)=>{
            dispatch(action.updateCategory(category));
        }
    }
}
export default compose(connect(mapStateToProps,dispatchToProps),firestoreConnect(own=>[
    {
        collection:"category"
    }
])) (category);