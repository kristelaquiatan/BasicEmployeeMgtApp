import logo from './logo.svg';
import './App.css';
// import Routes instead of Switch
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path="/" exact element={<ListEmployeeComponent />}></Route>
                <Route path="/employees" element={<ListEmployeeComponent />}></Route>
                {/* step 1 */}
                <Route path="/add-employee/:id" element={<CreateEmployeeComponent />}></Route>
                <Route path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route>
                {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />}></Route> */}
              </Routes>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
