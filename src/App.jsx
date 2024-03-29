import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Top from './components/Top';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Top />
            <Content />
            <Routes>
                <Route exact path="/" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/page5" element={<Page5 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
