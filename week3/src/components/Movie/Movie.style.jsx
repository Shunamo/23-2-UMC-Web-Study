import styled from 'styled-components';

export const Body = styled.div`
  background-color: #22254b;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
  max-height: 100%;
`;

export const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border: 1px solid red;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const MovieRating = styled.span`
  margin-left: 3px;
`;


export const MovieHover = styled.div`
  background-color:  black;
  border-radius: 5px;
  color: #22254b;  
  padding: 1rem;
  opacity: 80%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  max-height: 100%;
  visibility: hidden;
 
  /* 마우스를 올렸을 때 스타일 변경 */
  ${MovieContainer}:hover & {
    transform: translateY(0%);
    visibility: visible; 
  }
`;
