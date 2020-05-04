import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/auth';
import { FiEdit2 } from 'react-icons/fi';
import $ from 'jquery';

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

export default function SummonMaterias() {
    const { user } = useContext(AuthContext);

    const character = user.characters.find(element => element.slug === 'cloud' );
    const selectedBuild = character.builds[0].build.weapon;
    const selectedMateriaName = selectedBuild[6].name;

    const [build, setBuild] = useState(selectedBuild);
    const [select, setSelect] = useState();
    const [list, setList] = useState(user);

    useEffect(() => {
        setSelect();
        handleChangeMateria(select);

        selectedMateriaName !== '-- empty' ? $('.summon-holder').addClass('summon') : console.log();
    }, [select]);

    function handleChangeMateria(select) {
        if(select){
            const materia = materias.find(element => element.name === select.name )
            const elementsIndex = build.findIndex(element => element.weapon === select.id );
            const newArray = build;

            newArray[elementsIndex] = {...newArray[elementsIndex], name: materia.name, type: materia.type};

            // BUG REPORT: When user already have a selected summon even if he remove it, 
            // the materia spot don't change de color back to null

            setBuild(build);
            setList(user);
            localStorage.setItem('@Auth:user', JSON.stringify(user));
        }
    }

    return (
        <Container className="build summon-holder">
            <div className="tag">
                <FiEdit2 size={14} className="tag-edit" />
                <label htmlFor={`weapon-7`}>
                    <select 
                        name={`weapon-7`} 
                        value={selectedBuild[6].name}
                        onChange={e => setSelect({ name: e.target.value, id: 6 })}
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
