import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BIOS Announcement",
  description: "BIOS Announcement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const playSound = () => {
  //   const audio = new Audio("/click-sound.mp3"); // Path to your sound file
  //   audio.play();
  // };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="flex justify-end mt-2 mr-2">
          <Button variant="outline" size="icon" onClick={playSound}>
            <PartyPopper className="h-5 w-5" />
          </Button>
        </div> */}
        <div className="flex h-screen w-full items-center justify-center">
          {children}
        </div>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
