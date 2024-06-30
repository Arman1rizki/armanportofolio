import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Arman1rizki" },
  { icon: <FaTwitter />, path: "https://x.com/ArmanResky2" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/arman.stsp" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/arman_resky1/" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
