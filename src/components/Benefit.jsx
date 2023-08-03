export default function Benefit({ name, description, src }) {
    return (
        <div className="flex flex-col items-center gap-8 p-4 w-[296px]">
            <img src={`${src}`} alt={`Icon ${name}`} height='100px' width='100px' />
            <div className="flex flex-col items-center gap-4">
                <strong className="text-2xl text-center text-[#3B5868]">{name}</strong>
                <p className="text-sm text-gray-700 text-center font-normal">{description}</p>
            </div>
        </div>
    );
}
