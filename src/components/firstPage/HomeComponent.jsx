import React from 'react'
import ContactUs from './ContactUs';
import FirstPage from './FirstPage';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginForm from '../login/LoginForm';
// import { HashLink as Link} from 'react-router-hash-link';

export default function HomeComponent() {
  return (
    <div>
      <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1 }}>
        <HeaderComponent />
      </div>
      <div >
        <div>
          <FirstPage />
        </div>
        <div>
          <LoginForm />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
      <div >
        <FooterComponent />
      </div>


    </div>
  )
}
