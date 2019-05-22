import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import PageContent from '../components/home';
import { getUser } from '../store';
import withMasterLayout from '../pages/layouts/withMasterLayout';

class Home extends Component {

  static async getInitialProps (ctx) {
    // const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    return {}
  }

  componentDidMount () {
    // console.log(NODE_PATH);
  }

  render () {
    return (
      <>
        <PageContent />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  }
}

export default connect(mapStateToProps, actions)(withMasterLayout(Home));