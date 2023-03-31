import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { tableTypeMap } from '../people/tabletypes';

const Table =( props) => {
    // console.log("tabledata",tableTypeMap.props.tableHollow);
    const [heads, setHeads] = useState([]);
    console.log("props",props.tableHollow.tableHeads,typeof(props.tableHollow))
    console.log("tabletypemap",typeof(tableTypeMap.Clients))
    console.log("tabletypemap",typeof(tableTypeMap.Clients))
    
   useEffect(() => {
  if (props.tableHollow && props.tableHollow.tableHeads !== undefined) {
    setHeads(props.tableHollow.tableHeads);
  }
}, [props.tableHollow]);

    

    const ren=()=>{
      if(heads===""){
        return<div>select a table</div>
      }
return(<table>
      <thead>
        <tr>
          {heads.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      {/* <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody> */}
    </table>)
    }
  return (
   <div>{ren()}</div>
  )
}



export default Table