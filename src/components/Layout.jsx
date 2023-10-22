"use client"
import Header from "./Header";

const Layout = ({ children }) =>
(
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
                <div className="z-100">
                    <Header />
                    {children}
                </div>

            </ul>
        </div>
    </div>
);


export default Layout;