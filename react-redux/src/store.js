import {createStore} from 'redux';

export default createStore(function(state, action) {
    if(state === undefined) {
        return {number:0}
    }
    if(action.type === 'INCREMENT') {
        // return {number:state.number + action.size}
        return {...state, number:state.number + action.size} // state 복제하고 복제된 state에서 그 뒤 추가된 프로퍼티값만 변형시킨다 
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())