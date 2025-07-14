import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import ProjectView from './Pages/ProjectView';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projectview" element={<ProjectView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App
