import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  position: absolute;
  top: 120px;
  right: 20px;
  margin: 20px;
  padding: 16px;
  // display: flex;
  // flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 260px;
  height: 300px;

  border-radius: 6px;
  box-shadow: 10px 9px 32px -12px rgba(0, 0, 255, 0.2);

  background: linear-gradient(to bottom, #87ceeb 30%, #f0f8ff 30%);
`;

export const Image = styled.img`
  margin: 16px 0;
  width: 100%;
  height: 120px;
  //border-radius: 100px;
  padding: 12px;
`;
