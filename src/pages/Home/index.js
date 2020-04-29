import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container } from './styles';

import cloud from '../../images/cloud.png';
import tifa from '../../images/tifa.png';
import barret from '../../images/barret.png';
import aerith from '../../images/aerith.png';
import red from '../../images/red-xiii.png';

export default function Home() {
  return (
    <Container>
      <Header />

      <div className="content">
        <h1 style={{ marginLeft: 15 }}>Select a character</h1>
      </div>

      <div className="box-character">
        <div>
          <span className="character-name">Cloud Strife</span>
          <span className="character-builds">Builds: 1</span>

          <div className="character-builds-holder">
            <Link to="/profile"><div className="build"></div></Link>
          </div>
        </div>

        <div>
          <img src={cloud} alt="Cloud Strife" style={{ width: 170 }} />
        </div>
      </div>

      <div className="box-character">
        <div>
          <span className="character-name">Tifa Lockhart</span>
          <span className="character-builds">Soon...</span>
        </div>

        <div>
          <img src={tifa} alt="Tifa Lockhart" style={{ width: 240 }} />
        </div>
      </div>

      <div className="box-character">
        <div>
          <span className="character-name">Barret Wallace</span>
          <span className="character-builds">Soon...</span>
        </div>

        <div>
          <img src={barret} alt="Barret Wallace" style={{ width: 240 }} />
        </div>
      </div>

      <div className="box-character">
        <div>
          <span className="character-name">Aerith Gainsborough</span>
          <span className="character-builds">Soon...</span>
        </div>

        <div>
          <img src={aerith} alt="Aerith Gainsborough" style={{ width: 210 }} />
        </div>
      </div>

      <div className="box-character">
        <div>
          <span className="character-name">Red XIII</span>
          <span className="character-builds">Soon...</span>

          <div className="character-builds-holder">
            {/* <div className="build"></div> */}
          </div>
        </div>

        <div>
          <img src={red} alt="Red XIII" style={{ width: 240 }} />
        </div>
      </div>
    </Container>
  );
}
