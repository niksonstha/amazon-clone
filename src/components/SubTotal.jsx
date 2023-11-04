import { getBasketTotal } from "../context/reducer";
import { useStateValue } from "../context/stateProvider";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
function SubTotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <button>Proceed to checkout</button>
          </>
        )}
      />
    </div>
  );
}

export default SubTotal;
