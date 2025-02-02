import logo from './logo.svg';
import './App.css';
import './header.css';

import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import About from './component/about';
import Home from './component/home';
import Dashboard from'./component/dashboard';
import Counter from'./component/counter';
import Page1 from './component/page1';
import Page2 from './component/page2';
import HelpCenter from './component/helpcenter';
import FooterComponent from './component/footer';
import BoardList from'./component/board/board_list';
import BoardWrite from'./component/board/board_write';
import BoardView from'./component/board/board_view';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
       <h1>Basic Example</h1>

        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="counter" element={<Counter />} />

            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="help" element={<HelpCenter />} />

            <Route path="board" element={<BoardList />} />
            <Route path="board/write" element={<BoardWrite/>}/>
            <Route path="board/view/:id" element={<BoardView/>}/>
            
            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}


function Layout() {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };
  return (
    <div >
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
     

      <hr />

       <div className="tm-top-bar" id="tm-top-bar">
                <div className="container">
                    <div className="row">
                        <nav class="navbar navbar-expand-lg narbar-light">
                            <a className="navbar-brand mr-auto" href="#">
                                <img src="../img/logo.png" alt="Site logo"/>
                                Journey
                            </a>
                            <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                <ul className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                    <NavLink className="nav-link active" to="/">Home <span class="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/page1">Top Destinations</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/page2">Recommended Places</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/help">Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/help">helpcenter</NavLink>
                                    </li>
                                </ul>
                            </div>                            
                    </nav>
                </div>
            </div>
        </div>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. 
    
          NavLink - 사용하면 선탣괸 항목에 스타일 지정이 가능하다
          <a href> ~</a> 를 사용하면 전체 페이지를 새로고침하므로 사용하지 말고 
          Link 나 NavLink를 사용하자
          Link 컴포넌트를 사용해야합니다. 이 컴포넌트를 사용하면 페이지를 새로 불러오는걸 막고,
    */}
      <Outlet />

      <FooterComponent/>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;


/*
useHistory
useLocation
useRouteMatch
useParams

*/