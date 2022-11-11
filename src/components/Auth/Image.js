import styled from "styled-components";

export default function Image({ logo }) {
  return (
    <Img>
      <img src={logo} alt="Logo da Coffe Break" />
    </Img>
  );
}

const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 325px;
    height: 325px;
  }
`;
