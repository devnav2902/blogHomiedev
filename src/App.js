import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post/Post';
import Error from './pages/Error/Error';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/category/:category"><Category/></Route>
        <Route path="/blog/:url"><Post/></Route>
        <Route path="*"><Error/></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
