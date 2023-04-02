import React, { useState } from "react";
import { fetchPostApi } from '../api.js/conduct';
import { inputdata } from "../people/tabletypes";

const Creation = () => {
    const URL = process.env.REACT_APP_URL;

    const [values, setValues] = useState(inputdata["user"].fields);
    const sele="User";

  

    // const handleSelectChange = (e) => {
    //     const { value } = e.target;
    //     setValues({
    //         ...values,
    //         usertype: value,
    //     });
    //     console.log(values);
    // };

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
        console.log("handlesubmit",response);
    }


    return (
        <div className="usercreation-div">
            <label>
                <h1 className="usercreation-h1">{`Create New ${sele}`}</h1>
            </label>
            <div className="formcenter">
                <form className="usercreation-form" onSubmit={(e) => handleSubmit(e, inputdata["user"].endpoint, values)}>
                    {inputdata["user"].fieldnames.map((name,index)=> name[3]==="input" ?
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
                            <option key={1}>a</option>
                            <option key={2}>b</option>
                            <option key={3}>c</option>
                            <option key={4}>d</option>

                        </select>

)};
                    <div>
                        <button className="usercreation-button" type="submit">
                            Back                 </button>

                        <button   type="submit">
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
