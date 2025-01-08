import Image from "next/image";
import banner from "../../../public/banner.jpg";

export default function page() {
  return <Image className="w-full h-screen" alt="banner" src={banner} />;
}
