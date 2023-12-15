import { Link, useLocation } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import amazonLogo from "../../assets/img/amazon-logo.png";
import enFlag from "../../assets/img/en-flag.png";
import footerData from "./footerData.json";
import "../../styles/main.css";

const notToShow = {
  "/Amazon-Clone-Project/signin": true,
  "/Amazon-Clone-Project/signup": true,
  "/Amazon-Clone-Project/payment": true,
};

const Footer = () => {
  const { pathname } = useLocation();
  const { topLinks, bottomLinks } = footerData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`flex flex-col w-full mx-auto ${
        notToShow[pathname as keyof typeof notToShow] ? "hidden" : "block"
      }`}
    >
      <div
        onClick={scrollToTop}
        className="flex bg-[#37475a] hover:bg-[#485769] justify-center"
      >
        <h2 className="text-white text-xs py-4 scroll-smooth">Back to top</h2>
      </div>

      <div className="flex bg-amazon-blue_light justify-center py-10 border-b border-slate-600">
        <div className="w-[58%] flex justify-between xl:w-8/12 md:w-3/4 md:flex-row xs:flex-col xs:align-middle xs:text-start xs:gap-5">
          {topLinks.map((item, index) => (
            <div key={index} className="link-footer md:w-full">
              <p className="text-white text-lg font-semibold">{item.title}</p>
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={"#"}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex xl:flex-row max-md:flex-col items-center bg-amazon-blue_light justify-center py-1 xs:flex-col xs:pb-3">
        <Link to={"/Amazon-Clone-Project/"}>
          <img
            src={amazonLogo}
            alt="amazon-logo"
            className="object-contain w-20 h-20 md:mr-20"
          />
        </Link>
        <div className="flex items-center space-x-2 max-md:mb-4">
          <div className="flex space-around border rounded border-slate-400 px-2 py-2 text-xs text-slate-100 cursor-pointer">
            <PublicIcon className="w-[15px!important] h-[15px!important] mr-3" />
            <span>English</span>
          </div>
          <div className="flex border rounded border-slate-400 px-2 py-2 text-xs text-slate-100 cursor-pointer">
            <span className="text-slate-100 mr-3">$</span>
            <span>USD - U.S. Dollar</span>
          </div>
          <div className="flex items-center border rounded border-slate-400 px-2 py-2 text-xs text-slate-100 cursor-pointer">
            <img
              src={enFlag}
              alt="flag-country"
              className="object-contain h-[16px] w-[16px] mr-3"
            />
            <span>United States</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-8 bg-[#131A22] items-center">
        <div className="mb-8">
          <ul className="footer-link-services grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-8">
            {bottomLinks.map((item, index) => (
              <li key={index}>
                <Link to={"#"}>
                  <b>{item.title}</b>
                  <p>{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <ul className="flex whitespace-nowrap xl:flex-row max-md:flex-col items-center text-xs text-slate-300 space-x-4 max-md:space-y-2 xs:flex-col">
            <li className="hover:underline">
              <Link to={"#"}>Conditions of Use</Link>
            </li>
            <li className="hover:underline">
              <Link to={"#"}>Privacy Notice</Link>
            </li>
            <li className="hover:underline">
              <Link to={"#"}>Your Ads Privacy Choices</Link>
            </li>
          </ul>
          <h6 className="text-xs text-slate-300 mt-1">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </h6>
        </div>
        <div className="mt-3">
          <Link
            to={"https://www.facebook.com/Amazon/"}
            target="_blank"
            className="flex items-center gap-2"
          >
            <FacebookIcon color="info" />
            <p className="text-xs text-white">Facebook</p>
          </Link>
          <Link
            to={
              "https://twitter.com/amazon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            }
            target="_blank"
            className="flex items-center gap-2"
          >
            <TwitterIcon color="info" />
            <p className="text-xs text-white">Twitter</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
