import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Help from '../pages/Help';
import Association from '../pages/Association';

export const Navigation = () => {

  return (
    <BrowserRouter>
       <Navbar />

      <Routes>
        <Route path="/"  element={<Home /> } />
        <Route path="*" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/association/:id" element={<Association />} />
        <Route path="/help" element={<Help />} />

     </Routes>

        <ToastContainer position="top-right"></ToastContainer>

    </BrowserRouter>
  )

}