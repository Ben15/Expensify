import authReducer from '../../reducers/auth'

test('login should return uid',()=> {
    const action = {
        type:'LOGIN',
        uid: '1234'
    }
    expect(authReducer({},action)).toEqual({uid:'1234'})
})

test('logout should return an empty object',()=> {
    const action = {
        type:'LOGOUT',
    }
    expect(authReducer({uid:'anything'},action)).toEqual({})
})