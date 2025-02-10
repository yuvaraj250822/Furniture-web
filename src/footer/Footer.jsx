import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Footer(){
    return(
        <div className='footer-wrapper'>
            <div>
            <div className='footer-back'>
                <h1 className='footer-head'>COMFY SLOTH</h1>
            </div>

            <div className='footer-icon-wrapper'>
                <span>
                <FaFacebook  />
                </span>
                <span>
                <FaYoutube />
                </span>
                <span>
                <FaTwitter />
                </span>
            </div>
            <div className='footer-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                In debitis omnis neque, saepe velit voluptatibus.</div>
            </div>
            <div className='shop-contact'>
                <div>
                    <CiShop className='footer-icon'/><br />
                    <span>123,Anna salai, chennai</span>
                </div>
                <div>
                    <FaPhoneAlt className='footer-icon' /><br />
                    <span>+144 12345678</span>
                </div>
                <div>
                    <IoMdMail  className='footer-icon'/><br />
                    <span>comfy_sloth@gmail.com</span><br />
                </div>
            </div>
        </div>
    )
}

export default Footer;