// External
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Reducers
import { getWorks } from "./store/work/workSlice";
import { getSkills } from "./store/skills/skillSlice";
import { getUser } from "./store/user/userSlice";
// screens
import About from "./screens/About";
import Contact from "./screens/Contact";
import Skills from "./screens/Skills";
import Works from "./screens/Works";
import HomeScreen from "./screens/HomeScreen";
// Components
import ThemeButton from "./components/ThemeButton";

const App = () => {
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/user.json");
      dispatch(getUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWorks = async () => {
    try {
      const { data } = await axios.get("/works.json");
      dispatch(getWorks(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSkills = async () => {
    try {
      const { data } = await axios.get("/skills.json");
      dispatch(getSkills(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchWorks();
    fetchSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <ThemeButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
