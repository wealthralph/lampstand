import { logo } from "../../assets";
import styles from "./navbar.module.css";
import { Button } from "antd";

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" height={20} />
          <h4>Lampstand</h4>
        </div>
        <Button size="small" type="primary">
          Make Inquiry
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
