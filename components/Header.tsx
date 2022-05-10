import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [mode, setMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById('toggle').checked =  true;
            setMode(true);
        }
    }, []);

    useEffect(() => {
        if(mode) document.getElementsByTagName('html')[0].classList.add("dark");
        else document.getElementsByTagName('html')[0].classList.remove("dark");
    });
    
    return(
        <div className="flex items-center justify-center w-full">
            <label className="flex items-center cursor-pointer">
                <div className="relative">
                    <input id="toggle" type="checkbox" className="sr-only" onClick={() => setMode(!mode)}/>
                    <div className="slider"></div>
                    <div className="toggleBtn"></div>
                </div>
            </label>
        </div>
    );
}

const Header = () => {
    return(
        <header>
            <a href="./"><img src="../logo.svg"/></a>
            <nav className="flex items-end">
                <ul>
                    <DarkModeToggle />
                    <li><a href="./">Blog</a></li>
                    <li><a href="./projects">Projects</a></li>
                    <li><a href="./about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;