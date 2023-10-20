import { Image } from "@nextui-org/react";

const Banner = () => {
    return (
        <>
            <div className="flex justify-center mt-11 mb-20 relative">
                <Image src="/Banner.png" alt="NextUI hero Image" width={1850} isZoomed className="z-0" />
                <h1 className='text-5xl font-bold top-1/2 left-1/2 absolute translate-y-[-50%] translate-x-[-50%] z-1'>Bienvenidos</h1>
            </div>
        </>
    );
}

export default Banner;