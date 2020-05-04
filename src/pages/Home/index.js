import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth'; 

import Header from '../../components/Header';

import { Container } from './styles';

export default function Home() {
  const { user } = useContext(AuthContext);

  const characters = user.characters;

  return (
    <Container>
      <Header />

      <div className="content">
        <h1 style={{ marginLeft: 15 }}>Select a character</h1>
      </div>

      { characters.map((char, index) => {
        const builds = char.builds;
        console.log(builds);

        return (
          <div className="box-character" key={index}>
            <div>
              <span className="character-name">{char.bio}</span>
              <span className="character-builds">Builds: {char.builds.length}</span>

              <div className="character-builds-holder">
                { builds.map(build => (
                  <Link to={`characters/${char.slug}/${build.id}`} key={build.id}>
                      <div className="build" key={build.id}></div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <img 
                src={require(`../../images/${char.slug}.png`)} 
                alt={char.name} 
                style={{ maxWidth: 190 }} 
              />
            </div>
          </div>
        )
      })}

      {/* <div className="box-character">
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
            <div className="build"></div>
          </div>
        </div>

        <div>
          <img src={red} alt="Red XIII" style={{ width: 240 }} />
        </div>
      </div> */}
    </Container>
  );
}
