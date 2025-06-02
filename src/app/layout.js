import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/NexAuthProvider";
import Header from "@/components/navigation/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "My Size",
  description: "My Size"
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <NextAuthProvider>
          {/* Фоновое изображение */}
          <div 
            className="fixed inset-0 -z-10 h-[100vh] w-full"
            style={{
              backgroundImage: "url('/images/фон.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh" // Фиксированная высота вьюпорта
            }}
          />
          
          {/* Основной контент */}
          <div className="relative h-full w-full">
            <div className='page-container min-h-screen flex flex-col'>
              <Header />
              <main className="flex-1 "> {/* Отключаем скролл внутри main */}
                {children}
              </main>
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}