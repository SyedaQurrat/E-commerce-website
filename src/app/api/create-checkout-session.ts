// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// // Initialize Stripe with the Secret Key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-12-18.acacia',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       // Retrieve the cart items from the request body
//       const { cartItems } = req.body;

//       // Create a checkout session
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: cartItems.map((item: any) => ({
//           price_data: {
//             currency: 'usd', // You can change the currency
//             product_data: {
//               name: item.name,
//               images: [item.image], // You can add product image
//             },
//             unit_amount: item.price * 100, // Price in cents
//           },
//           quantity: item.quantity,
//         })),
//         mode: 'payment',
//         success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
//       });

//       // Respond with the session ID
//       res.status(200).json({ id: session.id });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }





import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { user, items } = req.body;

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: user.email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'PK'] },
      metadata: {
        name: user.name,
        phone: user.phone,
        address: `${user.address}, ${user.city}, ${user.state}, ${user.zipCode}`,
        bankAccount: user.bankAccount,
      },
      line_items,
    });

    res.status(200).json({ sessionUrl: session.url });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
}
