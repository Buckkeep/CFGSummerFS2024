import React, {useState} from 'react'

 function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleDeliveryChange(event) {
        setDelivery(event.target.value)
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" min="0"/>
        <p>Quantity: {quantity}</p>
 
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" / >
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>

        <label>Pick Up
        <input type="radio" value="Pick Up"
            checked={delivery === "Pick Up"}
            onChange={handleDeliveryChange}/>
        </label>
        <label>Delivery
        <input type="radio" value="Delivery"
            checked={delivery === "Delivery"}
            onChange={handleDeliveryChange}/>
        </label>
        <p>Delivery: {delivery}</p>
    </div>
  )
}

export default MyComponent