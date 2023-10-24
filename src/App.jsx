import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div id="Homepage">
    <section>
      <Navbar/>
    </section>
    <section id="Parallax">Parallax</section>
    <section id="Services">Services</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>

  {/*<Test/>
  <Test/>*/}
  </div>;
};

export default App;
