import { Link } from "react-router-dom";


function Landing() {
    return (
        <div className="h-full bg-landing bg-cover bg-center flex flex-col px-6 md:px-14 py-10 md:py-20 lg:p-32 justify-end">
            <div className="flex flex-col items-start justify-start w-full md:w-4/5 h-1/2 sm:h-3/5 lg:px-14">
                <p className="text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-6">
                    <span>Centro Psicológico Integral</span><br />
                    <span className="text-blue-500 leading-normal">Pequeños Comienzos</span>
                </p>
                <p className="max-w-[640px] text-sm sm:text-base lg:text-lg text-gray-100">Creemos que cada paso cuenta y que juntos, podemos construir un futuro más armonioso y enriquecedor. Conoce más sobre nuestros servicios y da el primer paso hacia una vida plena.</p>
            </div>
            <div className="flex justify-end items-end ">
                <Link to={'/servicios'} className="text-blue-400 text-sm sm:text-base md:text-lg font-normal flex gap-1 h-full">Leer más
                    <img className="h-full" src="./images/icons/arrow-right.svg" alt="Arrow right"/>
                </Link>
            </div>
        </div>
    );
}


export default Landing;
