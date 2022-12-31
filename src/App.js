import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';



const App = () => {
  const [users, setUsers] = useState([])
  const [error,setError]=useState("")
  const requestedData = () => {
    axios.get("https://jsonplaceholder.typicode.com/user")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);

      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      })
    
  }
 
  useEffect(() => { requestedData() },[])


  return (
    <div className="App container">
      <h1 className='mb-5'>Users Information</h1>
    <div className="row">
        {
          users.map(user => {
            return (<div key={user.id} className='col-md-4 border p-5'>
              <h5>{user?.email}</h5>
              <p>{user?.name}</p>
             
            </div>
              
            )
          })
        }
        
        <small>{error && <h1>{error}</h1>}</small>
        
      
      </div>
  
    </div>
  );
}

export default App;
