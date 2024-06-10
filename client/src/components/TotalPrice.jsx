import { useSelector } from 'react-redux';

const TotalPrice = () => {
  const products = useSelector((state) => state.products);

  return (
    <div
      style={{
        border: '3px solid red',
        width: '150px',
        height: '50px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      Total Price: {products.reduce((acc, prod) => acc + prod.price, 0)}
    </div>
  );
};

export default TotalPrice;
