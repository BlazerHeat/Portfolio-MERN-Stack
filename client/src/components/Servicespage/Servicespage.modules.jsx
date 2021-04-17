import styled from "styled-components";

const Background = styled.section`
  width: 100%;

  background: #f5f5f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > p {
    border-bottom: #0078ff 5px solid;
    margin: 1rem;
  }
`;

const CardsHolder = styled.div`
  width: 100%;
  max-width: 2000px;

  padding: 0 1rem;
  margin-top: 1rem;
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CardLayout = styled.div`
  min-width: 230px;
  max-width: 500px;
  min-height: 400px;

  background-color: #fff;
  box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
  padding: 2.5rem 1.3rem;
  border-radius: 1rem;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: 50%;
    min-width: 150px;
    max-width: 430px;
    height: auto;

    border: 10px solid #0078ff;
    padding: 30px;

    transition: border 0.5s ease, background-color 0.5s ease, color 0.5s ease;
  }

  h4 {
    margin-top: 1em;
  }

  p {
    padding: 0 2em;
  }

  :hover > svg {
    border: 10px solid #cde1f8;
    background-color: #0078ff;
    color: white;
  }
`;

function Card({ pic, heading, text }) {
  return (
    <CardLayout>
      {pic}
      <h4>{heading}</h4>
      <p>{text}</p>
    </CardLayout>
  );
}

export { Background, CardsHolder, Card };
