import Image from "next/image";
import "../Styles/InputStyles.css";
import iconArrow from "../assets/images/icon-arrow.svg";

const Input = () => {
  return (
    <div className="form-container">
      <div className="input-container">
        <form className="form-wrapper">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button>
            <Image src={iconArrow} alt="icon-arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
