import React, { useRef, useState }  from 'react'

import { Helmet } from 'react-helmet'

import Link from '../components/link'
import Service from '../components/service'
import Author from '../components/author'
import Client from '../components/client'
import './home.css'
import '../components/client.css'

const Home = (props) => {

  const spanRef = useRef(null);
  const [showToast, setShowToast] = useState(false);


  function handleClick() {
    const range = document.createRange();
    range.selectNode(spanRef.current);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    console.log('Text copied to clipboard:', spanRef.current.textContent);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    
  }

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.home-navbar');
    const navname = document.querySelector('.home-company');
    const navlogo = document.querySelector('.home-logo');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 700) {
      navbar.style.backgroundColor = '#ffdd00'; // change to desired color
      navname.style.color = 'black'
    } else {
      navbar.style.backgroundColor = '#00000000'; // original color
      navname.style.color = 'black'
    }
  });
  return (
    <div className="home-container ">
       {showToast && <div className="toast">Text copied to clipboard!</div>}
      <Helmet>
        <title>vsodev</title>
        <meta property="og:title" content="Agency modern template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img
              draggable = {false}
              alt="image"
              src="/playground_assets/logo.svg"
              className="home-logo"
            />
          <span className="home-company">vsodev.tech</span>
          </div>
          <div className="home-items">
            <button onClick={handleClick} className="home-button start-button button">
              <span className="home-text" ref={spanRef}>+63 075 637 6606</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button1 button">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="home-image"
              />
              <span className="home-text01">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img
                    draggable = {false}
                    alt="image"
                    src="/playground_assets/logo.svg"
                    className="home-logo1"
                  />
                  <span className="home-company1">SPYRL</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button2">
                  <span className="home-text06">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero overlay">
        <div className="home-header">
          <h1 className="home-title">
            CAN&apos;T GET ONLINE?
            <br></br>
          </h1>
          <p className="home-description">
          Introduce your business into the online world! With us, your online vision becomes reality. Let's create something extraordinary together."
          </p>
        </div>
      </header>
      <div className="home-description1">
        <div className="home-content">
          <div className='home-services2 '>
          <div className="home-text09">
            <p className="home-paragraph">
            Here at our company, we're not just developers – we're dream builders! From small startups to large enterprises, we specialize in turning your online dreams into reality.
            </p>
          </div>
          <br/>
          </div>
          
          <div className="home-grid111">
          <div className='home-service'>
          <img draggable = {false} alt="image" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Apache_CouchDB_logo.svg/2027px-Apache_CouchDB_logo.svg.png'} className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://i.imgur.com/3FfCUC2.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://www.prolival.fr/wp-content/uploads/2018/07/300x300xIBM-DB2-logo.png.pagespeed.ic_.ZyQH7PLHmc.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://www.orbitanalytics.com/wp-content/uploads/2021/11/Oracle-ERP-Cloud.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://allcode.com/wp-content/uploads/2022/12/Amazon-Aurora.jpg'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Navicat_Premium_v12.png/640px-Navicat_Premium_v12.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://www.percona.com/blog/wp-content/uploads/2018/01/Percona-Server-for-MySQL.jpg'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://dbdb.io/media/twitter/ingres.png'  className='client-avatar1' />
          <img draggable = {false} alt="image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/1200px-DBeaver_logo.svg.png'  className='client-avatar1' />
          </div>
          </div>
        </div>
        
      </div>
      <div className="home-featured">
        <div className="home-header1">
          <h2 className="heading">Featured Work</h2>
          <div className="home-link">
          </div>
        </div>
      </div>
      <div className="home-client">
        <p className="home-text11">
        Experience exceptional web and mobile app development with us! Our expert team combines cutting-edge technology with sleek design to create engaging and user-friendly experiences across all platforms. From concept to launch, we prioritize your vision, ensuring timely delivery and seamless collaboration. With a focus on scalability and security, our solutions are built to grow with your business. Elevate your digital presence with our excellence in development.
        </p>
      </div>
      <div className="home-services">
        <div className="home-header2">
          <h2 className="heading">SERVICES</h2>
        </div>
        <div className="home-grid">
       <Service
        Title="Web Development"
        Description="Our expert team specializes in crafting bespoke websites tailored to your needs, ensuring seamless functionality and stunning design to captivate your audience."
        rootClassName="service-root-class-name"
        >
      </Service>
      <Service
        Title="App Development"
        Description="Turn your ideas into reality with our custom mobile app development services. From concept to launch, we'll guide you through the process, creating intuitive and engaging apps for your audience."
        rootClassName="service-root-class-name1">

      </Service>
      <Service
        Title="Web Hosting"
        Description="Experience hassle-free web hosting with our reliable and secure services. We provide a no-setup hosting platform, ensuring your website stays online and accessible to your audience."
        rootClassName="service-root-class-name5"
      >
      </Service>
        </div>
      </div>
      <div className="home-about">
        <div className="home-header3">
          <h2 className="home-company2">vsodev.tech</h2>
          <span className="home-description2">
          "At our software company, we lead the way in web and mobile development, as well as top-notch web hosting solutions. Whether you're a small startup or a large corporation, we've got you covered with innovative technology and reliable hosting services. Trust us to bring your digital projects to life while ensuring they're securely hosted in the cloud."
          </span>
          <Author Author="Sammi Lauta" Mention="@sammi"></Author>
        </div>
        <div className="home-clients">
          <div className="home-header4">
            <h2 className="home-title3 heading">Our Clients</h2>
          </div>
          <div className="home-grid1">
              <Client
                Quote=""
                Author="Marie Angelic"
                Avatar="https://mariekitcanada.com/img/logo-1666451152.jpg"
                Mention="@Mariekitcanada"
                clientavatar = "client-avatar"
              ></Client>
              <Client
                Quote=""
                Author="outsoar ph"
                Avatar="data:image/png;base64,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"
                Mention="@outsoar.ph"
                clientavatar = "client-avatar"
              ></Client>
            <Client
              Quote=""
              Author="TTS"
              Avatar="https://us.123rf.com/450wm/rubelhossain/rubelhossain2111/rubelhossain211103267/178451405-tts-letter-initial-logo-design-vector-illustration.jpg"
              Mention="@TTS Netherlands"
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="Lorem Solutions"
              Avatar="https://static.vecteezy.com/system/resources/previews/007/497/955/original/letter-l-logo-design-free-vector.jpg"
              Mention="@Lorem Inc."
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="multi-Management Systems"
              Avatar="https://upload.wikimedia.org/wikipedia/commons/3/33/Flag_of_Kalamansig%2C_Sultan_Kudarat.png"
              Mention="@Kalamansig LGU"
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="Abelens"
              Avatar="https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/302444689_572762947973117_1772670430591676017_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeGjyBlwjOB9S2xNmhZqjil3dgaaIUOjsbl2BpohQ6OxudLEdqF9U0BREwK54DXDcNo7xlXkmfxF80xHHYv4PJjN&_nc_ohc=H-RozWZOZhsAX90pdUn&_nc_ht=scontent.fmnl9-4.fna&oh=00_AfBMejus-ZrF9U7zw_ZdgHYeL-RsytT05Z0eXC-_JHyN5w&oe=65E3E196"
              Mention="@Abelens Alaminos"
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="Viqumo"
              Avatar="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/423599790_819749903317166_6911644275486638588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEVfGreZNXR9Kk-ZbZp6EDRE6lpHbrC05ITqWkdusLTkrgD0gglKjH68QHZwQM1vDjo52ty-ihBmRratP31zqXa&_nc_ohc=1zF094egsx0AX_2z8sj&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdSTjpXAQiEJZBoUxr5pGXwhftA_ACs2TYCf_qmtruQSVA&oe=6606F7A8"
              Mention="@viqumo"
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="Coursify"
              Avatar="https://static.vecteezy.com/system/resources/previews/007/497/955/original/letter-l-logo-design-free-vector.jpg"
              Mention="@Coursify"
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="TVMS - POSO"
              Avatar="https://static.vecteezy.com/system/resources/previews/007/497/955/original/letter-l-logo-design-free-vector.jpg"
              Mention="@Lingayen LGU"
              clientavatar = "client-avatar"
            ></Client>
            <Client
              Quote=""
              Author="SDA"
              Avatar="https://static.vecteezy.com/system/resources/previews/007/497/955/original/letter-l-logo-design-free-vector.jpg"
              Mention="@SDA Trials"
              clientavatar = "client-avatar"
            ></Client>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-information">
          <div className="home-details">
            <div className="home-header5">
              <div className="home-branding2">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="home-logo2"
                  draggable = {false}
                />
                <span className="home-company3">vsodev.tech</span>
              </div>
              <div className="home-location">
                <span className="home-caption">PH Office</span>
                <span className="home-value">
                  2nd Floor Joevic Bldg., Marikina-Infanta Hwy Cainta, Rizal
                </span>
              </div>
            </div>
            <div className="home-location1">
              <span className="home-caption1">Let&apos;s talk</span>
              <span className="home-value1">sayhello@vsodev.tech</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/footerlogo.avif"
          draggable = {false}
          className="home-image1"
        />
      </footer>
    </div>
  )
}

export default Home
