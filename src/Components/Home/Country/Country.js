import React from 'react';

const Country = (props) => {
    const {name, capital, population, flag} = props.country;
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white ">
            <img className="h-1/2 w-full rounded-tl-lg rounded-tr-lg object-cover " src={flag} alt={name}  />
            <div className="p-4">
                <h3 className="mb-4 font-bold">{name}</h3>
                <p className="text-sm">Capital: <span className="text-gray-600 dark:text-gray-300">{capital}</span></p>
                <p className="text-sm">Population: <span className="text-gray-600 dark:text-gray-300">{population}</span></p>
            </div>
        </div>
    );
};

export default Country;