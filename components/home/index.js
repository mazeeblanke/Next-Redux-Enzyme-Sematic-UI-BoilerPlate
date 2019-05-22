import React from 'react';
import { Segment, Grid, Container, Header } from 'semantic-ui-react';

export default () => {
  return (
    <Segment>
      <Container>

        <Grid verticalAlign="middle" style={{ height: '90vh' }} columns={4}>
          <Grid.Row centered className="mb-20">
            <Grid.Column width={2}>
              <img src='/static/images/nextjs.png'></img>
            </Grid.Column>
            <Grid.Column width={2}>
              <img src='/static/images/redux.png'></img>
            </Grid.Column>
            <Grid.Column width={2}>
              <img src='/static/images/enzyme.jpg'></img>
            </Grid.Column>
            <Grid.Column width={2}>
              <img src='/static/images/semantic.png'></img>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}