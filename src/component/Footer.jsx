import { useEffect } from "react";
import "../asset/style/style.css";
export default function Footer(props) {
    useEffect(()=>{
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    },[])
  return (
    <>
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer-item">
            <h3>Services</h3>
            <a href="#features"><h4>Features</h4></a> 
          </div>
          <div className="footer-item">
            <h3>About Us</h3>
            <a href="#faqs"><h4>FAQS</h4></a> 
            <h4>Contact Us</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms and Conditions</h4>
          </div>
          <div className="footer-item">
            <h3>Our Address</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width="64px"
              height="64px"
            >
              <path d="M36,12c13.255,0,24,10.745,24,24S49.255,60,36,60S12,49.255,12,36S22.745,12,36,12z M44.279,45.783	c0.441-1.354,2.51-14.853,2.765-17.513c0.077-0.806-0.177-1.341-0.676-1.58c-0.603-0.29-1.496-0.145-2.533,0.229	c-1.421,0.512-19.59,8.227-20.64,8.673c-0.995,0.423-1.937,0.884-1.937,1.552c0,0.47,0.279,0.734,1.047,1.008	c0.799,0.285,2.812,0.895,4.001,1.223c1.145,0.316,2.448,0.042,3.178-0.412c0.774-0.481,9.71-6.46,10.351-6.984	c0.641-0.524,1.152,0.147,0.628,0.672c-0.524,0.524-6.657,6.477-7.466,7.301c-0.982,1.001-0.285,2.038,0.374,2.453	c0.752,0.474,6.163,4.103,6.978,4.685c0.815,0.582,1.641,0.846,2.398,0.846S43.902,46.94,44.279,45.783z" />
            </svg>
          </div>
        </div>

        <div className="footer_center justify-content-center">
          <div className="inner-footer-content">
            <div>
              {" "}
              <hr />{" "}
            </div>
            2023 © Sudhir Tawaniya. All rights reserved. <br />
           
          </div>
        </div>
      </div>
    </>
  );
}
