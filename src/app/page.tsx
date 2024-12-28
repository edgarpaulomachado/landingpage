import { Geist } from "next/font/google";
import Header from "../../components/header/page";

export default function Home() {
  return (
    <>
    <Header />
    </>
  );
}

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

