import styled from 'styled-components';
import homeImage from '../../homeImage.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${homeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const WelcomeContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 700px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 40px;
  }
`;
