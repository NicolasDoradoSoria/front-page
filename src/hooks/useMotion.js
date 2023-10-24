import { useInView } from "framer-motion"
import { useEffect } from "react"
import { useRef, useState } from "react"

const useMotion = () => {
    const [color, setColor] = useState(true)
    const myRef = useRef()
    const isInView = useInView(myRef, { once: false, amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            setColor(true)
        } else {
            setColor(false)
        }

    }, [isInView])

    return { color, myRef
};
}

export default useMotion;