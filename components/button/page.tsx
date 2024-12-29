import Styles from "./button.module.scss";

interface ButtonProps {
    title: string;
    kind: "primary"| "secundary";
}

const Button: React.FC<ButtonProps> = ({ title, kind }) => {
    const generationClassByKind = () => {
        if (kind === "secundary") return Styles.secundary;
        
        return Styles.primary;
    }

    return (
        <button className={`${Styles.button} ${generationClassByKind()}`}>{title}</button>
    )
}

export default Button;
