import { useDispatch } from 'react-redux';
import { doRemoveProduct } from '../redux/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: '3px solid green',
        width: '250px',
        height: '150px',
        padding: '10px',
        marginBottom: '10px',
        textAlign: 'center',
      }}
    >
      <h4>Product Data</h4>
      Serial No.: {product.serialNo} <br />
      Name: {product.name} <br />
      Price: {product.price} <br />
      <br />
      <button onClick={() => dispatch(doRemoveProduct(product.serialNo))}>
        Remove
      </button>
    </div>
  );
};

export default Product;
