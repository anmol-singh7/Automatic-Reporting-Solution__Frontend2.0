import React, { useState } from "react";
import { fetchPostApi } from '../api.js/conduct';
import { inputdata } from "../people/tabletypes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../Design/user.css"

const Creation = () => {
    const URL = process.env.REACT_APP_URL;

    const [values, setValues] = useState(inputdata["user"].fields);
    const { state } = useLocation();
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        console.log(name,value,values);
        setValues({ ...values, [name]: value });
        console.log(values);
    };

    // const handlesubmit=async(endpoint,Body)=>{
       
    //     console.log(endpoint,Body);
    //     // const response = await fetchPostApi("https://automatic-reporting-system.onrender.com/api/"+endpoint,Body);
    //     // console.log("handlesubmit",response);
    // }
    const handleSubmit =async(event,endpoint,Body)=>{
        event.preventDefault();
        console.log(endpoint, Body);
         const response = await fetchPostApi("https://automatic-reporting-system.onrender.com/api/"+endpoint,Body);
        //  if(response.status===200){

        //  }
        console.log("handlesubmit",response);
    }


    return (
        <div className="usercreation-div">
            <label>
                <h1 className="usercreation-h1">{`Create New ${state}`}</h1>
            </label>
            <div className="formcenter">
                <form className="usercreation-form" onSubmit={(e) => handleSubmit(e, inputdata[state].endpoint, values)}>
                    {inputdata[state].fieldnames.map((name,index)=> name[3]==="input" ?
                    <div className="usercreation-div2">

                        <label className="usercreation-label-2">{name[0]}</label>
                        <input
                            className="usercreation-input"
                            type={name[2]}
                            id={name[1]}
                            name={name[1]}
                            value={values[name[1]]}
                            onChange={changeHandler}
                            placeholder={`Enter your ${name[0]}`}
                            required
                        />

                    </div>
                        : <select
                            className="usercreation-input"
                            type={name[2]}
                            id={name[1]}
                            name={name[1]}
                            value={values[name[1]]}
                            onChange={changeHandler}
                            placeholder={`Enter your ${name[0]}`}
                            required
                            
                        >
                            <option value="" disabled >
                                Select an option
                            </option>
                            {/* <option key={1}>Admin</option> */}
                            <option key={2}>Creator</option>
                            <option key={3}>Checker</option>
                            <option key={4}>Approver</option>

                        </select>

)};
                    <div>
                        <Link to={inputdata[state].backpoint}> <button className="usercreation-button" type="submit">
                            Back                 </button></Link>

                        <button className="usercreation-button" >
                            enter
                        </button>
                        {/* <button type="button" onClick={(()=>console.log(values))}> </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Creation;
