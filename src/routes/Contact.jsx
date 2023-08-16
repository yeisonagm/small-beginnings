import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
    return (
        <>
            <Header />

            <div className="flex items-center justify-center">
                <div className="flex p-6 justify-center">
                    <ContactCard />
                </div>
            </div>

            <Footer />
        </>
    );
}