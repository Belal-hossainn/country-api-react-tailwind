import React, { useState } from 'react';

const Header = () => {

    const [mode, setMode] = useState(true);
    const [toggleBtn, setToggleBtn] = useState('<li class= "fas fa-sun"></li> Light Mode')

    const toggleMode = ()=>{
        if(mode){
            document.documentElement.classList.add('dark');
            setToggleBtn('<li class= "fas fa-moon"></li> Dark Mode')
            setMode(current=> current = !current)
        }
        if(!mode){
            document.documentElement.classList.remove('dark');
            setToggleBtn('<li class= "fas fa-sun"></li> Light Mode')
            setMode(current=> current = !current)
        }
    };

    return (
        <div className="bg-white dark:bg-gray-700 dark:text-white py-6 px-12 w-screen shadow-md mb-10">
                <div className="flex container mx-auto ">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={()=> toggleMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}></button>
                    </div>
                </div>
            </div>
    );
};

export default Header;