import Header from "./Header";
import '../app/globals.css'

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
                    {/* <Header /> */}
                    {children}

            </ul>
        </div>
    </div>
);


export default Layout;