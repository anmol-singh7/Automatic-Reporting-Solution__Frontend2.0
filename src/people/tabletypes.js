export const tableTypeMap = {
  Clients: { tableHeads: ['Client ID', 'Client Name', 'Database No.'], displayFields: ['clientid', 'clientname', 'databaseNum'], endpoint: 'clients', deleteendpoint: 'deleteclient' },
  Systems: { tableHeads: ['System ID', 'System Name'], displayFields: ['systemid', 'systemname'], endpoint: 'systems', deleteendpoint: 'deletesystem' },
  Manufacturers: { tableHeads: ['Manufacturer ID', 'Manufacturer Name'], displayFields: ['manufacturerid', 'manufacturername'], endpoint: 'manufacturers', deleteendpoint: 'deletemanufacturer' },
  Users: { tableHeads: ['User ID', 'User Name'], displayFields: ['userid', 'username'], endpoint: 'users', deleteendpoint: 'deleteuser' },
  Reports: { tableHeads: ['Report ID', 'Report Name', 'Date', 'Status'], displayFields: ['reportid', 'reportname', 'datebegin', 'status1'], endpoint: 'reports', deleteendpoint: 'deletereport' },
};


export const inputdata = {
  user: { fields: { userid: "", username: "", employid: "", department: "", usertype: "", phonenumber: "", email: "", password: "", userstatus: "active" }, fieldnames: [["User Id", 'userid', 'text', "input"],["User Name", 'username', 'text', "input"], ["Employ Id", 'employid', 'text', "input"], ["Department", 'department', 'text', "input"], ["User Type", 'usertype', 'text', "dropdown"], ["Phone Number", 'phonenumber', 'text', "input"], ["Email", 'email', 'text', "input"], ["Password", 'password', 'text', "input"]],endpoint:"addusers"},
  system: { systemid: '', systemname: '', logoid: '', logopath: '' },
  manufacturer: { manufacturerid: '', manufacturername: '', logoid: '', logopath: '' },
  client: { clientid: "", clientname: "", hostofdatabase: "", userofdatabase: "", passwordofdatabase: "", databasename: "", waitForConnections: 1, connectionLimit: 5, queueLimit: 0, }


}