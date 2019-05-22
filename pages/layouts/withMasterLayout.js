import React, { Component } from 'react';
import Navbar from '../../components/shared/Navbar';

export default (Page) => {
  return class extends Component {

    static async getInitialProps (ctx) {
      let pageProps = {}
      if (Page.getInitialProps) {
        pageProps = await Page.getInitialProps(ctx);
      }

      return { ...pageProps };
    }

    render () {
      return (
        <>
          <Navbar {...this.props} />
          <Page {...this.props} />
        </>
      )
    }
  };
};