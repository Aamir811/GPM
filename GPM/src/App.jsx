import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import ProjectView from './Pages/ProjectView';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projectview" element={<ProjectView />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App
