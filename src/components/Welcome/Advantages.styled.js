import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  background: grey;
  padding: 24px 16px;
  margin-left: 15px;
  margin-right: 15px;
  margin: 40px auto;
  border-radius: 10px;
  //   box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    width: 560px;
    margin: 60px 0px 50px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
    margin: 0;
    margin-left: 81px;
    margin-top: 24px;
    margin-bottom: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

export const Advantages = styled.ul``;

export const Advantage = styled.li`
  display: flex;
  align-items: center;
`;
