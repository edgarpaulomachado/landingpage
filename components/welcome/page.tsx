import Button from "../button/page";
import Styles from "../welcome/welcome.module.scss";

const Welcome = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <h1>Melhor agência de Marketing da cidade</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e
                     aquisição de leads  para grandes marcas.</p>

                <Button title="Aumetar vendas" kind={"secundary"}/>     
            </div>

            <div className={Styles.image}></div>
        </div>
    )
};

export default Welcome;