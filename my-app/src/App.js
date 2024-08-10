import './App.sass';
import Header from './components/Header'
import Feature from './components/Feature'
import OurProducts from './components/OurProducts';
import Inspirations from './components/Inspirations';
import Tips from './components/Tips';
import Share from './components/Share';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Feature/>
            <OurProducts/>
            <Inspirations/>
            <Tips/>
            <Share/>
            <Footer/>
        </div>
    );
}

export default App;
