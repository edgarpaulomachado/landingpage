import { Geist } from "next/font/google";
import Header from "../../components/header/page";
import Welcome from "../../components/welcome/page";

export default function Home() {
  return (
    <>
    <Header />
    <Welcome />
    </>
  );
}

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

