export default function ArticleSection(props) {
    return(
    <main className="padding--top--header">
        <article className="margin--top--layout-05 flex-direction--column flex--align-items--center">
            <div className="bx--grid flex-direction--column flex--align-items--center">
                <p className="col-7 margin--top--spacing-05 font-weight--500 color--grey-60">{props.category}</p>
                <h1 className="margin--top--spacing-04 expressive-heading-05 font-weight--500 font-family--serif col-7">{props.title}</h1>
                <p className="col-7 font-weight--500 margin--top--spacing-06 font-family--serif">{props.subtitle}</p>
            </div>
        </article>
    </main>
    );
}