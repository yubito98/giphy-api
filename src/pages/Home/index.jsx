import React, {useState} from 'react';
import SearchResults from '../../components/SearchResults';
import MoreUsed from '../../components/MoreUsed'


const Home = () => {

  const [value, setValue] = useState("Star Wars");

  return (
    <div className="Home">
        <MoreUsed/>
        <input onChange={(e) => setValue(e.target.value)} className='form-control mb-4' placeholder='Search your gif'/>
        <SearchResults search={value}/>
    </div>
  );
}

export default Home;
