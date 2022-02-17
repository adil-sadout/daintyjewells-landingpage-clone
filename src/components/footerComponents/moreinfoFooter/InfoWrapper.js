import AboutInfo from "./AboutInfo"
import Helpinfo from "./Helpinfo"
import MoreInfo from "./MoreInfo"

function InfoWrapper() {
  return (
    <div className='col-4 p-4 h6 text-dark border-top d-flex justify-content-around '>
        <AboutInfo/>
        <Helpinfo/>
        <MoreInfo/>
    </div>
  )
}

export default InfoWrapper