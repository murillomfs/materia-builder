import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';

import SummonMaterias from '../SummonMaterias';

import { Container } from './styles';

const materias = [
    { name: '-- empty', type: '' },
    { name: 'Healing', type: 'green' },
    { name: 'Cleansing', type: 'green' },
    { name: 'Revival', type: 'green' },
    { name: 'Fire', type: 'green' },
    { name: 'Ice', type: 'green' },
    { name: 'Lightning', type: 'green' },
    { name: 'Barrier', type: 'green' },
    { name: 'Wind', type: 'green' },
    { name: 'Poison', type: 'green' },
    { name: 'Binding', type: 'green' },
    { name: 'Subversion', type: 'green' },
    { name: 'Time', type: 'green' },
    { name: 'Elemental', type: 'blue' },
    { name: 'Magnify', type: 'blue' },
    { name: 'Warding', type: 'blue' },
    { name: 'Synergy', type: 'blue' },
    { name: 'HP Absorption', type: 'blue' },
    { name: 'MP Absorption', type: 'blue' },
    { name: 'AP Up', type: 'blue' },
    { name: 'Chakra', type: 'yellow' },
    { name: 'Assess', type: 'yellow' },
    { name: 'Prayer', type: 'yellow' },
    { name: 'Steal', type: 'yellow' },
    { name: 'ATB Boost', type: 'yellow' },
    { name: 'Enemy Skill', type: 'yellow' },
    { name: 'HP Up', type: 'purple' },
    { name: 'Mp Up', type: 'purple' },
    { name: 'Magic Up', type: 'purple' },
    { name: 'Luck Up', type: 'purple' },
    { name: 'Gil', type: 'purple' },
    { name: 'EXP Up', type: 'purple' },
    { name: 'Deadly Dodge', type: 'purple' },
    { name: 'Parry', type: 'purple' },
    { name: 'First Strike', type: 'purple' },
    { name: 'Refocus', type: 'purple' },
    { name: 'Auto-Cure', type: 'purple' },
    { name: 'Item Master', type: 'purple' },
    { name: 'Provoke', type: 'purple' },
    { name: 'ATB Assist', type: 'purple' },
    { name: 'ATB Stagger', type: 'purple' },
    { name: 'Steadfast Block', type: 'purple' },
    { name: 'Skill Master', type: 'purple' },
]

export default function WeaponMaterias({ weaponSlots }) {
    const [build, setBuild] = useState([
        { spot: 0, name: '-- empty', type: '' },
        { spot: 1, name: '-- empty', type: '' },
        { spot: 2, name: '-- empty', type: '' },
        { spot: 3, name: '-- empty', type: '' },
        { spot: 4, name: '-- empty', type: '' },
        { spot: 5, name: '-- empty', type: '' },
        { spot: 6, name: '-- empty', type: '' },
        { spot: 7, name: '-- empty', type: '' }
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
        <Container>
            <div className="character-builds-holder">
                {weaponSlots.map((slot, index) => {
                    let color = build[index].type
                    let name = build[index].name
                    
                    return (
                        <div className={ slot.conn ? `build conn ${color}` : `build ${color}` } key={index}>
                            <div className="tag">
                                <FiEdit2 size={14} className="tag-edit" />
                                <label htmlFor={`spot-${index}`}>
                                    <select 
                                        name={`spot-${index}`} 
                                        value={name}
                                        onChange={e => setSelect({ name: e.target.value, id: index })}
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
                        </div>
                    )
                })}

                <SummonMaterias />
            </div>
        </Container>
    );
}
