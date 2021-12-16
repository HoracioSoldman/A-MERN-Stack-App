import { SET_PGTITLE } from "../../constants/actions"

const initialState= {title: 'Reservations'}

export const pgTitleReducer= (state= initialState, action)=>{
    switch (action.type){
        case SET_PGTITLE:
          return {
            ...state,
            title: action.pgtitle
          }
                    
        default: 
          return state
    }
        
}