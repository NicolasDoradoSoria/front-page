import { Image } from "@nextui-org/react";

const Banner = () => {
    return (
        <>
            <div className="flex justify-center mt-3 mb-3 relative">
                <Image src="/Banner.png" alt="NextUI hero Image" width={1850} isZoomed className="z-0" />
                <h1 className='text-5xl font-bold top-1/2 left-1/2 absolute translate-y-[-50%] translate-x-[-50%] z-1'>
            Diseño de paginas web empresariales en Argentina</h1>
            <h6 className="text-2xl font-light top-96 left-1/2 absolute translate-y-[-50%] translate-x-[-50%] z-1'">
            Tienda online, aplicaciónes de inventario, y productos personalizados</h6>
            </div>
        </>
    );
}

export default Banner;