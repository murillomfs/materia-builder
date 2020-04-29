import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const materias = [
    { name: '-- empty', type: '' },
    { name: 'Chocobo & Moogle', type: 'red' },
    { name: 'Ifrit', type: 'red' },
    { name: 'Shiva', type: 'red' },
    { name: 'Leviathan', type: 'red' },
    { name: 'Bahamut', type: 'red' },
    { name: 'Fat Chocobo', type: 'red' },
    { name: 'Cactuar', type: 'red' },
    { name: 'Carbuncle', type: 'red' },
    { name: 'Chocobo Chick', type: 'red' },
]

export default function WeaponMaterias({ weaponSlots }) {
    const [build, setBuild] = useState([
        { spot: 0, name: '-- empty', type: '' },
    ]);
    const [select, setSelect] = useState();

    useEffect(() => {
        setSelect();
        handleChangeMateria(select);
    }, [select]);

    function handleChangeMateria(select) {
        if(select){
            const materia = materias.find(element => element.name === select.name )
            const elementsIndex = build.findIndex(element => element.spot === select.id );
            const newArray = build;

            newArray[elementsIndex] = {...newArray[elementsIndex], name: materia.name, type: materia.type};

            setBuild(build);
        }
    }

    return (
        <Container className="build summon">
            <div className="tag">
                <label htmlFor={`spot-1`}>
                    <select 
                        name={`spot-1`} 
                        onChange={e => setSelect({ name: e.target.value, id: 1 })}
                    >
                        {materias.map(materia => (
                            <option 
                                value={materia.name} 
                                key={materia.name} 
                                data-type={materia.type}
                            >
                                {materia.name}
                            </option>
                        ))}
                    </select>
                </label>    
            </div>
        </Container>
    );
}
