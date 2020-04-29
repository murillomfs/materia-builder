import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 600px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;

    img { max-width: 70%; margin: 120px; }

    form { width: 100%; }
    form label {
        text-align: left;
        color: #3D9DE2;
        font-size: 14px;
        margin-bottom: 10px;
        width: 100%;
        display: block;
    }
    form input[type=email] {
        box-sizing: border-box;
        height: 45px;
        line-height: 45px;
        width: 100%;
        border: 1px solid #3D9DE2;
        border-radius: 6px;
        background-color: #20293C;
        padding: 0 20px;
        margin-bottom: 15px;
        color: #3D9DE2;
        font-size: 14px;
    }
    form input[type=submit] {
        height: 45px;
        line-height: 45px;
        width: 100%;
        background-color: #3D9DE2;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
        transition: all .3s ease-in-out;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
    }
    form input[type=submit]:hover {
        opacity: .8;
    }
`;
