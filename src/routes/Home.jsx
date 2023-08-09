import Benefits from "../components/Benefit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Benefit from "../components/Benefit";
import Service from "../components/Service";
import SimpleContact from "../components/SimpleContact";

import { SERVICES } from "../data/services";
import { COMPANY_BENEFITS } from "../data/benefits";


export default function Home() {
    return (
        <>
            <Header />
            <div className="h-screen">
                <Landing />
            </div>

            <div className="w-screen flex justify-center">
                <div className="flex flex-col max-w-screen-2xl font-bold justify-center items-center px-6 py-12 md:py-16 gap-12">
                    <h2 className="text-2xl md:text-[32px] lg:text-[40px] text-center w-full">
                        ¿Por qué somos la mejor opción?
                    </h2>
                    <div className="w-full flex flex-col items-center gap-4 md:flex-row flex-wrap md:w-[720px] md:gap-8 xl:gap-4 justify-center xl:w-full 2xl:gap-10">
                        {COMPANY_BENEFITS.map((benefit, index) => (
                            <Benefit
                                key={index}
                                name={benefit.name}
                                description={benefit.description}
                                src={benefit.src} />
                        ))}
                    </div>
                </div>
            </div>


            {/* Service cards */}
            <div className="w-screen flex justify-center">
                <main className="flex flex-col max-w-screen-2xl font-bold justify-center items-center px-6 py-12 md:py-16 gap-12">
                    <h2 className="text-2xl md:text-[32px] lg:text-[40px] text-center w-full text-blue-400">
                        Servicios que ofrecemos
                    </h2>

                    <div className="w-full flex flex-col items-center gap-8 md:flex-row flex-wrap md:w-[720px] xl:gap-4 justify-center xl:w-full 2xl:gap-10">
                        {SERVICES.map((service, index) => (
                            <Service
                                key={index}
                                name={service.name}
                                description={service.description}
                                src={service.src} />
                        ))}
                    </div>
                </main>
            </div>

            <div className="w-screen flex justify-center">
                <SimpleContact
                    number={"+51 948 378 509"}
                    address={"Av. Nuevo Cajamarca 450"} />
            </div>

            <Footer />
        </>
    );
}