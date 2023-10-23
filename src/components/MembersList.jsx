'use client'
import Member from "../views/Member";
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Team = [{
    id: 1,
    name: "Nicolas Dorado Soria",
    job: "Programador Back-End",
    img: "https://static.vecteezy.com/system/resources/previews/009/749/827/non_2x/man-avatar-icon-cartoon-male-profile-mascot-illustration-face-business-user-logo-free-vector.jpg"
}, {
    id: 2,
    name: "Florencia Allami",
    job: "Programadora Front-End",
    img: "https://static.vecteezy.com/system/resources/previews/009/749/880/non_2x/cute-girl-avatar-icon-cartoon-little-woman-profile-mascot-illustration-girl-head-face-business-user-logo-free-vector.jpg"
}, {
    id: 3,
    name: "Ezequiel Viera",
    job: "Programador Front-End",
    img: "https://static.vecteezy.com/system/resources/previews/009/749/827/non_2x/man-avatar-icon-cartoon-male-profile-mascot-illustration-face-business-user-logo-free-vector.jpg"
}, {
    id: 4,
    name: "Reych Perez",
    job: "Programador",
    img: "https://static.vecteezy.com/system/resources/previews/009/749/827/non_2x/man-avatar-icon-cartoon-male-profile-mascot-illustration-face-business-user-logo-free-vector.jpg"
}]



const MembersList = () => {
    return (<>
        <div    
            className="bg-gradient-to-r from-purple-400 to-purple-900 w-full flex justify-center gap-5 flex-wrap">
            {Team.map((member) => (
                <Member member={member} key={member.id} />
            ))}
        </div>
    </>);
}

export default MembersList;