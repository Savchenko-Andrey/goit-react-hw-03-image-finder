import { Field, Form } from 'formik';
import styled from 'styled-components';

export const HeaderForm = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: lightblue;
`;

export const Serchbar = styled(Form)`
  position: relative;
`;

export const InputForm = styled(Field)`
  width: 300px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  :hover,
  :focus {
    border: blue;
    box-shadow: 2px 2px 3px blue;
  }
`;
