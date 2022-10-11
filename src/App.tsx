import './App.css';
import AppRoutes from './routes/AppRoutes';
import Navbar from './nav/Navbar';

const App = () => (
    <div className="grid-container">
        <Navbar />
        <AppRoutes />
    </div>
);

export default App;
