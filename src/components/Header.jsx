import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handlerAuthentication = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <IoSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={"/login"}>
          <div className="header__option" onClick={handlerAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "sign out" : "sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <IoMdBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
