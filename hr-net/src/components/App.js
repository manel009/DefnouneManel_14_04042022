import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Error404 from "./error404/Error404";
import EmployeeList from "./employee-list/EmployeeList";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/employee-list" element={<EmployeeList />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
}

export default App;
