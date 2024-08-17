import './App.css';
import AppComponent from './components/mainApp/AppComponent';
import HomeComponent from './components/firstPage/HomeComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewRecords from './components/mainApp/ViewRecords';
import Register from './components/login/Register';
// import AddRecords from './components/mainApp//tabComponent/P';
// import RecordsComponent from './components/mainApp/RecordsComponent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route index element={<HomeComponent />} />
        <Route path="app-component" element={<AppComponent />} >
          
          {/* <Route path="records" element={<RecordsComponent />} />
          <Route path="add-records" element={<AddRecords />} /> */}
        </Route>
        <Route path="/view-records/:sNo" element={<ViewRecords />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
