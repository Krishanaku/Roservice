import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer'>
        <div className="TopLocation mt-5">
          <div>
            <p className='head'>Top Location</p>
          </div>
          <div className='locationNames'>
            <p className='texts1'>Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana • Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam</p>
          </div>
           

        </div>
        <div className="Contact mt-5">
         <div>
         <p className='head'>Contact Us</p>
        </div>
        <div>  
         <p>Phone : +91 782 762 1417</p>
         <p>Email : support@roservicecenter.live</p>
        </div> 


        </div>
        <div className="contacts mt-5">
          <div />
          <div className='linksBox'>
            <p>About US</p>
            <p>Blog</p>
            <p>Near Me</p>
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          </div>

        </div>
        <div className="icon">
              <div>
              <FacebookIcon className='socialIcon'/>
            <TwitterIcon className='socialIcon'/>
            <InstagramIcon className='socialIcon'/>
            <LinkedInIcon className='socialIcon'/>
            <PinterestIcon className='socialIcon'/>
            <YouTubeIcon className='socialIcon'/>
              </div>
              <div>
                <h6 className='mt-3'>© 2021 OyeBusy Technologies Pvt. Ltd.</h6>
            </div>


        </div>
      
    </div>
  )
}

export default Footer
