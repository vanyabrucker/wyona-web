import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Custom404() {
    return (
        <>
            <Header color={"white"}></Header>
            <main className="padding--top--header margin--top--layout-06 margin--bottom--layout-06">
                <article className="flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column flex--align-items--center">
                        <h1 className="expressive-heading-05 col-7">Page not found</h1>
                    </div>
                </article>
            </main>
            <Footer></Footer>
        </>
    );
}
