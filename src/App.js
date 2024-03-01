import './App.scss';
import Card from './components/card/Card';
import Card4 from './components/card4/Card4';
import Header from './components/header/Header';
import HeaderRoutes from './components/headerRoutes/HeaderRoutes';
import Navbar from './components/navbar/Navbar';
import Tools from './components/tools/Tools';
import YouMayLike from './components/youMayLike/YouMayLike';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';

function App() {

  const card1 = {
    tag: true,
    tagName: "Best Choice",
    number: 1,
    src: "./images/prize.svg",

    leftSection: {
      srcLeft: "./images/download1.svg",
      leftText: "Builder 1",
    },

    middleSection: {
      upperHeading: "WixPro 72-Inch Responsive Website Builder-",
      content1: " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },

    rightSection: {
      rating: 9.8,
      text: "Exceptional",
      imgRating: "./images/5-star.svg",
    }
  };

  const card2 = {
    tag: true,
    tagName: "Best Value",
    number: 2,
    src: "./images/diamond.svg",

    leftSection: {
      srcLeft: "./images/download7.svg",
      leftText: "Builder",
    },

    middleSection: {
      upperHeading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      content1: " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      mainHighlights: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    },

    rightSection: {
      rating: 9.5,
      text: "Excellent",
      imgRating: "./images/4.5-star.svg",
    }
  };

  const card3 = {
    tag: false,
    number: 3,

    leftSection: {
      srcLeft: "./images/download6.svg",
      leftText: "Builder 1",
    },

    middleSection: {
      upperHeading: "WixPro 72-Inch Responsive Website Builder-",
      content1: " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },

    rightSection: {
      rating: 9.3,
      text: "Exceptional",
      imgRating: "./images/5-star.svg",
    }
  };



  return (
    <div className="App">
      <Navbar />
      <div className='main-container'>
        <Header />
        <Tools />
        <HeaderRoutes />
        <Card value = {card1} />
        <Card value = {card2} />
        <Card value = {card3} />
        <Card4 />
        <YouMayLike />
        <Signup />
      </div>
      <Footer />
    </div>
  );
}

export default App;
