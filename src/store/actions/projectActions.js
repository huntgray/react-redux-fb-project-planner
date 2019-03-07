export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to db

    // once response received, dispatch action
    dispatch({ type: 'CREATE_PROJECT', project });
  }
}
