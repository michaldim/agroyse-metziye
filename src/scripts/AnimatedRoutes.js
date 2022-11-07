import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Home';
import Gallery from './Gallery';
import { AnimatePresence, useScroll } from "framer-motion";
import NavigationBar from "./NavigationBar";
import Questions from "./Questions";
import Admin from "./Admin";


const AnimatedRoutes = () => {

    const location = useLocation() // useLocation is the only way to make Routes animation work (comparing to animation on an element inside a component)
    const [info, setInfo] = useState(false) //When info = false, the navigation bar will be closed
    const { scrollY } = useScroll()

    // When we have scroll changes, we make the info to become false, so the navbar will get closed
    useEffect(() => {
        return scrollY.onChange(() => {
            setInfo(false)
        })
    }, [scrollY])


    return ( 
        <div>
            <NavigationBar info={info} setInfo={setInfo} />
            <AnimatePresence mode={"wait"} onExitComplete={() => setInfo(false)}> 
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}
 
export default AnimatedRoutes;