import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doAddProduct } from '../redux/actions';

const AddProduct = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({ serialNo: '', name: '', price: 0 });

  return (
    <div
      style={{
        border: '3px solid red',
        width: '300px',
        height: '150px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h3>Order New Product</h3>
      Serial No.:{' '}
      <input
        type='number'
        onChange={(e) => setProduct({ ...product, serialNo: e.target.value })}
      />
      <br />
      Name:{' '}
      <input
        type='text'
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <br />
      Price:{' '}
      <input
        type='number'
        onChange={(e) => setProduct({ ...product, price: +e.target.value })}
      />
      <br />
      <button onClick={() => dispatch(doAddProduct(product))}>Add</button>
    </div>
  );
};

export default AddProduct;
