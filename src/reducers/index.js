import {combineReducers} from 'redux';
import _ from 'lodash';


const notesReducer = (state={}, action)=>{


    switch(action.type){
          
        case 'GET_TEXT':
       
        return {...state, ..._.mapKeys(action.payload,'id')}

        case 'ADD_TEXT':

        return {...state, ...action.payload}

         case 'SHOW_TEXT':
             
         return {...state, [action.payload.id]:action.payload}

         case 'EDIT_TEXT':

         return {...state, [action.payload.id]:action.payload}
 
          case 'DELETE_TEXT':
             
          return _.omit(state,action.payload);


        default :

        
        return {}



      

    }

}




export default combineReducers({

    notes : notesReducer

})
