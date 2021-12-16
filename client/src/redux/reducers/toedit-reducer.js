import { SET_TO_EDIT } from "../../constants/actions"

const initialState= {reservation: null}

export const toEditReducer= (state= initialState, action)=>{
    switch (action.type){
        case SET_TO_EDIT:
          return {
            ...state,
            reservation: action.payload
          }
                    
        default: 
          return state
    }
        
}