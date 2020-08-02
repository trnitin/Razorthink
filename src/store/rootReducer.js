import InitialState from './initialState'

const Rootreducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOAD_API_DATA':
            return {
                ...state,
                photoList: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default Rootreducer;