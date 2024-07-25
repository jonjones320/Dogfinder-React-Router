import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div>
            <h1>Meet the Dogs</h1>
            {dogs.map(dog => (
                <div key={dog.name}>
                    <h2>{dog.name}</h2>
                    <img src={dog.src} alt={dog.name} />
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                        More about {dog.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}