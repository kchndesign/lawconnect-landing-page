import Styles from "./ActionButton.module.scss";

// declare props for component
type ActionButtonProps = {
    text: string;
    action?: Function;
    id?: string;
};

function ActionButton(props: ActionButtonProps) {
    return (
        <button className={Styles.actionButton} id={props.id}>
            {props.text}
        </button>
    );
}

export default ActionButton;
