import { Field, Form } from 'formik';
import styled from 'styled-components';

export const HeaderForm = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  background-color: red;
`;

export const Serchbar = styled(Form)`
  position: relative;
`;

export const InputForm = styled(Field)`
  width: 8px;
  height: 10px;
  outline: none;
  /* border: ${p => p.theme.borders.normal}; */
  border-radius: 10px;
  :hover,
  :focus {
    /* border: ${p => p.theme.borders.normal} green; */
    box-shadow: 2px 2px 3px green;
  }
`;
