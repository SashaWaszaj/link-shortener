import { useTheme } from "@heroui/use-theme";
import { ThemeSwitcher } from "./components/Themeswitcher";
import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import About from './components/About';

function App() {
  const { theme, setTheme } = useTheme();  

  React.useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <main className={`${theme} text-foreground bg-background`}>
    <>
      <BrowserRouter>
            <NavBar></NavBar>
            <ThemeSwitcher></ThemeSwitcher>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </>
  </main>
  )
}

export default App;
