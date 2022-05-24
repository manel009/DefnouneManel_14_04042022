import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Error404 from "./error404/Error404";
import MyAccount from "./my-account/MyAccount";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/employee-list" element={<MyAccount />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
}

export default App;
