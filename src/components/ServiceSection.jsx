export default function ServiceSection({ name, description, points, src, isImageOnRight }) {
    const distribution = isImageOnRight ? "md:flex-row-reverse" : "md:flex-row";
    const idService = name.replace(' ', '-').
        normalize('NFD').
        replace(/[\u0300-\u036f]/g, '').
        toLowerCase();

    return (
        <article id={idService} className="flex flex-col w-full gap-4 2xl:w-[1328px] scroll-mt-24">
            <div className={`flex flex-col ${distribution} w-full gap-8 md:flex-row justify-between items-center md:min-h-[368px]`}>
                <img src={`${src}`} alt={`Img ${name}`} className="object-cover w-ful md:w-1/2 xl:w-[612px] md:min-h-[296px] rounded-2xl" loading="lazy" />

                <div className="flex flex-col gap-4 lg:gap-6 md:max-w-[361px] lg:max-w-[620px] text-[#6C757D]">
                    <div className="flex flex-col items-center gap-6">
                        <strong className="text-xl md:text-2xl xl:text-[40px] text-[#212529] w-full">{name}</strong>
                        <p className="xl:text-lg font-medium w-full">{description}</p>
                    </div>

                    {points.map((point, index) => (
                        <div className="flex gap-3" key={index}>
                            <img src="./images/icons/check.svg" loading="lazy" alt="check" className="w-6 h-6" />
                            <p className="font-medium">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-4 md:my-6 border-t-[1px] border-[#787878]"></div>
        </article>
    );
}