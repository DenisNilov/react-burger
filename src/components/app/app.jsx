import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home.jsx';
import { LoginPage } from '../../pages/login.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;