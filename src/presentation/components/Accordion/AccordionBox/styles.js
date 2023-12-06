import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 2.4rem;

  animation: appear 1.5s;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const Logo = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 3rem;

  > img {
    width: 15rem;
    height: 15rem;
  }

  > p {
    font-family: ${({ theme }) => theme.FONTS.INDER};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 1024px) {
    margin-top: 1rem;
    > img {
      width: 16rem;
      height: 16rem;
    }

    > p {
      font-size: 2.6rem;
    }
  }
`

export const Members = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding-right: 0.5rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.SCROLLBAR_BACKGROUND};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.SCROLLBAR};
    border-radius: 10px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
  }
`

export const Social = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  > a svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    transition: 0.3s;
  }

  > a svg:hover {
    color: ${({ theme }) => theme.COLORS.BORDER_BUTTON};
  }
`
