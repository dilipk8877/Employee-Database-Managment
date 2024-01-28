const intialState = {
    employee: [],
    getDetails:{}
}

const employeeReducer = (state = intialState, action) => {
    switch (action.type) {
        case "EMPL_DATA":
            return {
                ...state,
                employee: [...state.employee, action.payload]
            }
        case "GET_EMPLOYEE_DETAILS":
            return{
                ...state,
                getDetails:action.payload
            }
        case "REMOVE_EMPLOYEE":
            return {
                ...state,
                employee:state.employee.filter((list)=>list.id !==action.payload)
            }
        default:
            return state
    }
}

export default employeeReducer