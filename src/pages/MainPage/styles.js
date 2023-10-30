import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }
`;

export const Integrants = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;