import { Container, Title, Button } from './RentAuto.styled';

export const RentAuto = () => {
  return (
    <>
      <Container>
        <Title>Rent Auto now</Title>
        <Button type="button" to="/Gallery">
          Rent
        </Button>
      </Container>
    </>
  );
};
