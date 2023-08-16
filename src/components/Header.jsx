import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-gray-50 text-black py-4  px-4 sm:px-8 flex justify-center">
            <div className="max-w-screen-2xl w-full flex justify-between items-center">
                <Link to={'/'} className="flex gap-3 items-center">
                    <img src="/images/logo/logo-46px.png" alt="logo" />
                    <div className="flex flex-col">
                        <span className="text-base lg:text-2xl font-bold sm:block ">
                            Pequeños <br />
                            Comienzos
                        </span>
                    </div>
                </Link>

                <div className="flex">
                    <ul className="flex justify-center items-center [&>li]:hidden md:[&>li]:block gap-4 lg:gap-6 text-base lg:text-xl font-semibold">
                        <li>
                            <Link to={'/'}
                                className="hover:border-b-2 border-gray-700 hover:text-gray-700">Inicio</Link>
                        </li>
                        <li>
                            <Link to={'/servicios'} className="hover:border-b-2 border-gray-700 hover:text-gray-700">Servicios</Link>
                        </li>
                        <li>
                            <Link to={'/contacto'} className="hover:border-b-2 border-gray-700 hover:text-gray-700">Contacto</Link>
                        </li>
                        <li>
                            <Link to={'/nosotros'} className="hover:border-b-2 border-gray-700 hover:text-gray-700">Nosotros</Link>
                        </li>
                    </ul>
                </div>

                <a href="https://api.whatsapp.com/send/?phone=51948378509&text&type=phone_number&app_absent=0" target="_blank" className="text-xl font-bold px-6 py-3 bg-[#00b4e3] hover:bg-[#008cc3] active:bg-[#0069a3] text-white rounded-xl hidden md:block">
                    Contactar
                </a>
                
                <button className="md:hidden">
                    <img src="/images/icons/menu.svg" alt="Menu" />
                </button>
            </div>
        </nav>
    );
}