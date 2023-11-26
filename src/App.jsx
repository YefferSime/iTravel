import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmpresasPages from "./pages/EmpresasPages";
import EmpresaFormpage from "./pages/EmpresaFormPages";
import LoginPage from "./components/Login";

function RedirectToEmpresas() {
  return <Navigate to="/empresas" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RedirectToEmpresas />} />
        <Route path='/empresas' element={<EmpresasPages />} />
        <Route path='/create' element={<EmpresaFormpage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
