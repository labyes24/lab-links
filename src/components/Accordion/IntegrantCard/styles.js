import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};

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

  padding: 0.4rem 1.6rem;

  font-family: ${({ theme }) => theme.FONTS.INTER};

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
      > img {
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};
      } 
    }
  }

  a {
    font-size: 3rem;
  }

  &:hover {
    a {
      font-weight: bold;
    }
  }
`;

export const Description = styled.section`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DESCRIPTION};
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  animation: appear 1.5s;

  .social {
    display: flex;
    justify-content: center;
    gap: .8rem;

    a > svg {
      font-size: 2.7rem;
      transition: 0.3s;
    }

    a > svg:hover {
      color: ${({ theme }) => theme.COLORS.BORDER_BUTTON};
    }
  }

  p {
    text-align: justify;
  }

  @keyframes appear {
    0% {
      opacity: 0.1;
    }

    100% {
      opacity: 1;
    }
  }
`;