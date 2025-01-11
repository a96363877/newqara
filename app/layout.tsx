import { Footer } from '@/components/footer';
import './globals.css';
import { Metadata } from 'next';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'الرئيسة',
  description: 'البوابه الرسمية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
     
<head/>
      <body>
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
           
           <MenuIcon/>
          </div>
          <div className="flex items-center">
            <Image
              src="/loho.avif"
              alt="Qatar Government Logo"
              width={200}
              height={50}
              className="h-8 sm:h-12 w-auto"
            />
          </div>
        </div>
      </header>
      <main>
      {children}
      </main>
        </body>
      <Footer />
    </html>
  );
}
