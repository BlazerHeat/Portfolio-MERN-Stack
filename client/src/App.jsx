import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Servicespage from './components/Servicespage';
import Contactpage from './components/Contactpage';
import Footer from './components/Footer';
import ProjectProposalpage from './components/ProjectProposalpage';

function App() {
    return (
        <>
            <Navbar />
            <Homepage />
            <Aboutpage />
            <Servicespage />
            <ProjectProposalpage />
            <Contactpage />
            <Footer />
        </>
    );
}

export default App;
