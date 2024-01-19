import { Advantages } from './Advantages';
import { RentAuto } from './RentAuto';
import { Container, WelcomeContainer } from './Welcome.styled';

export const Welcome = () => {
  return (
    <>
      <Container>
        <WelcomeContainer>
          <Advantages />
          <RentAuto />
        </WelcomeContainer>
      </Container>
    </>
  );
};
