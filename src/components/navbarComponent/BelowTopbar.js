import {Link} from "react-router-dom";


function BelowTopbar() {
  return (
    <div className="d-flex p-3 justify-content-between h5">
        <div>
            <Link to="/" className="">Gift Card</Link>
            <Link to="/"  className=" px-1">Need Help?</Link>
        </div>
        <div className="list-unstyled d-flex align-items-center">
            <button className="customButton px-1 mx-1">Search</button>
            <button className="customButton px-1 mx-1">Account</button>
            <Link to="/" className=" px-1 mx-1">Wishlist</Link>
            <Link to="/" className=" px-1 mx-1">Cart</Link>
        </div>
    </div>
  )
}

export default BelowTopbar