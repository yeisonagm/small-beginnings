import Benefits from "../components/Benefit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Benefit from "../components/Benefit";
import Service from "../components/Service";

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
                        ))
                        }
                    </div>
                </div>
            </div>


            {/* Service cards */}
            <div className="w-screen flex justify-center">
                <main className="flex flex-col max-w-screen-2xl font-bold justify-center items-center px-6 py-12 md:py-16 gap-12">
                    <h2 className="text-2xl md:text-[32px] lg:text-[40px] text-center w-full text-blue-400">
                        Servicios que ofrecemos
                    </h2>

                    <div className="w-full flex flex-col items-center gap-4 md:flex-row flex-wrap md:w-[720px] md:gap-8 xl:gap-4 justify-center xl:w-full 2xl:gap-10">
                        <Service
                            name={'Estimulación Temprana'}
                            description={'Actividades dirigidas a estimular y potenciar diferentes áreas del desarrollo, como el cognitivo, motor, socio emocional y del lenguaje.'}
                            src={'/images/services/early-stimulation.png'} />
                        <Service
                            name={'Psicología Clínica'}
                            description={'Rama de la psicología que se centra en la evaluación, diagnóstico, tratamiento de los trastornos mentales y emocionales.'}
                            src={'/images/services/clinical-psychology.png'} />
                        <Service
                            name={'Psicología Educativa'}
                            description={'Entender cómo las personas aprenden y se desarrollan en contextos educativos, aplicando los principios y métodos de la psicología.'}
                            src={'/images/services/educational-psychology.png'} />

                        <Service
                            name={'Diagnóstico Clínico'}
                            description={'Identificación y clasificación de síntomas que tiene el pacientes como puede ser un trastorno o una condición psicológica.'}
                            src={'/images/services/clinical-diagnosis.png'} />
                        <Service
                            name={'Psicología Organizacional'}
                            description={'Comprender y mejorar la eficacia, el bienestar y el desarrollo de las personas en el ámbito laboral y organizacional.'}
                            src={'/images/services/organizational-psychology.png'} />
                        <Service
                            name={'Capacitaciones'}
                            description={'Programas de formación y desarrollo que tienen como objetivo mejorar las habilidades y competencias de las personas.'}
                            src={'/images/services/trainings.png'} />

                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}