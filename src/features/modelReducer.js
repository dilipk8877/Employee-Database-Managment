const intialState = {
    isModelOpen:false
}

const modelReducer = (state = intialState, action) => {
    switch (action.type) {
        case "IsModelOpen":
            return {
                isModelOpen:action.payload
            }
        default:
            return state
    }
}

export default modelReducer