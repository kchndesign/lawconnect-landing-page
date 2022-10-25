import Styles from "./ActionButton.module.scss";

// declare props for component
type ActionButtonProps = {
    text: string;
    action?: Function;
};

function ActionButton(props: ActionButtonProps) {
    return <button className={Styles.actionButton}>{props.text}</button>;
}

export default ActionButton;
