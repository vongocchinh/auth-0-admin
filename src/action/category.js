import * as types from './../constans/category';
import {db} from '../config/config';
export const addCategory=(data)=>{
    return (dispatch,getState,{getFirebase})=>{
            dispatch(addInCategory());
            
        db.collection('category').add({
            categoryName:data.categoryName,
            chuthich:data.chuthich
        }).then(res=>{
            dispatch(addSuccessCategory());
        }).catch(err=>{

        })
    }
}
export const addInCategory=()=>{
    return {
        type:types.ADD_CATEGORY_IN
    }
}

export const addSuccessCategory=()=>{
    return {
        type:types.ADD_CATEGORY_SUCCESS
    }
}





export const deleteCategory=(data)=>{
    return (dispatch,getState,{firebase})=>{
        db.collection('category').doc(data.id).delete().then(res=>{
            dispatch(deleteCategory());
        }).catch(err=>{

        })
    }
}

export const deleteSuccess=()=>{
    return{
        type:types.DELETE_CATEGORY_SUCCESS
    }
}

export const updateCategory=(data)=>{
    return (dispatch,getState,{firebase})=>{
        
            db.collection('category').doc(data.categoryId).set({
                categoryName:data.categoryName,
                chuthich:data.chuthich
            })
    }
}


export const resetCategory=()=>{
    return{
        type:types.resetCategory
    }
}