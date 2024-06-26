import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-black text-white flex flex-col items-center px-6 md:px-12 py-8 gap-10">
            <div className="max-w-screen-2xl flex flex-col md:flex-row w-full justify-between gap-6">
                <Link to={'/'} className="flex gap-3 items-center">
                    <img src="/images/logo/logo-46px.png" alt="logo" loading="lazy" />
                    <div className="flex flex-col">
                        <span className="text-lg  font-bold sm:block ">
                            Pequeños <br />
                            Comienzos
                        </span>
                    </div>
                </Link>

                <ul className="flex justify-center items-center gap-3 md:gap-8 text-sm lg:text-lg font-semibold">
                    <li>
                        <Link to={'/'}
                            className="hover:border-b hover:text-gray-200">Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/servicios'} className="hover:border-b hover:text-gray-200">Servicios</Link>
                    </li>
                    <li>
                        <Link to={'/contacto'} className="hover:border-b hover:text-gray-200">Contacto</Link>
                    </li>
                    <li>
                        <Link to={'/nosotros'} className="hover:border-b hover:text-gray-200">Nosotros</Link>
                    </li>
                </ul>

                <div className="flex gap-3 items-center w-full md:w-auto">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="/images/icons/facebook.svg" alt="Icon Facebook" loading="lazy"/>
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank">
                        <img src="/images/icons/tiktok.svg" alt="Icon Tiktok" loading="lazy"/>
                    </a>
                    <a href="https://www.instagram.com/pequenoscomienzos2023/" target="_blank">
                        <img src="/images/icons/instagram.svg" alt="Icon Instagram" loading="lazy"/>
                    </a>
                </div>
            </div>

            <p className="text-gray-500 text-center">© 2023 Pequeños Comienzos. Todos los derechos reservados</p>
        </footer>
    );
}