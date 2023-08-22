import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SimpleContact from "../components/SimpleContact";
import CompanyProfile from "../components/CompanyProfile";

export default function About() {
    return (
        <>
            <Header />

            <div className="flex flex-col lg:gap-12 items-center">
                <CompanyProfile />

                <div className="flex justify-center">
                    <SimpleContact
                        number={"+51 948 378 509"}
                        address={"Av. Nuevo Cajamarca 450"} />
                </div>
            </div>

            <Footer />

            <ScrollRestoration />
        </>
    );
}