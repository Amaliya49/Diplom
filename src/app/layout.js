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
    <html lang='ru' className="h-full">
      <head>
       {/* Базовые мета-теги */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* PWA-мета-теги */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7C3AED" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/192.png" />
        
        {/* SEO-мета-теги */}
        <meta name="description" content="Конвертер размеров одежды и обуви для международного шопинга" />
        <meta property="og:title" content="Мой размер | Конвертер размеров" />
        <meta property="og:description" content="Удобный инструмент для подбора размеров в зарубежных магазинах" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/512.png" />
      </head>
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