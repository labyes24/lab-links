import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};

  padding: 0.4rem 1.6rem;

  font-weight: 500;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  transition: 0.3s ease-in;


  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  }
  
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;

  .member {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
  
    > img {
      height: 6rem;
      width: 6rem;
  
      border-radius: 999px;
    }
  
    &:hover {
      font-weight: 700;
  
      > img {
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};
      } 
    }
  }
`;

export const Description = styled.section`

`;