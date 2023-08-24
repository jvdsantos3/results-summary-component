import { styled } from 'styled-components'

export const ResultsSummaryContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 32px;
    max-width: 46rem;
    flex-direction: row;
    gap: 2.5rem;
    background: ${({ theme }) => theme.colors.white};
  }
`

export const ResultContainer = styled.section`
  padding: 1.5rem 3.5625rem 2.5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors['gradient-1-purple']},
    ${({ theme }) => theme.colors['gradient-1-blue']}
  );
  border-radius: 0 0 32px 32px;
  box-shadow: 0px 30px 60px 0px rgba(61, 108, 236, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    max-width: 23rem;
    border-radius: 32px;
    padding: 2.375rem 3.375rem 2.875rem;
    gap: 0;
  }

  > h2 {
    color: ${({ theme }) => theme.colors['light-blue']};
    font-size: 1.125rem;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

export const ResultIndicator = styled.div`
  width: 140px;
  height: 140px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors['gradient-1-purple']} 0.01%,
    ${({ theme }) => theme.colors['gradient-1-blue']} 100%
  );
  border-radius: 100%;

  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors['gradient-2-purple']} 0%,
      rgba(37, 33, 201, 0) 100%,
      rgba(37, 33, 201, 0) 100%
    );
    margin: 2.1875rem 0 1.75rem;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 4.5rem;
    font-weight: 800;

    @media (min-width: 768px) {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }
  }

  span {
    color: ${({ theme }) => theme.colors['light-blue']};
    font-weight: 700;
    opacity: 0.5;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`

export const ResultTextContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    max-width: 16.25rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.875rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['light-blue']};

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`

export const SummaryContainer = styled.section`
  padding: 0 1.875rem 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.375rem 2.5rem 2.875rem 0;
    width: 18rem;
    gap: 0;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['dark-navy']};

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

export const SummaryIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    margin: 1.75rem 0 2.5625rem;
  }
`

interface SummaryIndicatorItemProps {
  variant: 'red' | 'yellow' | 'green' | 'blue'
}

export const SummaryIndicatorItem = styled.div<SummaryIndicatorItemProps>`
  padding: 1.125rem 1rem;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.white},
    ${({ theme, variant }) => theme.colors[variant]} 5%
  );
  border-radius: 12px;

  color: ${({ theme, variant }) => theme.colors[variant]};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SummaryIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const SummaryIndicatorItemPercent = styled.div`
  color: ${({ theme }) => theme.colors['dark-navy']};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  span {
    opacity: 0.5;
  }
`

export const SummaryButton = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors['dark-navy']};
  border: 0;
  border-radius: 128px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  &:hover {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors['gradient-1-purple']} 0.01%,
      ${({ theme }) => theme.colors['gradient-1-blue']} 100%
    );
  }
`
