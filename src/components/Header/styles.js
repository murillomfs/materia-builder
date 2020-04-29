import styled from 'styled-components';

export const Container = styled.header` 
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img { max-width: 130px; }

    span:nth-child(1) {
        width: 28px;
        height: 1.75px;
        background: #fff;
        display: block;
        margin-bottom: 5px;
    }
    span:nth-child(2) {
        width: 17px;
        height: 1.75px;
        background: #fff;
        display: block;
        margin-bottom: 5px;
        float: right;
    }
`;
