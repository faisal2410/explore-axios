import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([])
    const requestedData = () =>
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data)
                setUsers(response.data)
            })
            .catch(error => console.error(`This error occurred : ${error}`));

    useEffect(() => { requestedData() }, []);
    return (
        <div className="App container">
            <h1 className='mb-5'>Users Information</h1>
            <div className="row">

                {users.map(user => {
                    return (<div className='col-md-4 border p-5' >
                        <h5>{user.email}</h5>
                        <p>{user.name}</p>
                    </div>)
                })}
            </div>

        </div>
    );
}

export default App;
