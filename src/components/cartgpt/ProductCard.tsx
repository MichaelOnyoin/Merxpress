import { useCart } from "./CartContext";
import { CartItem } from "./cart";

interface ProductProps {
  product: CartItem;
}

const ProductCard = ({ product }: ProductProps) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <div className="product-card bg-white px-4 mx-4 my-4 py-4 rounded-lg shadow-md"> 
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
