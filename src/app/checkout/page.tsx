'use client'
// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const stripePromise = loadStripe(
//   'pk_test_51Qlr2MH5xF0Fkqs4RZ4LGJIn6a6vtsB5hMMreEgRC2YUg9RPWpjwudFPzpXCeAHRuCWWNbsChqnvwnyFnHZeSbui00BIzqJyfn' // Your Stripe public key
// );

// const CheckoutPage = () => {
//   const router = useRouter();
//   const [shippingDetails, setShippingDetails] = useState({
//     name: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     phone: '',
//     email: ''
//   });

//   // Handle form change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
//   };

//   // Handle payment and redirection
//   // Handle payment and redirection
// const handleCheckout = async () => {
//   const stripe = await stripePromise;

//   // Check if Stripe was successfully loaded
//   if (!stripe) {
//     console.error('Stripe has failed to load.');
//     return;
//   }

//   try {
//     // Call your backend to create a payment session
//     const response = await fetch('/api/create-checkout-session', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ shippingDetails })
//     });

//     if (!response.ok) {
//       throw new Error('Failed to create checkout session.');
//     }

//     const session = await response.json();

//     // Redirect to Stripe Checkout
//     const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

//     if (error) {
//       console.error('Stripe Checkout Error:', error.message);
//     }
//   } catch (error) {
//     // Narrow the type of `error` to `Error` and safely log the message
//     if (error instanceof Error) {
//       console.error('Error during checkout:', error.message);
//     } else {
//       console.error('Unexpected error:', error);
//     }
//   }
// };


//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-xl font-semibold">Shipping Information</h2>
//       <form className="grid grid-cols-1 gap-4 mt-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={shippingDetails.name}
//           onChange={handleChange}
//           className="border rounded p-2"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={shippingDetails.address}
//           onChange={handleChange}
//           className="border rounded p-2"
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={shippingDetails.city}
//           onChange={handleChange}
//           className="border rounded p-2"
//         />
//         <input
//           type="text"
//           name="postalCode"
//           placeholder="Postal Code"
//           value={shippingDetails.postalCode}
//           onChange={handleChange}
//           className="border rounded p-2"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={shippingDetails.phone}
//           onChange={handleChange}
//           className="border rounded p-2"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={shippingDetails.email}
//           onChange={handleChange}
//           className="border rounded p-2"
//         />
//       </form>

//       <button
//         className="bg-[#FB2E86] text-white py-2 rounded-lg mt-4 w-full"
//         onClick={handleCheckout}
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;




'use client';

import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/components/Context/CartContext';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';

const CheckoutPage = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    bankAccount: '',
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate Subtotal
  const subtotal = state.items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Data:', formData);
    console.log('Cart Items:', state.items);
    // API call for order processing
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Checkout Content */}
      <div className="flex-grow bg-white py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Delivery Information */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
              <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
              <Input name="address" placeholder="Street Address" value={formData.address} onChange={handleInputChange} required />
              <Input name="city" placeholder="City" value={formData.city} onChange={handleInputChange} required />
              <Input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleInputChange} required />
              <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
              <Input name="bankAccount" placeholder="Bank Account Number (optional)" value={formData.bankAccount} onChange={handleInputChange} />

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Confirm Order</button>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Your Order</h3>

            {state.items.length > 0 ? (
              <div className="space-y-4">
                {state.items.map((item: any) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-2">
                    <Image 
                    src={item.image} // Image source
                    alt={item.name} // Alt text for the image
                    width={64} // Width in pixels (adjust as needed)
                    height={64} // Height in pixels (adjust as needed)
                    className="object-cover rounded" // Tailwind classes for styling
                    />
                    <div className="flex-1 ml-4">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}

                {/* Subtotal */}
                <div className="flex justify-between text-lg font-semibold mt-4">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">No items in the cart.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CheckoutPage;
