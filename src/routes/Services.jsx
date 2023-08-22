import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import SimpleContact from "../components/SimpleContact";

import { SERVICES } from "../data/services";


export default function Services() {
    return (
        <>
            <Header />

            <section className="flex flex-col p-6 md:px-10 md:py-12 gap-12 items-center">
                {SERVICES.map((service, index) => (
                    <ServiceSection
                        key={index}
                        name={service.name}
                        description={service.description}
                        points={service.points}
                        src={service.src}
                        isImageOnRight={index % 2 == 0} />
                ))}

                <div className="flex justify-center">
                    <SimpleContact
                        number={"+51 948 378 509"}
                        address={"Av. Nuevo Cajamarca 450"} />
                </div>

                <ServiceSection
                    name={"Servicios adicionales"}
                    description={"Nuestro Centro Psicológico ofrece una amplia variedad de servicios de calidad, diseñados para abordar las necesidades específicas de cada individuo."}
                    points={['Tratamiento de problemas psicológicos (terapias y psicoterapias).',
                        'Talleres Psicológicos para niños, adolescentes, adultos (Atención y Concentración, Habilidades Sociales, Control de Emociones, Autoestima).',
                        'Reclutamiento de Personal y prevención de riesgos laborales.'
                    ]}
                    src={"./images/services/patient-care.png"}
                    isImageOnRight={true} />
            </section>

            <Footer />

            <ScrollRestoration/>
        </>
    );
}