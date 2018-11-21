const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR': 
      console.log('login error')
      return  {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS': 
      console.log('login success')
      console.log('waht does the state have', state)
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS': 
      console.log('SIGINOUT success')
      return state
    default:
      return state
  }
}

export default authReducer