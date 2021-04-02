import Date from "../date/date";

export default function ArticleSection(props) {
    return(
    <main className="padding--top--header margin--top--layout-06 margin--bottom--layout-06">
        <article className="flex-direction--column flex--align-items--center">
            <div className="bx--grid flex-direction--column flex--align-items--center">
                <h1 className="expressive-heading-05 col-7">{props.title}</h1>
                <p className="col-7 margin--top--spacing-05 font-weight--500 color--grey-60"><Date dateString={props.date} ></Date></p>
                <div dangerouslySetInnerHTML={props.text} className="col-7 margin--top--spacing-07"/>
            </div>
        </article>
    </main>
    );
}