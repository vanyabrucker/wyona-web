import styles from "./searchfield.module.css"

export default function SearchField() {
    return(
        <form className={styles.container}>
            <img className={styles.searchicon} src={"/media/search-24px.svg"}/>
            <input className={styles.input} placeholder="Search"></input>
        </form>
    );
}