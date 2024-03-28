import React, { useEffect, useState } from 'react';
import axios from '../utils/Axios';

function Service() {
  const [first, setFirst] = useState("this is a First");
  const [Second, setSecond] = useState("this is a Second");

  useEffect(() => {
    console.log('Component is created');

   
    axios.get('/users')
      .then(users => console.log(users))
      .catch(err => console.log(err));

    
    return () => {
      console.log('Component is destroyed');
    };
  }, []);

  return (
    <div>
      <h1>{first}</h1>
      <button className='px-2 py-2 bg-red-300 rounded' onClick={() => setFirst("this is a First Updated")}>Update First</button>
      <h1>{Second}</h1>
      <button className='px-2 py-2 bg-red-300 rounded' onClick={() => setSecond("this is a Second Updated")}>Update Second</button>
    </div>
  );
}

export default Service;
