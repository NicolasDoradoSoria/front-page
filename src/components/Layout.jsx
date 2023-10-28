import Header from "./Header";
import '../app/globals.css'
import { WhatsappButton } from "./WhatsappButton";
import useMotion from "@/hooks/useMotion";

const Layout = ({ children }) => {
    const { color, myRef } = useMotion()
    return (
        <div className="animateme">
            <div className="bg-gradient-to-r from-indigo-300 from-20% to-purple-900 to-80% h-full">
                <ul className="bg-bubbles overflow-auto">
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <li className="file"></li>
                    <Header color={color}/>
                    <div ref={myRef}></div>
                    {children}
                    <WhatsappButton phoneNumber="+5491122543976" />
                </ul>
            </div>
        </div>
    );
}


export default Layout;