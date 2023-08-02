import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";


export default function Home() {
    return (
        <>
            <Header />
            <div className="h-screen">
                <Landing />
            </div>
            <Footer />
        </>
    );
}