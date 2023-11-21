import Image from "next/image";
import { Inter } from "next/font/google";
import HomeApp from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeApp />
    </>
  );
}
