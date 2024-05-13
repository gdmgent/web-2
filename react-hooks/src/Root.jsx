import React, { useEffect, useState } from 'react';

// Destructuring
const array = ['Een', 'Twee', false];
const [firstValue, secondValue, ThirdValue] = array;
console.log(firstValue, secondValue, ThirdValue); // Een


const COLORS = []

const Root = () => {

    console.log('Component wordt gerendered.')
    const [color, setColor] = useState('Red');
    const [birthYear, setBirthYear] = useState(1990);
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang'
    });

    const [name, setName] = useState('Adriaan');

    function handleButtonClick() {

        setColor('Pink');
    }

    function handleSellingCar() {
        console.log('Verkoop auto!');
        setCar({
            ...car,
            brand: 'Porsche',
            model: "911"
        });

        // setCar(previousState => ({
        //     ...previousState,
        //     brand: 'Porsche'
        // }));
    }

    useEffect(() => {
        console.log('Hey!')

        return () => {}
    }, [color])


    return (
        <>
            <div>Favo kleur: {color}</div>
            <button onClick={() => handleButtonClick()}>Verander naar blauw!</button>
            <button onClick={() => setColor("Red")}>Verander naar rood!</button>

            <input onChange={(e) => setName(e.target.value)} value={name} />

            <div>Auto: {car.brand} {car.model}</div>
            <button onClick={handleSellingCar}>Sell car and get a new one</button>
        </>
    )
}

export default Root