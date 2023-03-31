export const tableTypeMap = {
    Clients: { tableHeads: ['Client ID','Client Name','Database No.'], displayFields:['clientid', 'clientname', 'databaseNum'],endpoint:'clients'},
    Systems: { tableHeads: ['System ID','System Name'], displayFields: ['systemid', 'systemname'],endpoint:'systems'},
    Manufacturers: { tableHeads: ['Manufacturer ID','Manufacturer Name'], displayFields: ['manufacturerid', 'manufacturername'],endpoint:'manufacturers'},
    Users: { tableHeads: ['User ID','User Name'], displayFields: ['userid', 'username'],endpoint:'users'},
    Reports:{ tableHeads: ['Report ID','Report Name','Date','Status'], displayFields: ['reportid','reportname','datebegin','status1'],endpoint:'reports'},
  };
  