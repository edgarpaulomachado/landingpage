import Link from "next/link";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import Styles from "./header.module.scss";
import "../button/button.module.scss";
import Button from "../button/page";

const Header = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>
                <Image src={Logo} alt={"logo"} />
            </div>

            <div className={Styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>                    
                <Link href="/">Cases</Link>
            </div>

            <div className={Styles.action}>
                <Button title="Fale conosco"/>
            </div>
        </div>
    )
}

export default Header;