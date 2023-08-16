export default function CompanyProfile() {
    return (
        <div className="w-full flex flex-col items-center gap-12">
            <div className="w-full flex justify-center bg-[#f7f8fe]">
                <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 mx-6 my-8 lg:m-16">
                    <div className="w-full md:w-3/5 flex flex-col items-end gap-4 h-full justify-between">
                        <section className="text-[#495057] text-sm lg:text-base">
                            <p>En Pequeños Comienzos, creemos firmemente que la salud mental es el cimiento de una vida plena y feliz; nuestro centro psicológico integral se dedica apasionadamente a fortalecer tu bienestar emocional y desarrollo personal, con un enfoque empático y especializado, estamos aquí para brindarte el apoyo que necesitas en cada etapa de tu camino hacia el equilibrio mental y bienestar emocional.</p>
                            <p className="mt-4">Nuestros servicios están diseñados para satisfacer las necesidades de niños, adolescentes y adultos; cada persona recibe un trato cálido y respetuoso, acompañándolos en su proceso de crecimiento y brindándoles las herramientas necesarias para alcanzar una vida plena y satisfactoria; su bienestar es nuestra meta constante.</p>
                        </section>

                        <a href="https://api.whatsapp.com/send/?phone=51948378509&text&type=phone_number&app_absent=0" target="_blank" className="md:text-xl font-normal px-4 py-2 bg-[#00b4e3] hover:bg-[#008cc3] active:bg-[#0069a3] text-white rounded-xl">
                            Reserva una cita
                        </a>
                    </div>

                    <div className="w-full md:w-2/5 rounded-2xl h-60 md:h-[360px]">
                        <img src="/images/consultation.png" alt="Consultation" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl flex flex-col gap-8 mx-6 md:mx-16 lg:flex-row">
                <section className="text-[#495057] text-sm lg:text-base bg-[#cafdf9] rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl lg:text-[32px] text-[#004B83] font-bold text-center mb-2 md:mb-4">Misión</h3>
                    <p>Brindar servicios integrales de psicología que abarcan desde la estimulación temprana en niños de 2 a 3 años hasta la psicología clínica, diagnóstico clínico y psicología educativa. Nuestro enfoque principal es el bienestar y el desarrollo de los niños, pero también nos comprometemos a ofrecer apoyo y atención de calidad a personas de todas las edades que requieran nuestros servicios.</p>
                </section>
                <section className="text-[#495057] text-sm lg:text-base bg-[#cafdf9] rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl lg:text-[32px] text-[#004B83] font-bold text-center mb-2 md:mb-4">Visión</h3>
                    <p>Convertirnos en un referente destacado en el ámbito de la psicología, buscamos ser reconocidos por nuestra excelencia en el diagnóstico clínico, la intervención terapéutica y el apoyo educativo. Nos esforzamos por ser líderes en la aplicación de enfoques innovadores y basados en la evidencia, y por mantenernos actualizados en los avances y las mejores prácticas de la psicología.</p>
                </section>
            </div>
        </div>
    );
}