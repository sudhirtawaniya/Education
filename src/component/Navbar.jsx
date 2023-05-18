import { useEffect } from 'react'
import '../asset/style/style.css'
export default function Navbar() {
  useEffect(()=>{
   
    const section1 = document.querySelector('.head_main')
    const menu = document.querySelectorAll('.mnu')
    console.log(menu);
    window.addEventListener('scroll', () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 150
      y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
     if(y>2)
    {  section1.style.backgroundColor = `white`
    for(let i=0;i<menu.length;i++)
       menu[i].style.color = `#8b99ae`
    }
      else{
        section1.style.backgroundColor = `#0dcaf0`
        for(let i=0;i<menu.length;i++)
         menu[i].style.color = `white`
      }
    })
  },[])
    return <>
      <div className="head_main">
          <div className="left">
            <a href="#home">
              <img
                src="https://ofcreatortools.com/assets/ofcreatortoolblack.png"
                alt="logo Rise"
                height={"40px"}
              />
            </a>
          </div>
          <div className="right ">
            <a href="#home">
              {" "}
              <nav className='mnu'>Home</nav>
            </a>
            <a href="#features">
              <nav className='mnu'>Features</nav>
            </a>
            <a href="#faqs">
              {" "}
              <nav className='mnu'>FAQs</nav>
            </a>

            <a href="https://chrome.google.com/webstore/detail/ofcreator-tools/mpajbhniolemnclhffhepggeaokdamkp" target="_blank">
              <button className="rgbtn">Get Extenstion</button>
            </a>
          </div>
          <div className="around" style={{ display: "none" }}>
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box">
                <li>
                  <a className="menu__item" href="#home">
                    Home
                  </a>
                </li>
              
               
                  <li>
                  {" "}
                  <a className="menu__item" href="#features">
                    {" "}
                    Features
                  </a>{" "}
                </li>
                
                <li>
                  {" "}
                  <a className="menu__item" href="#faqs">
                    {" "}
                    FAQs
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a className="menu__item" href="/pages/registration.php">
                    <button className="rgbtn">Get Extenstion</button>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
}