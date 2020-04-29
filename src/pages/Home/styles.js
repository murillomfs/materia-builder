import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    /* Character */
    .box-character {
        padding: 30px;
        height: 170px;
        width: 100%;
        background: linear-gradient(180deg, #051326 0%, #20293C 100%);
        position: relative;
        border-bottom: 1px solid #3D9DE2;
    }
    .box-character img {
        position: absolute;
        bottom: 0;
        right: -40px;
    }
    .character-name {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        display: block;
        margin-bottom: 10px;
    }
    .character-builds {
        color: #3D9DE2;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        display: block;
        margin-bottom: 20px;
    }
    .character-builds-holder {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    
    .build {
        height: 35.7px;
        width: 38.15px;
        border-radius: 2.1px;
        background: #040F1E;
        box-shadow: 0 5px 11px 0 rgba(61,157,226,0.15);
        position: relative;
        margin-right: 10px;
    }
    .build::before {
        content: '';
        width: 10px;
        height: 10px;
        background: #64B55B;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 15px;
    }
    .build:nth-child(2)::before { background: #5DA1DD; }
    .build:nth-child(3)::before { background: #b55bb5; }
    
    .build.conn::after {
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
