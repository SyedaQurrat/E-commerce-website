import { ReactNode } from 'react';
import './globals.css'; // Import global styles
import { Josefin_Sans, Lato } from 'next/font/google'; // Importing fonts
import { CartProvider } from '@/components/Context/CartContext'; // CartContext import
import { WishlistProvider } from '@/components/Context/wishlistContext'; // WishlistContext import

// Custom fonts
const josefin = Josefin_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Hekto E-Commerce</title>
      </head>
      <body className={`${josefin.className} ${lato.className}`}>
        {/* Wrap everything inside CartProvider and WishlistProvider */}
        <CartProvider>
          <WishlistProvider>
            {/* Header */}
            <header>
              {/* Your header component */}
            </header>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer>
              {/* Your footer component */}
            </footer>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
