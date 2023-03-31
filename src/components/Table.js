import React,{useEffect, useState} from 'react'
import { tableTypeMap } from '../people/tabletypes';
import { fetchGetApi } from '../api.js/conduct';
import "../Design/table.css"

const Table =( props) => {
    // console.log("tabledata",tableTypeMap.props.tableHollow);
  
    // console.log("tabledata",tableTypeMap.props.tableHollow);\

// console.log("props",props.tableHollow.tableHeads,typeof(props.tableHollow))
// console.log("tabletypemap",typeof(tableTypeMap.Clients))
// console.log("tabletypemap",typeof(tableTypeMap.Clients))
// const[APii,setApii]=useState('')
const [heads, setHeads] = useState([]);
const [tableBody,setTableBody]=useState([]);
const fetch=async (AAAA)=>{
  const x= await fetchGetApi(AAAA);
  console.log("insideeeeeeeeeeeee",x)
  setTableBody(x)
}

useEffect(() => {
  
    if (props.tableHollow && props.tableHollow.tableHeads !== undefined) {
      setHeads(props.tableHollow.tableHeads);
      fetch("https://automatic-reporting-system.onrender.com/api/"+props.tableHollow.endpoint)
  };
 
}, [props.tableHollow]);
 
return(
<table className='systemmaster-table'>
      <thead className='systemmaster-thead'>
        <tr className='systemmaster-tr'>
          {heads.map((heading) => (
            <th className='systemmaster-th' key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className='systemmaster-tbody'>
        {tableBody.map((field, index) => (
          <tr className='systemmaster-tr' key={index}>
            {props.tableHollow.displayFields.map((cell, index) => (
                  <td className='systemmaster-td' key={index}>{field[cell]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* jsjs */}
    </table>)
    }




export default Table