import React, {useEffect} from "react"
import Container from 'react-bootstrap/Container';
import {Switch, Route, useHistory} from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import NavBar from './NavBar';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Col from 'react-bootstrap/Col';
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const App = (props) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://kit.fontawesome.com/97b2936aa0.js";
    script.async = true;
    script.crossorigin="anonymous"

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
      <Container style={{display: 'flex'}}>
        <Col style={{width: '200px', paddingTop:'75px', paddingRight:'20px'}}>
          <NavBar/>
        </Col>
        <Col>
          <h1>Steven Wang PhD. - Mechanical Engineer</h1>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/resume"><Resume /></Route>
              <Route exact path="/projects"><Projects /></Route>
            </Switch>
        </Col>
      </Container>
    )
}

export default App
