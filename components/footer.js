import Image from "next/image";
import Link from "next/link";
import home from "../public/images/home.png";
import talk from "../public/images/talk.png";
import ask from "../public/images/ask.png";
import reports from "../public/images/reports.png";
import chat from "../public/images/chat.png";

const Footer = () => {
  return (
    <div id="footer" className="footerContainer">
      <div className="footerIconName">
        <Link href="/">
          <Image src={home} width="22px" height="22px" className="" />
        </Link>
        <span>Home</span>
      </div>

      <div className="footerIconName">
        <Image src={talk} width="22px" height="22px" className="" />
        <span>Talk</span>
      </div>

      <div className="footerIconName">
        <Link href="./ask-question">
          <Image src={ask} width="22px" height="22px" className="" />
        </Link>

        <span>Ask Question</span>
      </div>

      <div className="footerIconName">
        <Image src={reports} width="22px" height="22px" className="" />
        <span>Reports</span>
      </div>

      <div className="footerIconName">
        <Image src={chat} width="22px" height="22px" className="" />
        <span>Chat</span>
      </div>
    </div>
  );
};

export default Footer;
