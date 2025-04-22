import { Provider } from '@/components/ui/provider';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyStreak",
  description: "Let's Get Motivated!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
