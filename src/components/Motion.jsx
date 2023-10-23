import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Motion = ({ children, style, idMotion }) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // La animación se activa una sola vez cuando el componente entra en la vista
    });

    return (<motion.div
    id={idMotion}
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={style}
        >
        {children}
    </motion.div>
    );
}

export default Motion;