import { SET_STATUS } from "../../constants/actions"

const initialState= {show: false}

export const dialogReducer= (state= initialState, action)=>{
    switch (action.type){
        case SET_STATUS:
          return {
            ...state,
            show: action.show
          }
                    
        default: 
          return state
    }
        
}