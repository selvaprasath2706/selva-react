import Layout from "./Layout"
import {motion} from "framer-motion"
import CreateNote from "../components/home/CreateNote"
import GetNotes from "../components/home/GetNote"
export default function Home(){
    const easing=[0.6,-0.05,0.01,0.99];
    const fadeIn1={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:1.5,
                ease:easing,
            },
        },
    };
    const fadeIn2={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:2.5,
                ease:easing,
            },
        },
    };
    console.log("home");
    return (
        <Layout>
            <motion.div exit="exit" initial="initial" animate="animate">
                <motion.div variants={fadeIn1}>
                    <CreateNote></CreateNote>

                </motion.div>
            </motion.div>
            <motion.div exit="exit" initial="initial" animate="animate">
                <motion.div variants={fadeIn2}>
                <GetNotes></GetNotes>
                </motion.div>
            </motion.div>
            
        </Layout>
    );
}