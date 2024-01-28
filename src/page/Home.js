import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import manFace from "../assets/man-face.png"
import girlFace from "../assets/girl-face.png"
import Model from '../componet/model/Model';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveEmployee, employeeAction, getEmployeeDeatil, modelOpen } from '../features/action';
const Home = () => {
    const { employee, getDetails } = useSelector((state) => state.empDetails)
    const { isModelOpen } = useSelector((state) => state.modelShow)
    const dispatch = useDispatch()

    const getEmployeeDeatils = (employee) => {
        dispatch(getEmployeeDeatil(employee))
    }
    const handleRemove = (id) => {
        dispatch(RemoveEmployee(id));
    }

    return (
        <div className='home-page'>
            <div className='header-section'>
                <div>
                    <h1>Employee Database Managment</h1>
                </div>
                <div className='button-container'>
                    <button onClick={() => dispatch(modelOpen(true))}>Add Employee</button>
                </div>
            </div>
            <div className={isModelOpen ? 'employee-container opacity' : "employee-container"}>
                <div className='employee-list'>
                    <div className='employee-header'>
                        <h2>Employee List</h2>
                    </div>
                    <div className='employee-item-container'>
                        {employee?.map((list) => {
                            return (
                                <div key={list.id} className='employee-item' >
                                    <p onClick={() => getEmployeeDeatils(list)}>{list.firstName} {list.lastName}</p>
                                    <ImCross onClick={() => handleRemove(list.id)} />
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className='employee-info'>
                    <div className='employee-header'>
                        <h2>Employee Information</h2>
                    </div>
                    {employee.length > 0 && <div className='employee-details'>
                        <div className='employee-profile-pic'>
                            {getDetails.file !== null ? <img src={getDetails.file} alt='profile' /> : getDetails.gender === "male" ? <img src={manFace} /> : <img src={girlFace} />}
                            { }
                        </div>
                        <div>
                            <p>Name:- {getDetails.firstName} {getDetails.lastName} </p>
                            <p>Address:- {getDetails.address} </p>
                            <p>Email:- {getDetails.email} </p>
                            <p>Mobile:- {getDetails.mobile}</p>
                            <p>Gender:- {getDetails.gender}</p>
                            <p>Dob:- {getDetails.dob}</p>
                            <p>Salary:- {getDetails.salary}</p>
                        </div>
                    </div>}

                </div>
            </div>
            {isModelOpen && <div className='show-model'>
                <Model />
            </div>}

        </div>
    )
}

export default Home