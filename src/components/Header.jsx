import { Link } from "react-router-dom";
import { useState } from "react";


export default function Header() {
    const [clickedMenu, setClickedMenu] = useState(false);
    const menuMobile = !clickedMenu ? 'hidden md:flex' : 'flex';
    const icon = !clickedMenu ? '/images/icons/menu.svg' : '/images/icons/cross.svg';

    const handleClick = () => {
        setClickedMenu(!clickedMenu);
    }

    return (
        <nav className="bg-gray-50 text-black py-4 px-4 sm:px-8 flex justify-center">
            <div className="max-w-screen-2xl flex w-full flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-fit flex justify-between md:justify-normal">
                    <Link to={'/'} className="flex gap-3 items-center">
                        <img src="/images/logo/logo-46px.png" alt="logo" loading="lazy" />
                        <div className="flex flex-col">
                            <span className="text-base lg:text-2xl font-bold sm:block ">
                                Pequeños <br />
                                Comienzos
                            </span>
                        </div>
                    </Link>

                    <button className=" md:hidden" onClick={handleClick}>
                        <img src={icon} alt="Menu" loading="lazy" />
                    </button>
                </div>

                <div className={`${menuMobile} pt-4 md:p-0 w-full max-w-[327px] md:max-w-6xl md:w-[72%] lg:w-[63%] flex-col md:flex-row items-center justify-between gap-6`}>
                    <div className="flex">
                        <ul className="flex flex-col md:flex-row md:justify-center items-center gap-4 lg:gap-6 text-base lg:text-xl font-semibold">
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

                    <a href="https://api.whatsapp.com/send/?phone=51920530130&text&type=phone_number&app_absent=0" target="_blank" className="text-xl font-bold px-6 py-2 bg-[#00b4e3] hover:bg-[#008cc3] active:bg-[#0069a3] text-white rounded-xl w-full md:w-auto text-center">
                        Contactar
                    </a>
                </div>

            </div>
        </nav>
    );
}
