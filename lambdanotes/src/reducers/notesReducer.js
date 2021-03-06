import { GET_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, SEARCH_NOTES } from '../actions/index';


const initialState = [
        {title: 'whatever1',
        content: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        id: 0},
        {title: 'whatever2',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 1},
        {title: 'whatever3',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 2},
        {title: 'whatever4',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 3},
]


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return [
                ...state
            ]
        case ADD_NOTE:
            return [
                ...state, action.payload
            ]
        case EDIT_NOTE:
                state.forEach((note, index) => {
                    if (note.id == action.payload.id) {
                        state.splice(index, 1, action.payload)
                    }
                })
                return [...state]
        case DELETE_NOTE:
            state.filter(note => note.id != action.payload.id)
            return [...state]
        case SEARCH_NOTES:
            state.filter(note => note.title.indexOf(action.payload) == '-1' )
            return [...state]
        default:
            return state;
    }
}

export default notesReducer;