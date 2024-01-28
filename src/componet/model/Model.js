import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { employeeAction, modelOpen } from '../../features/action'

const Model = () => {
    const {employee} = useSelector((state)=>state.empDetails)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        file: null,
        email: "",
        mobile: "",
        address: "",
        salary: "",
        gender: "",
        dob: ""
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        // file: "",
        email: "",
        mobile: "",
        address: "",
        salary: "",
        gender: "",
        dob: ""
    })

    const validate = (values) => {
        const newError = {
            firstName: values.firstName === "" ? "First Name is Required" : "",
            lastName: values.lastName === "" ? "Last Name is Required" : "",
            // file:values.firstName === ""? "Profile photo is Required":"",
            email: values.email === "" ? "Email is Required" : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? "" : "Invalid Email Format",
            mobile: values.mobile === "" ? "Mobile is Required" : /^[0-9]+$/.test(values.mobile) ? "" : "Invalid Mobile Number",
            address: values.address === "" ? "Address is Required" : "",
            gender: values.gender === "" ? "Please Select your gendar" : "",
            dob: values.dob === "" ? "Date of Birth is Required" : "",
            salary: values.salary === "" ? "Salary is Required" : /^[0-9]+$/.test(values.salary) ? "" : "Invalid Salary Format",
        }
        setErrors(newError)

        return Object.values(newError).every(error => error === "");
    }

    const handleChange = (event) => {
        const { name, value, type } = event.target;
    
        if (type === 'file') {
          const file = event.target.files[0];
          setData((prev) => ({ ...prev, [name]: file }));
        } else {
          setData((prev) => ({ ...prev, [name]: value }));
        }
    
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      };
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate(data)
        if (isValid) {
            const fileDataURL = data.file ? URL.createObjectURL(data.file) : null;
            dispatch(employeeAction({ ...data, file: fileDataURL,id:employee?.length }));
            dispatch(modelOpen(false));
        }
    }



    return (
        <div className='model-conatiner'>
            <div className='model-header'>
                <h2>Add a New Employee</h2>
            </div>
            <div className='model-details'>
                <form onSubmit={handleSubmit}>
                    <div className='model-name model-input'>
                        <div>
                            <input onChange={handleChange} name="firstName" value={data.firstName} type='text' placeholder='Enter First Name' />
                            <div className="error-container">{errors.firstName && <span>{errors.firstName}</span>}</div>
                        </div>
                        <div>
                            <input onChange={handleChange} name="lastName" value={data.lastName} type='text' placeholder='Enter Last Name' />
                           <div className="error-container"> {errors.lastName && <span>{errors.lastName}</span>}</div>
                        </div>
                    </div>
                    <div className='model-input'>
                        <input onChange={handleChange} name="file"  type='file' placeholder='Upload Profile' />
                    </div>
                    <div className='model-input model-name'>
                        <div>
                            <input onChange={handleChange} name="email" value={data.email} type='text' placeholder='Enter Email' />
                           <div className="error-container"> {errors.email && <span>{errors.email}</span>}</div>
                        </div>
                        <div >
                            <input onChange={handleChange} name="mobile" value={data.mobile} type='text' placeholder='Enter Mobile' />
                           <div className="error-container"> {errors.mobile && <span>{errors.mobile}</span>}</div>
                        </div>
                    </div>
                    <div className='model-input model-name'>
                        <div>
                            <input onChange={handleChange} name="address" value={data.address} type='text' placeholder='Enter Address' />
                           <div className="error-container"> {errors.address && <span>{errors.address}</span>}</div>
                        </div>
                        <div>
                            <input onChange={handleChange} name="salary" value={data.salary} type='text' placeholder='Enter Salary' />
                           <div className="error-container"> {errors.salary && <span>{errors.salary}</span>}</div>
                        </div>
                    </div>
                    <div className='model-input model-name'>
                        <div style={{width:"100%"}}>
                            <select onChange={handleChange} name="gender" value={data.gender}>
                                <option style={{ display: "none" }}>Gender</option>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>
                           <div className="error-container"> {errors.gender && <span>{errors.gender}</span>}</div>
                        </div>
                        <div style={{width:"100%"}}>
                            <input onChange={handleChange} name="dob" value={data.dob} type='date' />
                           <div className="error-container"> {errors.dob && <span>{errors.dob}</span>}</div>
                        </div>
                    </div>
                    <div className='model-input'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Model