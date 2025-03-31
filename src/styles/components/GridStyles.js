import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    height: 500px;
    background-color: ${({ theme }) => theme.palette.grey[100]};
    padding: 20px;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.grey[300]};
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-word;
`;

export const Tbody = styled.tbody`
    width: 100%;
    background-color: ${({ theme }) => theme.palette.grey[100]};
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: 2px solid ${({ theme }) => theme.palette.grey[400]};
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    color: ${({ theme }) => theme.palette.grey[900]};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};

    @media (max-width: 500px) {
        ${({ onlyWeb }) => onlyWeb && 'display: none;'}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'start')};
    width: ${({ width }) => (width ? width : 'auto')};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.palette.grey[800]};

    @media (max-width: 500px) {
        ${({ onlyWeb }) => onlyWeb && 'display: none;'}
    }
`;

export const PaginationContainer = styled.div`
  gap: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  box-shadow: 0px 2px 4px ${({ theme }) => theme.palette.grey[300]};
`;

export const PageInfo = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.palette.grey[800]};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; 
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.grey[300]};
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.palette.grey[400] : theme.palette.grey[100]};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease;
`;