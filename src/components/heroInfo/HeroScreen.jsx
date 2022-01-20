import React from 'react';

export const HeroScreen = ({data}) => {
    
    const {appearance, biography, connections, image, name, powerstats, work} = data

    console.log(data)

    return (
        <div>
            <h1> Name: {name} </h1>
            <h3> Biography </h3>
                <ul>
                    <li> Full Name: {biography["full-name"]} </li>
                    <li> Alter Egos: {biography["alter-egos"]} </li>
                    <li> Aliases: {biography.aliases} </li>
                    <li> Place of Birth: {biography["place-of-birth"]} </li>
                    <li> First Appearance: {biography["first-appearance"]} </li>
                    <li> Publisher: {biography.publisher} </li>
                    <li> Alignment: {biography.alignment} </li>
                </ul>
            <h3> Appearance </h3>
                <ul>
                    <li> Eye Color: {appearance["eye-color"]} </li>
                    <li> Gender: {appearance.gender} </li>
                    <li> Race: {appearance.race} </li>
                    <li> Height: {appearance.height} </li>
                    <li> Weight: {appearance.weight} </li>
                    <li> Hair color: {appearance["hair-color"]} </li>
                </ul>

            <h3> PowerStats </h3>
                <ul>
                    <li> Intelligence: {powerstats.intelligence}</li>
                    <li> Strength: {powerstats.strength}</li>
                    <li> Speed: {powerstats.speed}</li>
                    <li> Durability: {powerstats.durability}</li>
                    <li> Power: {powerstats.power}</li>
                    <li> Combat {powerstats.combat}</li>
                </ul>

            <h3> Connections </h3>
                <ul>
                    <li>Group Affiliation: {connections["group-affiliation"]} </li>
                    <li>Relatives: {connections.relatives} </li>
                </ul>

            <h3> Image </h3>
                <ul>
                    <li> Image: {image.url} </li>
                </ul>

            <h3> Work </h3>
                <ul>
                    <li> Base: {work.base}</li>
                    <li> Occupation: {work.occupation}</li>
                </ul>
            

        </div>
    );
};
