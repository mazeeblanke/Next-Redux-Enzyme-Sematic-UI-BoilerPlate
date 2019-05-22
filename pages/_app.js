import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import 'semantic-ui-less/semantic.less';
import '../app.less';


class Glamour extends App {

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container id="glamour">
        <Provider store={reduxStore}>
          {/* <PersistGate loading={null}>         */}
            <Component {...pageProps} />
          {/* </PersistGate> */}
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(Glamour)
