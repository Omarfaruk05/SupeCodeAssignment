import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center space-y-3 bg-gray-50 py-12 dark:bg-black dark:text-white">
      <div className="flex justify-center gap-2">
        <a
          href="https://www.facebook.com/profile.php?id=100023919873768"
          target="_black"
        >
          <FaFacebookSquare size={40} />
        </a>
        <a href="https://www.instagram.com/omarfaruk0005/" target="_black">
          <FaInstagramSquare size={40} />
        </a>
        <a href="https://www.linkedin.com/in/md-omar-faruk05" target="_black">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/Omarfaruk05" target="_blank">
          <FaGithubSquare size={40} />
        </a>
      </div>
      <div>
        <p>2016 © Omar Faruk. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
