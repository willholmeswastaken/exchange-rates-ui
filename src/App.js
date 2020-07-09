import React from 'react'
import Containers from './components/global/Container'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Home from './components/pages/Home'
import Results from './components/pages/Results'

const App = () => {
  const isMobile = Math.min(window.screen.width, window.screen.height) < 768;
  return (
    <Containers.ResponsiveContainer>
      <Segment inverted vertical style={{ paddingBottom: isMobile ? '0em' : '32.8em', paddingLeft: isMobile ? '0em' : '5.5em' }} textAlign='center'>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={12}>
                <Router>
                  <Switch>
                    <Route path="/results/:currency">
                      <Results />
                    </Route>
                    <Route path="/">
                      <Home mobile={isMobile} />
                    </Route>
                  </Switch>
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '0em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
              </Header>
                <p>
                  Made with ☕ by Will Holmes
              </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Containers.ResponsiveContainer>
  )
};

export default App