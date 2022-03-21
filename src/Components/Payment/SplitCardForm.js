import React, { useContext, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { userContext } from "../../App";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";


const useOptions = () => {
  

//   const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize : '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = (props) => {
    const { products, totalPrice, totalQuantities } = useSelector(state => state.CartReducer);
    const history = useHistory()
    console.log(props)
    const [signedInUser, setSignedInUser] = useContext(userContext)
    const [userServices,setUserServices] = useState({})
  
    const [payload,setPayload] =useState ({})
  
    const handleServicesSubmit = () =>{
      const jsonRecipientInfoson = localStorage.getItem('recipientInfoson')
      const newRecipientInfoson = JSON.parse(jsonRecipientInfoson)
      const recipientInfoson = newRecipientInfoson[0]
  
      fetch('http://localhost:5000/orderedProduct',{
        
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({products,totalQuantities,totalPrice,recipientInfoson:recipientInfoson})
      
      
      })
      .then(res => res.json())
      .then(data=> console.log('update'))
  
      history.push('/dashboard')
    }
  
  
  
  
  
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement)
      });
      setPayload(payload)
      // console.log("[PaymentMethod]", payload);
  
    };
  console.log(payload)
    return (
        <div>
        <form className ='d-flex mx-5' onSubmit={handleSubmit}>
          <label className ='px-3'>
            Card number
            <br/>
            <CardNumberElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br/>
          <label className ='px-3'>
            Expiration date
            
            <CardExpiryElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br/>
          <label className ='px-3'>
            CVC
            
            <CardCvcElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label >
          <br/>
          <div className ='px-3'>
          <button   type="submit" disabled={!stripe}>
            Pay
          </button>
          </div>
        </form>
    
              {
                payload.paymentMethod && <button onClick={handleServicesSubmit} > Confrim Order </button>
              }
               { payload.error && <p style = {{color : 'red'}}>Your Payment Is Not Worked. Please Try Again</p>}
        </div>
    );
};

export default SplitCardForm;