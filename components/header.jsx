import Image from "next/image";
import Contacts from "@/components/contacts";

const Header = () => {
  return (
    <div className="w-screen bg-transparent flex flex-row z-20">
      <Image
        src="/logoGreen0xMineel.svg"
        height={20}
        width={150}
        alt="Mineel Eppa "
        className="mt-3 ml-8"
      />
      <Contacts />
    </div>
  );
};

export default Header;
