import  { Link } from "react-router-dom";
import { postData } from './api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
  const [user, updateUser] = useState({ username: "", password: "" })
  const [errors, updateErrors] = useState([])
  const history = useHistory();
  const handleSuccesClick = () => history.push('/home');
  const login = () => {
      postData('http://localhost:8000/rest-auth/login/', user)
      .then(data => {
          if(data.status !== 200){
              let messages = [];
              Object.keys(data.data).map(key => messages.push(key + ": " + data.data[key]));
              updateErrors(messages);
          } else {
              sessionStorage.setItem('session-token', data.data.key);
              handleSuccesClick();
          }
      });
  };

  return (
    <div className="App">
        {errors && <div className="form-errors" >
                      {
                          errors.map((error, key) => <div key={key}>
                              <p className="error-message">{error}</p>
                          </div>)
                      }
                  </div>
        }
        <div className="form-group">
        <input type="text" placeholder="username" onChange={e => updateUser({...user, username: e.target.value})}  />
        <input type="password" placeholder="password" onChange={e => updateUser({...user, password: e.target.value})}  />
        <button className="submit-button" onClick={login}>Login</button>
        <Link to="/create-user">Create User</Link>
      </div>
    </div>
  );
}

export default App;
