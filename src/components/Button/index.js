import { Container, StyledButton } from './styles';

export default function Button({
  placeholder,
  label,
  type,
}) {

  return (
    <Container>
      <StyledButton>
        {label}
      </StyledButton>
    </Container>
  );
}
