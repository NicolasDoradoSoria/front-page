import { Image } from "@nextui-org/react";
import '../app/globals.css'

const Banner = () => {
    return (
        <>
            <div className="Banner-container flex justify-center mt-3 mb-3 h-fit">
                <Image className="Banner z-0" src="/Banner.png" alt="NextUI hero Image" width={1850} />
                <div className='Banner-text z-1'>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                    Diseño de paginas web empresariales en Argentina</h1>
                    <h6 className="text-2xl font-light">
                    Tienda online, aplicaciónes de inventario, y productos personalizados</h6>
                </div>
                
            </div>
        </>
    );
}

export default Banner;