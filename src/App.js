import './App.css';
import Header from './component/Header/Header';
import Navigationbar from './component/Navigation/Navigation_bar';
import Sidebar from './component/Side bar/Sidebar';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';

function App() {
  return (
   <div className="container">
     <Header />
     <Navigationbar />
     <Sidebar />
     <Content />
     <Footer />
   </div>
  );
}

export default App;
