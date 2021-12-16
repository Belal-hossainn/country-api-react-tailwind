import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const getCountries = async ()=>{
            const res = await fetch('https://restcountries.com/v2/all')
            const data = await res.json()
            await setCountries(data)
        };
        getCountries()
    },[]);
     
   
    
    const searchCountry = async term => {
        if( term.length < 3 || term === '') return 
        const res = await fetch(`https://restcountries.com/v2/name/${term}`)
        const data = await res.json()
        await setCountries(data)
    };

    const filterByRegion = async region =>{
        if(region === '') return
        const res = await fetch(`https://restcountries.com/v2/region/${region}`)
        const data = await res.json()
        setCountries(data);
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            
            <div className=" container sm:flex sm:justify-between mx-auto px-12 mb-16">
                <div className='flex'>
                <i className=" fa fa-search my-auto -mr-10 z-10 pl-2 py-5 pr-3  rounded-md text-gray-400"></i>
                <input type="text" placeholder="search for a country..." className="pl-10 p-2 py-3 my-auto rounded-md shadow-md w-full focus:outline-none focus:ring-1  focus:ring-gray-300 focus:shadow-indigo-500/50 focus:shadow-inner lg:w-full sm:pr-20  md:pr-36 lg:pr-40 dark:bg-gray-700" onChange={(term)=> searchCountry(term.target.value)}/>
                </div>
                <div>
                <select className="ml-auto  focus:outline-none focus:shadow-lg hover:border-transparent  p-2 rounded-md shadow-md my-5   font-medium dark:bg-gray-700" onChange={(val)=> filterByRegion(val.target.value)}>
                    <option className='' value=""> Filter by Region</option>
                    <option className='focus:ring-2' value="africa">Africa</option>
                    <option className='focus:outline-none' value="americas">America</option>
                    <option className='focus:outline-none' value="asia">Asia</option>
                    <option className='focus:outline-none' value="europe">Europe</option>
                    <option className='focus:outline-none' value="oceania">Oceania</option>
                </select>
                </div>
            </div>
            <div className="container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:gap-5 md:gap-10 mx-auto px-12">
               {
                    countries?.map((country, index)=> <Country key={index} country={country}/>)
                }

            </div>
        </div>
    );
};

export default Home;