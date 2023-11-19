import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 2.4rem;
`;

export const Logo = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  > p {
    font-family: ${({ theme }) => theme.FONTS.INDER} ;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Members = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  overflow-y: auto;
`;

export const Social = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  > a svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    transition: 0.3s;
  }

  > a svg:hover {
    color: ${({ theme }) => theme.COLORS.BORDER_BUTTON};
  }
`;