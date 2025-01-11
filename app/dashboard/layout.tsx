import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'حكومي - البوابة الحكومية لدولة قطر',
  description: 'البوابة الرسمية لحكومة دولة قطر',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
