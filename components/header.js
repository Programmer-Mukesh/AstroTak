import Image from "next/image";
import hamburger from "../public/images/hamburger.png";
import icon from "../public/images/icon.png";
import profile from "../public/images/profile.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  
  return (
    <div className="headerContainer">
      <Image
        src={hamburger}
        width="30px"
        height="20px"
        className="hamburgerImage"
      />
      <Image src={icon} width="55px" height="60px" className="logoImage" />
      <Link href="./friends-and-family">
        <Image
          src={profile}
          width="30px"
          height="20px"
          className="profileImage"
        />
      </Link>
    </div>
  );
};

export default Header;
