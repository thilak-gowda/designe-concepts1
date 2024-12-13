import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assetes/styles/components.css';
import './assetes/styles/pages.css';



// import 
import NavBar from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      
       <NavBar  />
       <Home />
       <Footer />
       
    </div>
  );
}

export default App;
