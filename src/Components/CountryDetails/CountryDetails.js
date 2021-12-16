import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const CountryDetails = () => {
    const {id} = useParams();
    const [country, setCountry] = useState({});

   

   
    useEffect(()=>{
        const getCountryInfo = async()=>{
            const res = await fetch(`https://restcountries.com/v2/name/${id}`)
            const data = await res.json()
            await setCountry(data[0])
            console.log(data[0])
        };
        getCountryInfo()
    },[id]);

    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1)
    }
    
    const {name, flag, capital, population, nativeName, region, subregion, currencies, languages, topLevelDomain, borders} = country;
    return (
        <div className="h-screen  ">
            <div>
                <button onClick={goBack} className="py-3 px-8 bg-white rounded-md shadow-lg ml-12 mb-8 "><i className="fa fa-arrow-left mr-2" ></i>Back</button>
            </div>
            <div className="container  mx-auto md:flex   items-center">
               <img className="w-5/6 md:w-1/2
                h-auto mx-auto md:pl-4 " src={flag} alt="" />
               <div className="pl-10 sm:pl-12 mt-8 md:pl-5 mx-auto">
               <h2 className="text-2xl font-bold mb-4 md:mb-2 lg:mb-4 dark:text-white">{name}</h2>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3 md:gap-y-1 lg:gap-y-3">
               <p className='dark:text-white'>Native Name: <span className="dark:text-gray-300 text-gray-700 text-sm">{nativeName}</span></p>
                <p className='dark:text-white'>Population: <span className="dark:text-gray-300 text-gray-700 text-sm">{population}</span></p>
                <p className='dark:text-white'>Region: <span className="dark:text-gray-300 text-gray-700 text-sm">{region}</span></p>
                <p className='dark:text-white'>Sub Region: <span className="dark:text-gray-300 text-gray-700 text-sm">{subregion}</span></p>
                <p className='dark:text-white'>Capital: <span className="dark:text-gray-300 text-gray-700 text-sm">{capital}</span></p>
                <p className='dark:text-white'>Top Level Domain: <span className="dark:text-gray-300 text-gray-700 text-sm">{topLevelDomain && topLevelDomain[0]}</span></p>
                <p className='dark:text-white'>Currencies: <span className="dark:text-gray-300 text-gray-700 text-sm">{currencies?.map(curr=> curr.name+', ')}</span></p>
                <p className='dark:text-white'>Languages: <span className="dark:text-gray-300 text-gray-700 text-sm">{languages?.map(lang=> lang.name+', ')}</span></p>

               </div>
               <div>
                   <h5 className='mt-10 md:mt-5 lg:mt-8 block font-semibold dark:text-white'>Border Countries: <span className=" text-gray-700 text-sm mt-5 mr-5 grid grid-cols-3 gap-1 text-center ">{borders?.map(border=> <span className='rounded-sm py-2 px-2 shadow-md bg-white dark:bg-gray-700 dark:text-gray-300 '> {border}</span> )}</span></h5>
               </div>
               </div>

            </div>
        </div>
    );
};

export default CountryDetails;