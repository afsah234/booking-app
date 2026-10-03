import Container from "./Container";

export default function Header({ title, subtitle }) {
  return (
    <header className="header">
      <Container>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Container>
    </header>
  );
}
