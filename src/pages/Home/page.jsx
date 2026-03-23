import Aboutcontent from "./components/Aboutcontent";
import Contactform from "./components/Contactform";
import Content1 from "./components/Content1";
import Countriesdeal from "./components/Countriesdeal";
import Header from "./components/Header";
import Ourservices from "./components/Ourservices";

export default function Home() {

  return (
    <div>
      <Header/>
      <Countriesdeal/>
      <Content1/>
      <Aboutcontent/>
      <Ourservices/>
      <Contactform/>
    </div>
  );
}