import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};

  display: flex;
  align-items: center;
  gap: 4rem;

  padding: 0.4rem 1.6rem;

  font-weight: 500;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  transition: 0.3s ease-in;

  > img {
    height: 7rem;
    width: 7rem;

    border-radius: 999px;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    font-weight: 700;

    > img {
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};
    } 
  }
  
`;

export const Description = styled.section`
  display: none;
`;