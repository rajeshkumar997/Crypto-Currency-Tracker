import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';
import { styled } from '@mui/material/styles';

const Styles = styled('div')({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
})


function App() {
  return (
    <BrowserRouter>
      <Styles>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
      </Styles>
    </BrowserRouter>
  );
}

export default App;
