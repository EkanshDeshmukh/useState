import React, { useEffect, useState } from 'react'
import axios from '../utils/Axios'

function Show() {

  const [product, setproduct] = useState([])
  const getProduct = () => {
    axios.get('/products')
      .then(product => setproduct(product.data))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
     <button className='px-3 py-2 bg-red-200 rounded'>Products</button>
      <ul>
        {product.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Show