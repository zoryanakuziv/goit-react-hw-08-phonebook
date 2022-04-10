import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 20px;
  padding: 16px;
  display: flex;
  // flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 700px;
  height: 120px;

  border-radius: 6px;
  box-shadow: 10px 9px 32px -12px rgba(0, 0, 255, 0.2);

  background: linear-gradient(to bottom, #87ceeb 30%, #f0f8ff 30%);
`;

export const Image = styled.img`
  margin: 30px 0;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  padding: 12px;
`;

export const Name = styled.p`
  width: 180px;
  height: 40px;
  padding: 5px 10px;
  overflow: hidden;
  color: #1e90ff;
  margin: 0;

  font-weight: bold;
`;

export const Number = styled.a`
  text-decoration: none;
  width: 220px;
  padding: 2px;
  overflow: hidden;
  color: #1e90ff;
`;

export const FlexContact = styled.div`
  display: flex;
  //flex-direction: column;
`;

export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 3px;
  border-radius: 50px;
  outline: none;
  border: none;
  overflow: hidden;
  cursor: pointer;
`;
