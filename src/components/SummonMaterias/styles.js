import styled from 'styled-components';

export const Container = styled.div`
    /* Character */
    .character-builds-holder {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 30px;
    }
    
    .build {
        height: 45px;
        width: 45px;
        border-radius: 2.1px;
        background: #252D45;
        box-shadow: 0 5px 11px 0 rgba(0,0,0,0.15);
        position: relative;
        margin-right: 10px;
        border: 1px solid rgba(255,255,255,.15);
    }
    .build::before {
        content: '';
        width: 10px;
        height: 10px;
        background: #000;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 15px;
    }

    .build.green::before { background: #64B55B; }
    .build.blue::before { background: #5DA1DD; }
    .build.yellow::before { background: #DDC55D; }
    .build.purple::before { background: #B55BA6; }

    .build:hover .tag { display: block; }

    .tag {
        position: absolute;
        top: -55px;
        right: -20px !important;
        left: inherit !important;
        margin: auto;
        color: #fff;
        background: #020109;
        border-radius: 4px;
        padding: 10px 5px;
        min-width: 100px;
        text-align: center;
        display: none;
    }
    .tag::after {
        content: '';
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #000;
        position: absolute;
        top: 100%;
        left: inherit !important;
        right: 25px;
    }
    .tag-name { 
        font-size: 11px; 
        line-height: 20px;
        font-weight: 400; 
        display: inline-block; 
        margin-right: 15px;
        text-transform: uppercase;
        font-weight: 500;
    }
    .tag-edit { display: inline-block; transform: translateY(3px); }

    .tag select {
        font-size: 11px; 
        line-height: 20px;
        font-weight: 400; 
        display: inline-block; 
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        background: none;
        border: none;
        text-align: center;
    }

    &::before { background: #BE3B3B; }
    margin-left: auto; margin-right: 0;
    
    .conn::after {
        content: '';
        width: 15px;
        background: #040F1E;
        height: 5px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 99%;
        margin: auto;
        z-index: 10;
    }
`;
