import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Custom404() {
    return (
        <>
            <Header color={"white"}/>
            <main className="padding--top--header margin--bottom--layout-06">
                <section className="margin--top--layout-06 flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column">
                        <h1 className="margin--top--spacing-06 text-length--02">
                            Uh-oh! Page not found
                        </h1>
                        <p className="margin--top--spacing-06 body-text text-length--02 color--grey-90">We couldn't find the page you’re looking for. If you need help or think this is an error, please contact us.</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
