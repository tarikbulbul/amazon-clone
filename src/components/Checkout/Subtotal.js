import React from 'react';
import './Subtotal.css';
import { NumericFormat} from 'react-number-format';
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from 'react-router-dom';
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, dispatch}] = useStateValue();

  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):  <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        displayType="text" 
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal