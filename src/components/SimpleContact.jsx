export default function SimpleContact({ number, address }) {
    return (
        <div className="flex flex-col max-w-screen-xl md:flex-row gap-6 my-8  md:mx-12 items-center justify-between w-full">
            <div className="flex flex-col gap-2 md:gap-3 xl:gap-4 w-80 lg:w-96">
                <div>
                    <p className="text-sm xl:text-base font-medium">El apoyo profesional puede marcar la diferencia</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#008CC3]">¡Agenda tu cita ahora!</h3>
                </div>
                <p className="text-sm text-gray-500 font-normal">El conocimiento de uno mismo es el mapa hacia la autenticidad, embárcate hacia una vida plena.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-evenly">
                <a href="https://api.whatsapp.com/send/?phone=51948378509&text&type=phone_number&app_absent=0" target="_blank" className="flex gap-4 p-4 md:p-6 rounded-lg border-2 border-[#F1F0F4] items-center md:min-w-[254px] xl:min-w-[294px] max-h-[100px]">
                    <img src="./images/icons/phone.png" alt="phone" loading="lazy" />
                    <div className="flex flex-col gap-2 text-sm xl:text-base font-medium">
                        <span className="font-normal">Llámanos</span>
                        {number}
                    </div>
                </a>
                <a href="https://goo.gl/maps/Wk5qDAfVrwKiDqYa7" target="_blank" className="flex gap-4 p-4 lg:p-6 rounded-lg border-2 border-[#F1F0F4] items-center md:min-w-[254px] xl:min-w-[294px] max-h-[100px]">
                    <img src="./images/icons/location.png" alt="phone" loading="lazy" />
                    <div className="flex flex-col gap-2 text-sm xl:text-base font-medium">
                        <span className="font-normal">Ubícanos</span>
                        {address}
                    </div>
                </a>
            </div>
        </div>
    );
}