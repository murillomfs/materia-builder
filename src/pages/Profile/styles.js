import styled from 'styled-components';

import bgCloud from '../../images/bg-cloud.png';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: url(${bgCloud}) right center no-repeat;
    background-size: cover;

    .content h1 { margin-bottom: 10px; }

    .box-select {
        margin-bottom: 0;
    }
    .box-select img { 
        margin-right: 10px;
        max-width: 35px;
        transform: translateY(12px);
    }
    .box-select select {
        color: #3D9DE2;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 10px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        background: none;
        border: none;
    }
    .box-select label { position: relative; }
    .box-select label svg {
        position: absolute;
        top: 0;
        right: -10px;
        display: none;
    }

    .materia-holder {
        background: linear-gradient(180deg, #051326 0%, #20293C 100%);
        padding: 15px;
        box-shadow: 0 5px 11px 0 rgba(0,0,0,0.15);
        border: 1px solid #3D9DE2;
        border-radius: 6px;
        margin-top: 30px;
    }
    .materia-holder .character-builds-holder:first-child { margin-bottom: 15px; }
    .materia-holder .character-builds-holder { margin-bottom: 0; }
    .materia-holder .build { 
        background: #040F1E; 
        box-shadow: 0 5px 11px 0 rgba(61,157,226,0.15);
        width: 20px;
        height: 20px;
        border-radius: 20px;
    }

    .materia-holder { margin-bottom: 40px; }

    .character-infos { margin-bottom: 20px; }
    .attr {
        color: #3D9DE2;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 10px;
        display: inline-block;
        margin-right: 20px;
    }
    .value {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 10px;
        display: inline-block;
        margin-right: 20px;
    }

    .character-stats .attr { font-size: 14px; font-weight: 500; }
    .character-stats .value { font-size: 14px; font-weight: 500; }

    .character-stats-holder {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-bottom: 20px;
    }
    .character-stats {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .character-stats div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .button-default {
        position: fixed;
        bottom: 15px;
        width: calc(100% - 30px);
    }
`;
