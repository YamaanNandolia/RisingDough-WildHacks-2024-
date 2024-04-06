<<<<<<< HEAD
import '@/app/ui/global.css'

=======
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
>>>>>>> 53fc04e2360e153ec65ebdaeba82d3b22a363088
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}