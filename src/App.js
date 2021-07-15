import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getWorks } from './store/work/workSlice'
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './screens/About'
import Contact from './screens/Contact'
import Skills from './screens/Skills'
import Works from './screens/Works'
import axios from 'axios';

const App = () => {

  const dispatch = useDispatch()

  const fetchWorks = async () => {
    const { data } = await axios.get('/works.json')
    dispatch(getWorks(data))
  }

  useEffect(() => {
    fetchWorks()
  }, [])

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
