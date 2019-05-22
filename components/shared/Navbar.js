import React from 'react';
import { Menu, Image, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';
import { connect } from 'react-redux';
import './less/navbar.less';

const styles = {
  Image: {
    height: '50px',
    cursor: 'pointer'
  },
  UserIconWrap: {
    background: '#fafafa',
    padding: '0.92857143em 2.4em'
  },
  UserIcon: {
    margin: '0 10px',
    borderRadius: '50%',
  }
}

const Navbar = (props) => {
  return (
    <Menu
      borderless
      className="navbar mb-0"
    >
      <Container >
        <Menu.Item>
          <Link href="/home">
            <img src="/static/images/logo.jpg"></img>
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as='a' target="_blank" href="https://nextjs.org/docs">Next Docs</Menu.Item>
          <Menu.Item href="https://stackoverflow.com/search?q=nextjs" target="_blank" className="mobile hidden" position='right' as='a'>Stackoverflow</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.login.isLoggedIn
})

export default connect(mapStateToProps)(Navbar);