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
        { weapon: 0, conn: false },
        { weapon: 1, conn: false },
        { weapon: 2, conn: false },
        { weapon: 3, conn: false },
        { weapon: 4, conn: false },
        { weapon: 5, conn: false },
    ]);

    const [armorSlots, setArmorSlots] = useState([
        { armor: 0, conn: false },
        { armor: 1, conn: false },
        { armor: 2, conn: false },
        { armor: 3, conn: false },
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
                            <option value="Bronze Bangle">Iron Helmet</option>
                            <option value="Iron Bangle">Iron Bangle</option>
                            <option value="Star Bracelet">Star Bracelet</option>
                            <option value="Leather Bracer">Leather Bracer</option>
                            <option value="Mesmeric Armlet">Mesmeric Armlet</option>
                            <option value="Titanium Bangle">Titanium Bangle</option>
                            <option value="Mythril Armlet">Mythril Armlet</option>
                            <option value="Calignious Bracelet">Calignious Bracelet</option>
                            <option value="Studded Bracer">Studded Bracer</option>
                            <option value="Gothic Bangle">Gothic Bangle</option>
                            <option value="Magician's Bracelet">Magician's Bracelet</option>
                            <option value="Heavy-Duty Bracer">Heavy-Duty Bracer</option>
                            <option value="Sorcerer's Armlet">Sorcerer's Armlet</option>
                            <option value="Cog Bangle">Cog Bangle</option>
                            <option value="Iron Maiden">Iron Maiden</option>
                            <option value="Geometric Bracelet">Geometric Bracelet</option>
                            <option value="Supreme Bracer">Supreme Bracer</option>
                            <option value="Rune Armlet">Rune Armlet</option>
                            <option value="Chain Bangle">Chain Bangle</option>
                            <option value="Force Bracelet">Force Bracelet</option>
                            <option value="Midgar Bangle">Midgar Bangle</option>
                            <option value="Shinra Bangle">Shinra Bangle</option>
                            <option value="Astral Cuff">Astral Cuff</option>
                            <option value="Corneo Armlet">Corneo Armlet</option> 
                        </select>

                        <FiChevronDown size={20} color="#3D9DE2" />
                    </label>
                </div>

                <div className="box-select">
                    <label htmlFor="accessory">
                        <img src={accessory} alt="" />
                        <select name="accessory" id="accessory">
                            <option value="Power Wristguards">Power Wristguards</option>
                            <option value="Bulletproof Vest">Bulletproof Vest</option>
                            <option value="Earrings">Earrings</option>
                            <option value="Talisman">Talisman</option>
                            <option value="Supernatural Wristguards">Supernatural Wristguards</option>
                            <option value="Survival Vest">Survival Vest</option>
                            <option value="Platinum Earrings">Platinum Earrings</option>
                            <option value="Timeworn Talisman">Timeworn Talisman</option>
                            <option value="Champion Belt">Champion Belt</option>
                            <option value="Circlet">Circlet</option>
                            <option value="Star Pendant">Star Pendant</option>
                            <option value="Headband">Headband</option>
                            <option value="Protective Boots">Protective Boots</option>
                            <option value="Tarot Cards">Tarot Cards</option>
                            <option value="Otherworldly Crystal">Otherworldly Crystal</option>
                            <option value="Enchanted Ring">Enchanted Ring</option>
                            <option value="Fury Ring">Fury Ring</option>
                            <option value="Enfeeblement Ring">Enfeeblement Ring</option>
                            <option value="Transference Module">Transference Module</option>
                            <option value="Spectral Cogwheel">Spectral Cogwheel</option>
                            <option value="Revival Earrings">Revival Earrings</option>
                            <option value="Crescent Moon Charm">Crescent Moon Charm</option>
                            <option value="Whistlewind Scarf">Whistlewind Scarf</option>
                            <option value="Clarity Pendant">Clarity Pendant</option>
                            <option value="Salvation Badge">Salvation Badge</option>
                            <option value="Healing Carcanet">Healing Carcanet</option>
                            <option value="Mythical Amulet">Mythical Amulet</option>
                            <option value="Moogle’s Amulet">Moogle’s Amulet</option>
                            <option value="Gotterdammerung">Gotterdammerung</option>
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
