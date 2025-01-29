'use client';

import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoImg from '@/components/LogoImg';
import { useCart } from '@/components/Context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

// Load Stripe using the public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const CartPage = () => {
  const { state, dispatch } = useCart();
  const router = useRouter(); // Initialize the router

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  // Function to remove an item from the cart
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Function to handle the checkout process and redirect to checkout page
  const handleCheckout = async () => {
    // Redirect to checkout page
    router.push('/checkout');
  };

  return (
    <div className="font-josefin-sans bg-[#EEEFFB]">
      {/* Header and Navbar */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden">
              {/* Cart Items */}
              {state.items.length > 0 ? (
                state.items.map((item: any) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 p-4 items-center border-b"
                  >
                    {/* Product Image */}
                    <div className="col-span-12 sm:col-span-6 flex items-center gap-4">
                      <div className="relative h-20 w-20 rounded-lg bg-[#FDF9F0] p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-gray-600">{item.name}</span>
                    </div>

                    {/* Price */}
                    <div className="col-span-12 sm:col-span-2">
                      <span className="text-gray-600">
                        $ {item.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-12 sm:col-span-2">
                      <Input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-16 text-center"
                      />
                    </div>

                    {/* Subtotal and Remove */}
                    <div className="col-span-12 sm:col-span-2 flex items-center justify-between">
                      <span className="text-gray-600">
                        $ {(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => removeItem(item.id)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-12 p-6 text-center text-gray-600">
                  <div className="col-span-12">
                    <p className="text-2xl font-bold">Your cart is empty.</p>
                    <p className="mt-4">
                      Looks like you haven&apos;t added anything to your cart yet.
                    </p>
                    <Link
                      href="/shop"
                      className="mt-6 inline-block bg-[#FB2E86] text-white px-6 py-2 rounded-lg hover:bg-[#A47E2F]"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal:</span>
                <span>
                  ${state.items
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-[#FB2E86] text-white py-2 rounded-lg hover:bg-[#A47E2F]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <LogoImg />
        <Footer />
      </div>
    </div>
  );
};


export default CartPage;


// import Header from '@/app/Header/page';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import LogoImg from '@/components/LogoImg';
// import { useCart } from '@/components/Context/CartContext';
// import { loadStripe } from '@stripe/stripe-js';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Input } from '@/components/ui/input';
// import { useRouter } from 'next/navigation'; // Import the useRouter hook

// // Load Stripe with the public key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// const CartPage = () => {
//   const { state, dispatch } = useCart();
//   const router = useRouter(); // Initialize the router

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) return;
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
//   };

//   // Function to remove an item from the cart
//   const removeItem = (id: string) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   // Function to handle the checkout process and redirect to checkout page
//   const handleCheckout = async () => {
//     // Collect cart items for Stripe session
//     const cartItems = state.items.map((item) => ({
//       name: item.name,
//       price: item.price,
//       quantity: item.quantity,
//       image: item.image,
//     }));

//     // Await Stripe initialization
//     const stripe = await stripePromise;
//     if (!stripe) {
//       console.error('Stripe has not been loaded properly. Check your API key.');
//       return;
//     }

//     // Send cart data to the backend to create a Stripe session
//     const session = await fetch('/api/create-checkout-session', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ cartItems }),
//     }).then((res) => res.json());

//     // Redirect to Stripe checkout
//     const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

//     if (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div className="font-josefin-sans bg-[#EEEFFB]">
//       {/* Header and Navbar */}
//       <Header />
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid gap-8 lg:grid-cols-3">
//           <div className="lg:col-span-2">
//             <div className="rounded-lg overflow-hidden">
//               {/* Cart Items */}
//               {state.items.length > 0 ? (
//                 state.items.map((item: any) => (
//                   <div
//                     key={item.id}
//                     className="grid grid-cols-12 gap-4 p-4 items-center border-b"
//                   >
//                     {/* Product Image */}
//                     <div className="col-span-12 sm:col-span-6 flex items-center gap-4">
//                       <div className="relative h-20 w-20 rounded-lg bg-[#FDF9F0] p-2">
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <span className="text-gray-600">{item.name}</span>
//                     </div>

//                     {/* Price */}
//                     <div className="col-span-12 sm:col-span-2">
//                       <span className="text-gray-600">
//                         $ {item.price.toLocaleString()}
//                       </span>
//                     </div>

//                     {/* Quantity */}
//                     <div className="col-span-12 sm:col-span-2">
//                       <Input
//                         type="number"
//                         value={item.quantity}
//                         min="1"
//                         onChange={(e) =>
//                           updateQuantity(item.id, Number(e.target.value))
//                         }
//                         className="w-16 text-center"
//                       />
//                     </div>

//                     {/* Subtotal and Remove */}
//                     <div className="col-span-12 sm:col-span-2 flex items-center justify-between">
//                       <span className="text-gray-600">
//                         $ {(item.price * item.quantity).toLocaleString()}
//                       </span>
//                       <button
//                         className="text-gray-400 hover:text-gray-600"
//                         onClick={() => removeItem(item.id)}
//                       >
//                         <svg
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M6 18L18 6M6 6l12 12"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="grid grid-cols-12 p-6 text-center text-gray-600">
//                   <div className="col-span-12">
//                     <p className="text-2xl font-bold">Your cart is empty.</p>
//                     <p className="mt-4">
//                       Looks like you haven&apos;t added anything to your cart yet.
//                     </p>
//                     <Link
//                       href="/shop"
//                       className="mt-6 inline-block bg-[#FB2E86] text-white px-6 py-2 rounded-lg hover:bg-[#A47E2F]"
//                     >
//                       Continue Shopping
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Checkout Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//               <div className="flex justify-between text-gray-600 mb-2">
//                 <span>Subtotal:</span>
//                 <span>
//                   ${state.items
//                     .reduce((total, item) => total + item.price * item.quantity, 0)
//                     .toLocaleString()}
//                 </span>
//               </div>
//               <button
//                 onClick={handleCheckout}
//                 className="mt-4 w-full bg-[#FB2E86] text-white py-2 rounded-lg hover:bg-[#A47E2F]"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-8">
//         <LogoImg />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CartPage;
