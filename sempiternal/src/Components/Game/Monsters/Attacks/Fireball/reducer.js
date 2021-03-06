//this allows us to get the map out of the redux store as a prop call tiles
const initialState = {
    position: [0, 0],
    isLive: false,
    direction: "West", 
    currentCD: 0,
    maxCD: 4,
}

const fireballReducer = (state = initialState, action) => {
    switch (action.type) {
        case "move":
            return {
                ...state,
                ...action.payload
            }
        case "collide":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default fireballReducer