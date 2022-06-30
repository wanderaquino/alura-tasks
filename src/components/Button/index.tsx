import style from "./style.module.scss";

type ButtonProps = {
    textButton: string;
}

export function Button ({textButton} : ButtonProps) {
    return (
        <button className={style.button} type="submit">
            {textButton}
        </button>
    )
}