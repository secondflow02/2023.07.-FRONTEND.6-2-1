import styled from 'styled-components';

const ScrollButton = () => {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Styled.Container>
                <Styled.Button onClick={ScrollToTop}>Top</Styled.Button>
            </Styled.Container>
        </>
    );
};
export default ScrollButton;

const Container = styled.div`
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 1;
`;

const Button = styled.button`
    font-weight: bold;
    font-size: 15px;
    padding: 15px 10px;
    background-color: #000;
    color: #fff;
    border: 1px solid rgb(210, 204, 193);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: rgb(95, 144, 190);
    }
`;

const Styled = {
    Container,
    Button,
};
