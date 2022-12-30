
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App=()=> {
  const [users,setUsers]=useState([])
  const requestedData = () =>
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  console.log(response.data)
setUsers(response.data)
} )
.catch(error => console.error(`This error occurred : ${error}`));

useEffect(()=> {requestedData()},[]);
  return (
    <div className="App">
    {  <pre>
     {JSON.stringify(users,null,4)}
    </pre> } 
  
     
   
  
    </div>
  );
}

export default App;
