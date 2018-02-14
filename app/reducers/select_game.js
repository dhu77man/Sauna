export default function(state={}, action) {

    switch(action.type){
        case 'SELECTED_GAME':
            state = Object.assign({}, state);
            state.messagesByChatId[action.payload.chatById].push(action.payload.data);
            break;
    }
    

    return state;
}