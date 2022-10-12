// External
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchWorks } from 'api/works';
import { useDispatch } from 'react-redux';
import { pages } from './screens';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Reducers
import { getWorks } from './store/work/workSlice';
import { getSkills } from './store/skills/skillSlice';
import { getUser } from './store/user/userSlice';
// Components
import ThemeButton from './components/buttons/ThemeButton';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/user.json');
      dispatch(getUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getDataWorks = async () => {
    try {
      const works = await fetchWorks();
      dispatch(getWorks(works));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSkills = async () => {
    try {
      const { data } = await axios.get('/skills.json');
      dispatch(getSkills(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUser();
      await fetchSkills();
      await getDataWorks();
    })();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BrowserRouter>
          <div className='App'>
            <Switch>
              {pages.map((page, index) => (
                <Route
                  key={index}
                  path={page.path}
                  component={page.component}
                  exact
                />
              ))}
            </Switch>
            <ThemeButton />
            ``
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
