import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

import Header from '../../components/Header';
import WeaponMaterias from '../../components/WeaponMaterias';
import ArmorMaterias from '../../components/ArmorMaterias';

import weapon from '../../images/icon-weapon.png';
import equipment from '../../images/icon-equipment.png';
import accessory from '../../images/icon-accessory.png';

export default function Profile() {
    const [weaponSlots, setWeaponSlots] = useState([
        { spot: 1, conn: true },
        { spot: 2, conn: false },
        { spot: 3, conn: true },
        { spot: 4, conn: false },
        { spot: 5, conn: false },
        { spot: 6, conn: false },
        { spot: 7, conn: false },
        { spot: 8, conn: false },
    ]);

    const [armorSlots, setArmorSlots] = useState([
        { spot: 1, conn: true },
        { spot: 2, conn: false },
        { spot: 3, conn: true },
        { spot: 4, conn: false },
    ]);
    
    return (
        <Container>
            <Header />

            <div className="content">
                <div className="character-builds-holder">
                    <div className="build"></div>
                    <div className="build"></div>
                </div>

                <h1>Cloud Strife</h1>

                <div className="box-select">
                    <label htmlFor="weapon">
                        <img src={weapon} alt="" />
                        <select name="weapon" id="weapon">
                            <option value="Buster Sword">Buster Sword</option>
                            <option value="Iron Blade">Iron Blade</option>
                            <option value="Nail Bat">Nail Bat</option>
                            <option value="Hardedge">Hardedge</option>
                            <option value="Mythril Saber">Mythril Saber</option>
                            <option value="Twin Stinger">Twin Stinger</option>
                        </select>

                        <FiChevronDown size={20} color="#3D9DE2" />
                    </label>
                </div>

                <div className="box-select">
                    <label htmlFor="equipment">
                        <img src={equipment} alt="" />
                        <select name="equipment" id="equipment">
                            <option value="Iron Helmet">Iron Helmet</option>
                            <option value="Iron Helmet">Crosssword</option>
                            <option value="Iron Helmet">Mythril Dagger</option>
                            <option value="Iron Helmet">Ultima Weapon</option>
                        </select>

                        <FiChevronDown size={20} color="#3D9DE2" />
                    </label>
                </div>

                <div className="box-select">
                    <label htmlFor="accessory">
                        <img src={accessory} alt="" />
                        <select name="accessory" id="accessory">
                            <option value="Mythril Sword">Gotterdammerung</option>
                            <option value="Mythril Sword">Crosssword</option>
                            <option value="Mythril Sword">Mythril Dagger</option>
                            <option value="Mythril Sword">Ultima Weapon</option>
                        </select>

                        <FiChevronDown size={20} color="#3D9DE2" />
                    </label>
                </div>

                <div className="materia-holder">
                    <WeaponMaterias weaponSlots={weaponSlots} />

                    <ArmorMaterias armorSlots={armorSlots} />
                </div>

                {/* <div className="character-infos">
                    <span className="attr">HP</span>
                    <span className="value">+88</span>
                    <span className="attr">/</span>
                    <span className="attr">MP</span>
                    <span className="value">+88</span>
                </div>

                <div className="character-stats-holder">
                    <div className="character-stats">
                        <div>
                            <span className="attr">Attack</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Defense</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Magic Attack</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Magic Defense</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Strength</span>
                            <span className="value">-</span>
                        </div>
                    </div>

                    <div className="character-stats">
                        <div>
                            <span className="attr">Magic</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Vitality</span>
                            <span className="value">+88</span>
                        </div>
                        <div>
                            <span className="attr">Spirit</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Luck</span>
                            <span className="value">-</span>
                        </div>
                        <div>
                            <span className="attr">Speed</span>
                            <span className="value">-</span>
                        </div>
                    </div>
                </div> */}

                <button className="button-default">Save this build</button>
            </div>
        </Container>
    );
}
