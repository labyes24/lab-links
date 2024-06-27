import styled from 'styled-components'

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

  @media (min-width: 1024px) {
    height: ${({ $isActiveSection }) =>
      $isActiveSection ? 'auto' : 'fit-content'};
  }
`

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
      width: 6rem;
      aspect-ratio: 1/1;
      object-fit: cover;

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

  @media (min-width: 1024px) {
    padding-block: 2rem;
    position: relative;

    .member {
      flex-direction: column;
      gap: 1.6rem;

      > img {
        height: 10rem;
        width: 10rem;
      }
    }

    a {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
  }
`

export const Description = styled.section`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DESCRIPTION};
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_BUTTON};
  border-radius: 0 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  animation: appearMemberDetails 2s;

  .social {
    display: flex;
    justify-content: center;
    gap: 0.8rem;

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

  overflow: hidden; /* Adiciona overflow: hidden para esconder o conteúdo que ultrapassa o max-height */
  max-height: 0;
  opacity: 0;

  &.active {
    animation: appearMemberDetails 3s;
    max-height: 50rem;
    opacity: 1;
  }

  @keyframes appearMemberDetails {
    0% {
      max-height: 0;
      opacity: 0;
    }

    100% {
      max-height: 50rem;
      opacity: 1;
    }
  }
`
