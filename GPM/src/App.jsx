import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectView from './Pages/ProjectView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<ProjectView />} />
            </Routes>
        </Router>
    );
}

export default App
