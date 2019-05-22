import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Auth = ({ children }) => {
  return (
    <Segment className="auth" vertical>
      <Container textAlign='center'>
        {children}
      </Container>
    </Segment>
   );
}

export default Auth;
