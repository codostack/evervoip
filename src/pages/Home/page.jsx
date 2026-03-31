import VoipFAQ from "../../components/Faq";
import Aboutcontent from "./components/Aboutcontent";
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
      <VoipFAQ/>
    </div>
  );
}