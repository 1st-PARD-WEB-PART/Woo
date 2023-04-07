import styled from "styled-components";
const LanguageUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
 flex-flow:wrap;
 

 
  /* BW Shade 1 */
  
  color: #8A8D91;
  li + li {
    margin-right: 30px;
  }
`;

export default LanguageUl