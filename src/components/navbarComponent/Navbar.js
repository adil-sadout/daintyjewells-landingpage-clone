import Logo from './Logo';
import Topbar from './Topbar';
import MainNavbar from './MainNavbar';
import BelowTopbar from "./BelowTopbar";

function Navbar() {
  return (
    <div>
        <Topbar/>
        <BelowTopbar/>
        <Logo/>
        <MainNavbar/>
    </div>
  )
}

export default Navbar