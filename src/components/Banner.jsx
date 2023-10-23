import { Image } from "@nextui-org/react";
import '../app/globals.css'

const Banner = () => {
    return (
        <>
            <div className="w-full top-0">
                <div className="Banner-container flex justify-center mt-3 mb-3 h-fit relative ">
                    <Image className="Banner z-0" src="/Banner2.jpg" alt="NextUI hero Image" />
                    <div className='Banner-text z-1'>
                        <h1 className='text-3xl md:text-5xl font-bold'>
                            Diseño de paginas web empresariales en Argentina</h1>
                        <h6 className="text-2xl font-light">
                            Tienda online, aplicaciónes de inventario, y productos personalizados</h6>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Banner;