import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mainBlock}>
      <Link className={styles.logo} to="/">
        amondz
      </Link>
      <nav>
        <Link className={styles.nav} to="/upload">
          상품등록하기
        </Link>
      </nav>
    </header>
  );
};

export default Header;
