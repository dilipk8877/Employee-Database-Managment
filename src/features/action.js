export const modelOpen = (data)=>{
    return{
        type:"IsModelOpen",
        payload:data
    }
}

export const getEmployeeDeatil = (data)=>{
    return{
        type :"GET_EMPLOYEE_DETAILS",
        payload:data
    }
}


export const RemoveEmployee = (data)=>{
    return{
        type :"REMOVE_EMPLOYEE",
        payload:data
    }
}

export const employeeAction = (data)=>{
    return{
        type:"EMPL_DATA",
        payload:data
    }
}

