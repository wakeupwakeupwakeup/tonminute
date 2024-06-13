import Header from "../../widgets/header/header.jsx";
import Footer from "../../widgets/footer/footer.jsx";

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main className={"max-w-[1420px] w-full mx-auto"}>{children}</main>
            <Footer />
        </>
    )
}