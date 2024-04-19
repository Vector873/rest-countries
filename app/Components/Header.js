import styles from "../Components/Header.module.css";
import { BsMoonFill } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>Where in the world?</h2>
        <button>
          <BsMoonFill /> Light mode
        </button>
      </div>
    </>
  );
};

export default Header;
