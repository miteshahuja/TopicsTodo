import React from 'react';
import styled from 'styled-components';

// TODO: There is an issue in this file regarding the Semantic HTML standard, please correct it.
const Container = styled.div`
  cursor: pointer;
`;


function Article(props) {
  const { title, body, isSelected } = props;

  function handleClick() {
    const { id, onClick } = props;

    onClick(id);
  }

  return (
    <Container onClick={handleClick}>
      <h2>{title}</h2>
      {isSelected && <p>{body}</p>}
    </Container>
  );
}

export default Article;
