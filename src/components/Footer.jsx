import { Link } from "react-scroll"
import iconInstagram from '../assets/icon-instagram.svg'
import iconFacebook from '../assets/icon-facebook.svg'
import iconPinterest from '../assets/icon-pinterest.svg'
import iconTwitter from '../assets/icon-twitter.svg'

export const Footer = () => {
  return (
    <footer className="bg-[#232127]">

      <div className="w-[87%] mx-auto max-w-[1280px] md:flex justify-between py-24 space-y-5 md:space-y-0">

        <div className="text-center md:flex md:items-center">
          <h2 className="font-bold text-white text-2xl md:text-4xl">Shortly</h2>
        </div>

        <div className="md:flex md:gap-14 space-y-7 md:space-y-0">

          <div className="text-white text-center md:text-left">

            <h3 className="font-bold text-lg">Features</h3>

            <ul>

              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Link Shortening
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Branded Links
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Analytics
                </Link>
              </li>

            </ul>

          </div>

          <div className="text-white text-center md:text-left">

            <h3 className="font-bold text-lg">Resources</h3>

            <ul>

              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Support
                </Link>
              </li>

            </ul>
            
          </div>

          <div className="text-white text-center md:text-left">

            <h3 className="font-bold text-lg">Company</h3>

            <ul>

              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-[#2acfcf]"
                  to="home" smooth={true} duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            
          </div>

          <div className="flex gap-4 justify-center">
            <img className="h-7" src={iconFacebook} alt="icon" />
            <img className="h-7" src={iconInstagram} alt="icon" />
            <img className="h-7" src={iconPinterest} alt="icon" />
            <img className="h-7" src={iconTwitter} alt="icon" />
          </div>

        </div>
      </div>
    </footer>
  )
}
