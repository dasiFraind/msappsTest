import styled from 'styled-components';

export const Img = styled.img`
height:  ${(props) => props.height >= props.width ? '40%' : '20%'};
width:  ${(props) => props.width >= props.height ? '40%' : '20%'};
`;