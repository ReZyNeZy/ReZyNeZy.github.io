// src/components/About.js

import React from "react"

export default function About() 
{
    return(
    <section id = "about">

        <div className= "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className= "lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 fojnt-medium text-white">

                    Aidan MacKenzie
                    <br className="hidden lg:inline-bnlock" />
                    Aspiring Developer and IT Professional

                </h1>
                <p className="mb-8 leading-relaxed">

                    Current student at Indiana University Indianapolis, formerly IUPUI. 
                    Studying for a bachelors degree in Computer Science and current member of Alpha Lamda Delta and Phi Epsilon Sigma honor societies with a
                    3.5 avg GPA

                </p>
                <div className="flex justify-center">

                    <a href="#contact" className=" inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"L>

                        Contact Me

                    </a>
                    <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">

                        Projects

                    </a>
                </div>
            </div>           
        </div>
    </section>
    );    
}
