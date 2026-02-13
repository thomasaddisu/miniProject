import { useState } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Initialize EmailJS with your public key
emailjs.init("snlN1cHDAXq4CKSih");

export default function Checkout({ cartItems, onClose }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const taxRate = 0.05;
  const tax = totalPrice * taxRate;
  const total = totalPrice + tax;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare items as string for the email
    const orderItems = cartItems
      .map((item) => `${item.name} x ${item.quantity}`)
      .join("\n");

    const emailParams = {
      customer_name: formData.fullName,
      customer_email: formData.email,
      phone: formData.phone,
      address: `${formData.address}, ${formData.city}, ${formData.country}`,
      delivery_date: formData.shoppingDate,
      order_items: orderItems,
      total_items: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      total_price: total.toFixed(2),
    };

    emailjs
      .send("service_wis2rf2", "template_e1qbodz", emailParams)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Order placed successfully 🎉");
        onclose();
        // Optional: reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to place order. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
      {/* Modal Container */}
      <div
        className="bg-white w-full sm:max-w-4xl h-[95vh] sm:h-auto 
                    rounded-t-2xl sm:rounded-lg 
                    overflow-y-auto p-5 sm:p-8 relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
          Checkout
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Personal Info */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded sm:col-span-2 w-full"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            value={formData.country}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            required
            value={formData.cardNumber}
            onChange={handleChange}
            className="border p-3 rounded sm:col-span-2 w-full"
          />

          <DatePicker
            selected={formData.shoppingDate}
            onChange={(date) =>
              setFormData({ ...formData, shoppingDate: date })
            }
            dateFormat="dd/MM/yy"
            showMonthYearPicker
            placeholderText="Delivery Date"
            className="border p-3 rounded w-full"
          />

          {/* Order Summary */}
          <div className="sm:col-span-2 mt-4 border-t pt-4">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total Price:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white py-3 rounded sm:col-span-2 hover:bg-yellow-600 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
