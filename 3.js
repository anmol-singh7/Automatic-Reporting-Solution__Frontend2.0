import React,{useEffect, useState} from 'react'
// import { tableTypeMap } from '../people/tabletypes';
import { fetchGetApi } from '../api.js/conduct';
import { Link } from 'react-router-dom';
import "../Design/table.css";

const Table =( props) => {
const [heads, setHeads] = useState([]);
const [tableBody,setTableBody]=useState([]);
const [selectedRow, setSelectedRow] = useState(null);
const isButtonDisabled = selectedRow === null;
const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    marginRight: '10px',
  };
const fetch=async (AAAA)=>{
  const x= await fetchGetApi(AAAA);
  console.log("insideeeeeeeeeeeee",x)
  setTableBody(x)
}
 const handleClick = (index) => {
    console.log("index",index)
    if (index === selectedRow) {
      console.log("selected",selectedRow)
      setSelectedRow(null);
    } else {
      console.log("other",selectedRow)
      setSelectedRow(index);
    }
  };

  useEffect(() => { 
    if (props.tableHollow && props.tableHollow.tableHeads !== undefined) {
      setHeads(props.tableHollow.tableHeads);
      fetch("https://automatic-reporting-system.onrender.com/api/"+props.tableHollow.endpoint)
  };
 },[props.tableHollow]);
 
return(
<div><table className='systemmaster-table'>
      <thead className='systemmaster-thead'>
        <tr className='systemmaster-tr'>
          {heads.map((heading) => (
            <th className='systemmaster-th' key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className='systemmaster-tbody'>
        {tableBody.map((field, index) => (
          <tr  style={
            selectedRow === field
              ? { backgroundColor: 'lightgreen' }
              : { backgroundColor: 'white' }
          }
          onClick={() => handleClick(index)}className='systemmaster-tr' key={index}>
            {props.tableHollow.displayFields.map((cell, index) => (
                  <td style={{border:"solid 1px black"}} key={index}>{field[cell]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{display:"flex",justifyContent:"end"}}>
              <button style={buttonStyle} disabled={isButtonDisabled}>Edit</button>
            {/* </div> */}
            {/* <div className='clientmaster-td'> */}
              <button  style={buttonStyle} disabled={isButtonDisabled}>Delete</button>
      </div>
       <div style={{display:"flex",justifyContent:"end"}}>
            {/* </div> */}
            {/* <div className='clientmaster-td'> */}
             <Link to="/admin/usercreation"> <button  style={buttonStyle} >Add User</button></Link>
      </div>
    </div>)
    }




export default Table;