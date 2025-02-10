import './newsletter.css'
import { TbTruckDelivery } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { RiUserLocationLine } from "react-icons/ri";
export default function Newsletter(){
    return(
        <div>
            <div className="news-wrapper">
                <h2>NEWSLETTER</h2><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta libero provident ipsum et voluptatum assumenda iusto possimus facilis velit qui, nesciunt eligendi ab vero magni quisquam ullam quam cupiditate laudantium?</p>

                <input type="text" className='input-bar'/>
                <br />
                <button className='submit'>Submit</button>
            </div>
            <div className='company-off'>
                <div className='off-width'>
                <TbTruckDelivery className='footer-icon'/>
                    <span className='span-head'>FREE SHIPPING</span><br />
                    <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora natus quia, aliquam quo tenetur?</span>
                </div>
                <div className='off-width'>
                    <FaMessage className='footer-icon'/>
                    <span className='span-head'>PRICE PROMISE</span><br />
                     <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut necessitatibus amet sunt.</span>
                </div>
                <div className='off-width'>
                    <RiUserLocationLine className='footer-icon'/>
                    <span className='span-head'>LIFETIME WARRANTY</span><br />
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sint ut enim quam!</span>
                </div>
            </div>
        </div>
       
    )
}