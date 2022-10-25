// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module "*.scss" {
    const styles: { [classname: string]: string }; // declare a generic styles class with classname and string value
    export default styles;
}

// We also need to tell TypeScript to recognise images as importable modules.
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
