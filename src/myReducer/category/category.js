import * as types from '../../constans/category';

var initialState={
    addCategoryIn:false,
    addCategorySuccess:false,
    deleteCategoryIn:false,
    deleteCategorySuccess:false,
    updateCategoryIn:false,
    updateCategorySuccess:false,
}


var myReducer=(state=initialState,actions)=>{
        switch(actions.type){
            case types.ADD_CATEGORY_IN:
                state={
                    addCategoryIn:true,
                    addCategorySuccess:false,
                    deleteCategoryIn:false,
                    deleteCategorySuccess:false,
                    updateCategoryIn:false,
                    updateCategorySuccess:false,
                }
            return state;
            case types.ADD_CATEGORY_SUCCESS:
                state={
                    addCategoryIn:false,
                    addCategorySuccess:true,
                    deleteCategoryIn:false,
                    deleteCategorySuccess:false,
                    updateCategoryIn:false,
                    updateCategorySuccess:false,
                }
            return state;
            case types.DELETE_CATEGORY_IN:
                state={
                    addCategoryIn:false,
                    addCategorySuccess:false,
                    deleteCategoryIn:true,
                    deleteCategorySuccess:false,
                    updateCategoryIn:false,
                    updateCategorySuccess:false,
                }
            return state;
            case types.DELETE_CATEGORY_SUCCESS:
                state={
                    addCategoryIn:false,
                    addCategorySuccess:false,
                    deleteCategoryIn:false,
                    deleteCategorySuccess:true,
                    updateCategoryIn:false,
                    updateCategorySuccess:false,
                }
            return state;
            case types.UPDATE_CATEGORY_IN:
                state={
                    addCategoryIn:false,
                    addCategorySuccess:false,
                    deleteCategoryIn:false,
                    deleteCategorySuccess:false,
                    updateCategoryIn:true,
                    updateCategorySuccess:false,
                }
            return state;
            case types.UPDATE_CATEGORY_SUCCESS:
                state={
                    addCategoryIn:false,
                    addCategorySuccess:false,
                    deleteCategoryIn:false,
                    deleteCategorySuccess:false,
                    updateCategoryIn:false,
                    updateCategorySuccess:true,
                }
            return state;
            case types.resetCategory:
                state={
                    addCategoryIn:false,
                    addCategorySuccess:false,
                    deleteCategoryIn:false,
                    deleteCategorySuccess:false,
                    updateCategoryIn:false,
                    updateCategorySuccess:false,
                }
            return state;
            default : return state;
        }
}
export default myReducer;