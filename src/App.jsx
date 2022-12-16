import "./App.css";

import {
  Navbar,
  Header,
  Hotels,
  Footer,
  Location,
  Company,
  Facility,
  Testimonial,
  About,
} from "./components/index";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hotels />
      <Facility />
      <About />
      <Testimonial />
      <Company />
      <Location />
      <Footer />
    </>
  );
};

export default App;
