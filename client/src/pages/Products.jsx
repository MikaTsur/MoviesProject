import TotalPrice from '../components/TotalPrice';
import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';

const Products = () => {
  return (
    <>
      <div style={{ width: '50%', float: 'left' }}>
        <TotalPrice />
        <br />
        <br />
        <br />
        <br />
        <AddProduct />
      </div>
      <div style={{ width: '50%', float: 'right' }}>
        <ProductsList />
      </div>
    </>
  );
};

export default Products;
