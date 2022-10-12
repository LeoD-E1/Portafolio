import AboutMe from './about/About';
import Contact from './contact/Contact';
import HomeScreen from './homeScreen/HomeScreen';
import Skills from './skills/Skills';
import Works from './works/Works';

export const pages = [
  { path: '/', component: HomeScreen },
  { path: '/works/', component: Works },
  { path: '/skills/', component: Skills },
  { path: '/contact/', component: Contact },
  { path: '/about/', component: AboutMe },
];
