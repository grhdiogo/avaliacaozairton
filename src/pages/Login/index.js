import { useState, useEffect, useCallback } from "react";
import Input from '../../components/Input'
import Button from '../../components/Button'
import Text from '../../components/Text'
import {
  Container,
  TitleContainer,
  BodyContainer,
  DataContainer,
  BodyBlurContainer,
} from './styles';

export default function Main() {

  return (
    <Container>
      <BodyBlurContainer />
      <BodyContainer>
        <TitleContainer>
          <Text size={'large'} text={"AgeMed"} />
        </TitleContainer>
        <DataContainer>
          <Input placeholder={'Insira seu e-mail'} label={'E-mail'} kind={'transparent'} />
          <Input placeholder={'Insira seu e-mail'} label={'E-mail'} kind={'transparent'} />
          <Button label={'Entrar'} />
        </DataContainer>
      </BodyContainer>
    </Container>
  );
}
