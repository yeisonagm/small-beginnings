export default function ContactCard() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center max-w-7xl bg-[#f8f9fa] p-6 md:p-8 lg:py-16 lg:px-12 lg:m-8 rounded-2xl">
            <h2 className="w-full text-2xl md:text-[32px] mb-6 md:mb-8 lg:mb-12 text-center font-bold text-[#EC6A5D]">Contáctanos</h2>

            <div className="flex flex-col xl:flex-row-reverse gap-4 md:gap-6 xl:gap-12">
                <a href="https://goo.gl/maps/Wk5qDAfVrwKiDqYa7" target="_blank" className="w-full rounded-lg">
                    <img src="/images/map.webp" alt="mapa" loading="lazy" className="w-full max-h-[310px] lg:max-h-[420px] object-cover rounded-lg" />
                </a>

                <div className="w-full xl:w-1/3 flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-9 text-[#00B4E3]">
                        <section>
                            <p className="text-[#ADB5BD] md:text-xl font-bold mb-4 md:mb-6">Dirección</p>
                            <span className="md:text-xl font-medium">Av. Nuevo Cajamarca 450</span>
                        </section>
                        <section>
                            <p className="text-[#ADB5BD] md:text-xl font-bold mb-4 md:mb-6">Teléfono</p>
                            <span className="md:text-xl font-medium">+51 920 530 130</span>
                        </section>
                        <section>
                            <p className="text-[#ADB5BD] md:text-xl font-bold mb-4 md:mb-6">Email</p>
                            <span className="md:text-xl font-medium">pequeñoscomienzos@gmail.com</span>
                        </section>
                    </div>
                    <div className="flex gap-3 items-center w-full md:w-auto">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="/images/icons/facebook-gray.svg" alt="Icon Facebook" loading="lazy" />
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank">
                            <img src="/images/icons/tiktok-gray.svg" alt="Icon Tiktok" loading="lazy"  />
                        </a>
                        <a href="https://www.instagram.com/pequenoscomienzos2023/" target="_blank">
                            <img src="/images/icons/instagram-gray.svg" alt="Icon Instagram" loading="lazy"  />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}