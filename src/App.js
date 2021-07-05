import { useSelector } from 'react-redux'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Grid, GridItem, VStack, SimpleGrid, Box } from '@chakra-ui/react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './screens/About'
import Contact from './screens/Contact'
import Skills from './screens/Skills'
import Works from './screens/Works'

const App = (props) => {
  const data = useSelector(state => {
    console.log(state);
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/skills" component={Skills} exact />
          <Route path="/works" component={Works} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
