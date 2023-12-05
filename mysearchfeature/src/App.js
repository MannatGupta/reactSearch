import {useState} from 'react';
import './App.css';
import { Users } from './Users';
import Table from './Table';

function App() {
  const [query, setQuery] = useState(null);

  const keys = ['first_name', 'last_name', 'email'];

  const search = (data) => {
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)));
  };

  return (
    <div className="App">
      <input type='text'
      className='searchBar'
      placeholder='Serach here'
      onChange={(e) => setQuery(e.target.value)}/>
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
