import styled from 'styled-components';

const Menu = styled.nav`
 width: 100%;
 display: flex;
 justify-content: center;
 position: fixed;
 top: 0;
 z-index: 3333;

 a{
   text-decoration: none;
   color: black;
   font-size: 1.3rem;
   margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
   &:hover {
     border-bottom: solid 2px black;
   }

 }
`;

export default Menu;