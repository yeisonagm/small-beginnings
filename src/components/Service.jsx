import { Link } from "react-router-dom";


export default function Service({ name, description, src }) {
    return (
        <div className="flex flex-col items-center w-80 md:w-[340px] xl:w-[420px] bg-[#f9f9ff] shadow-md rounded-2xl">
            <img src={`${src}`} alt={`Img ${name}`} className="w-ful rounded-t-lg"/>

            <div className="flex flex-col items-center gap-2 mx-6 my-4">
                <strong className="md:text-xl xl:text-2xl text-[#212529] w-full">{name}</strong>
                <p className="text-sm lg:text-base text-gray-600 font-normal w-full">{description}</p>

                <Link className="text-blue-400 text-sm md:text-base lg:text-lg font-normal flex gap-1 items-center w-full">Leer más
                    <img className="h-full" src="./images/icons/arrow-right.svg" alt="Arrow right " />
                </Link>
            </div>
        </div>
    );
}