
import ContactUsFooter from "./ContactUsFooter";
import Bottombar from "./Bottombar";
import BlogFooter from "./BlogFooter";
import InfoWrapper from "./moreinfoFooter/InfoWrapper";

function Footer() {
  return (
    <>
      <div className="grid row text-center border-bottom">
        <ContactUsFooter/>
        <InfoWrapper/>
        <BlogFooter/>
      </div>
      <Bottombar/>
    </>
  )
}

export default Footer