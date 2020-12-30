import Button from '../buttons/button';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export default function GameMenu(props) {
    let title;
    if (props.previousResult !== null) {
        title = props.previousResult === 'blue' ? 'Blue won. Want to play again?' : 'Red won. Want to play again?';
    } else {
        title = 'Want to play?';
    }

    const handleOnClick = hardcore => {
        props.onAcceptPlay(hardcore);
    }


    return (
        <MenuWrapper>
            <h1>{title}</h1>
            <div><Button text="Play Normal Game" onClick={() => handleOnClick(false)}/></div>
            <div><Button text="Play Hardcore Game" onClick={() => handleOnClick(true)}/></div>
        </MenuWrapper>
    )
}