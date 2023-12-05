import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Users } from './Users';

function App() {
  const [query, setQuery] = useState(null);
  return (
    <div className="App">
      <input type='text'
      className='searchBar'
      onChange={(e) => setQuery(e.target.value)}/>
      {Users.filter(user => user.first_name.toLowerCase().includes(query)).map(user => {
       return <div key={user.id}>{user.first_name}</div>
      })}
    </div>
  );
}

export default App;
