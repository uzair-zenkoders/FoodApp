import Navbar from "../../components/Navbar";
import Image from "next/image";
import BgImage from "../../public/images/bgImage.png";

const HomeApp = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-row space-x-3 m-1">
        <Image src={BgImage} width={500} height={500} alt="FoodPanda Pic" />
        <Image src={BgImage} width={500} height={500} alt="FoodPanda Pic" />
      </div>
    </>
  );
};

export default HomeApp;
