import React from 'react'
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import '../Home/Profile.css';

class Profile extends React.Component {
  render(){
  return (
    <div className='container mt-5'>
      <div className='box mx-auto d-flex'>
        <div className='myPhoto'>
          <img src="/images/ne.png" alt="Siti Rosalina" />
        </div>
        <div className='AboutMe my-auto ms-5'>
          <div className='profile-details'>
            <div className='profile-details-name'>
              <span className='primary-text'>
                {" "}
                <h5>- HELLO</h5><span className='fw-bold'><h1>I'm Siti Rosa<span className='lina fw-bolder'>Lina</span></h1></span>
              </span>
              </div>
              <div className='profile-details-role mt-2'>
                <h4 className='d-flex'>
                  I'm an
                  <h4 className='d-flex'>
                    <span className='primary-text ms-1'>
                      {" "}
                      <Typical
                      loop={Infinity}
                      steps={[
                        " Graphic Designer",
                        1000,
                        " Full Stack Dev",
                        1000,
                      ]}
                    />
                  </span>
                  </h4>
                </h4>
              </div>
              <div className='profile-options'>
                <a href='mailto:sitirosalina29@gmail.com'>
                  <button className='btnHire fw-bold my-4 px-4 py-2'>
                    Hire Me
                  </button>
                </a>
              </div>
              <div className='sosmed mt-3'>
              <a href='https://id-id.facebook.com/' className='icon m'>
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a href='https://www.instagram.com/' className='icon ms-4'>
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a href='https://www.youtube.com/' className='icon mx-4'>
                <FontAwesomeIcon icon={faYoutube}/>
              </a>
              <a href='https://twitter.com/' className='icon'>
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}
export default Profile
