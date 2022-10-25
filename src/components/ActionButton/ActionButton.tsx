import Styles from "./ActionButton.module.scss";

// declare props for component
type ActionButtonProps = {
    text: string;
    action?: Function;
    id?: string;
};

/**
 * A standard button for web actions like confirm or create account.
 * @param props Takes text string as well as optional id and event handler
 * @returns a styled button
 */

function ActionButton(props: ActionButtonProps) {
    return (
        <button className={Styles.actionButton} id={props.id}>
            {props.text}
        </button>
    );
}

export default ActionButton;
