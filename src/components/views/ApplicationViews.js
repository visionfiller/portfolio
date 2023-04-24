import { Route, Routes } from "react-router-dom"
import { AboutMe } from "../pages/AboutMe"
import { HomePage } from "../pages/Home"
import { MyProjects } from "../pages/Projects"
import { MyResume } from "../resume/resume"

export const AppViews=() => {
    return(<>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/projects" element={<MyProjects/>} />
        <Route path="/resume" element={<MyResume/>} />
        <Route path="/contact" element={<></>} />
    
    </Routes>
    </>
    )
}