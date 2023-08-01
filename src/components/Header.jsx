import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-gray-50 text-black py-4 flex justify-between items-center px-4 sm:px-8">
            <Link to={'/'} className="flex gap-3 items-center">
                <img src="/logo-46px.png" alt="logo" />
                <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold sm:block ">
                        Pequeños <br />
                        Comienzos
                    </span>
                </div>
            </Link>

            <div className="flex">
                <ul className="flex justify-center items-center [&>li]:hidden sm:[&>li]:block gap-5 md:gap-8 text-lg font-medium">
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

                <button className="sm:hidden">
                    <img src="/images/menu.svg" alt="Menu"/>
                </button>
            </div>
        </nav>
    );
}