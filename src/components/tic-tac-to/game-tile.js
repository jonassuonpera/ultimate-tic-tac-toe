import styled from 'styled-components';

const Tile = styled.div`
border:1px solid black;
height:49px;
width:49px;
&:hover {
    background-color:${({PlayerTurn, State}) => PlayerTurn && State == null &&  'red' || State == null && 'blue'}; 
    cursor:${({State}) => State == null && 'pointer'};
}
background-color: ${({State}) => 
    State === 'x' && 'red' || State === 'o' && 'blue' || '#fff'
};      
`;

export default function GameTile(props) {

    const handleClick = (e) => {
        if (props.state.state === null) {
            props.onClick(e);
        }       
    }
    return (
        <Tile id={props.state.tile} State={props.state.state} PlayerTurn={props.playerOneTurn} onClick={handleClick}/>
    )
}