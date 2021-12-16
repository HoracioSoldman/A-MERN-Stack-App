import { SET_TO_EDIT } from "../../constants/actions"

export const updateToEdit = (item) => (dispatch, getState) => {
    try {
      dispatch({
        type: SET_TO_EDIT,
        payload: item
      })
    } catch (error) {
      console.log("Error", error)
    }
  }