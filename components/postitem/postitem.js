import Link from "next/link";
import styles from "./postitem.module.css"
import Date from "../date/date";

export default function PostItem(props) {
    return(
        <li key={props.id} className={`come-in hover--opacity ${styles.border}`}>
            <Link href={"/posts/" + props.id}>
                <a>
                    <div className={"line-height--zero"}>
                        <p className="color--grey-60 col-3 display--inline-block"><Date dateString={props.date} ></Date></p>
                        <h3 className="heading--03 display--inline-block">{props.title}</h3>
                    </div>
                </a>
            </Link>
        </li>
    );
}