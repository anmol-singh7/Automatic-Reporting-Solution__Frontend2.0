import React,{useEffect, useState} from 'react'
import { fetchGetApi,updatetables } from '../api.js/conduct';
import { Link } from 'react-router-dom';
import "../Design/table.css";

const Table = (props) => {
  const [heads, setHeads] = useState([]);
  const [tableBody, setTableBody] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isButtonDisabled = selectedRow === null;
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    marginRight: '10px',
  };

  const fetchTableData = async (endpoint) => {
    const data = await fetchGetApi(`https://automatic-reporting-system.onrender.com/api/${endpoint}`);
    setTableBody(data);
    setSelectedRow(null);
  }

  const handleClick = (index) => {
    if (index === selectedRow) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }
  };
 
  const handleDeactivate = async (id, endpoint, key) => {
    const BODY = {};
    BODY[key] = id;
    await updatetables(`https://automatic-reporting-system.onrender.com/api/${endpoint}`, BODY)
    setIsModalOpen(false);
  }

  useEffect(() => { 
    if (props.tableHollow && props.tableHollow.tableHeads !== undefined) {
      setHeads(props.tableHollow.tableHeads);
      fetchTableData(props.tableHollow.endpoint)
    }
  }, [props.tableHollow]);

  return (
    <div>
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
            <tr
              style={
                selectedRow === field[props.tableHollow.displayFields[0]]
                  ? { backgroundColor: 'lightgreen' }
                  : { backgroundColor: 'white' }
              }
              onClick={() => handleClick(field[props.tableHollow.displayFields[0]])}
              className='systemmaster-tr'
              key={index}
            >
              {props.tableHollow.displayFields.map((cell, index) => (
                <td style={{ border: "solid 1px black" }} key={index}>{field[cell]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button style={buttonStyle} disabled={isButtonDisabled}>Edit</button>
        <button style={buttonStyle} disabled={isButtonDisabled} onClick={() => setIsModalOpen(true)}>Delete</button>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Link to="/admin/usercreation"><button style={buttonStyle}>Add User</button></Link>
      </div>

      {isModalOpen && (
  <div className="modal-container">
    <div className="modal-content">
      <h2>Are you sure you want to delete this row?</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setIsModalOpen(false)} style={{ marginRight: "10px" }}>Cancel</button>
        <button onClick={() => handleDeactivate(selectedRow,props.tableHollow.deleteendpoint,props.tableHollow.displayFields[0])}>Confirm</button>
      </div>
    </div>
  </div>
)}
    </div>
)};

    export default Table