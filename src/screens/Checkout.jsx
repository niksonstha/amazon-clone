import CheckoutProduct from "../components/CheckoutProduct";
import SubTotal from "../components/SubTotal";
import { useStateValue } from "../context/stateProvider";
import "./Checkout.css";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://storage.googleapis.com/website-production/uploads/2023/01/audible-banner-ad-example.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping cart 🛒</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
