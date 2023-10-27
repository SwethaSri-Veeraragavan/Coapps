import './App.css';
import Header from './components/Navbar';
import SignupForm from './components/Heropage';
import Catagory from './components/catagory';
import Title from './components/Title';
import Features from './components/Features';
import CardContainer from './components/Card';
import PageSix from './components/Pagesix';
import Whatweuse from './components/Whatweuse';
import Wherewedo from './components/Wherewedo';
import Testimonials from './components/Testimonials';
import ContactUs from './components/Contactus';
import MyComponent from './components/Mycompounds';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <SignupForm />
      <Catagory />
      <Title />
      <Features />
      <CardContainer />
      <PageSix />
      <Whatweuse />
      <Wherewedo />
      {/* <Testimonials /> */}
      <ContactUs />
      <MyComponent />
    </div>
  );
}

export default App;
