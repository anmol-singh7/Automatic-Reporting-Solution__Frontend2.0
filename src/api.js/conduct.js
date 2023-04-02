export const fetchGetApi = async (API) => {
  
 try {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  console.log("hiiiii",API);
  const response = await fetch(API, requestOptions);
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  console.log("result",result);
  return result;
  
} catch (error) {
  console.log('error', error);
}
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// const x= await fetch(API, requestOptions)
//   .then(response => response.json())
//   .catch(error => console.log('error', error));
//   console.log("xxxxxxxxxx",x)
//   return x;
  };


export const fetchPostApi =async(API,BODYDATA)=>{
  try{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
BODYDATA
);
console.log("BODYDATA",BODYDATA);
console.log("RAW",raw);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response = await fetch(API, requestOptions)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
 const result = await response.json();
 return result;
  }
  catch (error) {
  throw error;
}
  
};

export const updatetables=async (API,BODYDATA)=>{
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(BODYDATA);
  console.log("UPDATE","BODYDATA",BODYDATA);
  console.log("RAW",raw);

  const requestOptions = {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API, requestOptions);
 
  console.log(response,response.status);
   return response;
} catch (error) {
  console.log('error', error);
}

}


  