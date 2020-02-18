import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <div className='option'>
        <Link to='/shop'>SHOP</Link>
      </div>
      <div className='option'>
        <Link to='/contact'>CONTACT</Link>
      </div>
      {currentUser ? (
        <div className='option'>
          <Link onClick={() => auth.signOut()} to=''>
            SIGN OUT
          </Link>
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
