import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handLogin = () => {
    authRequest({
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo1.svg" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUARÍO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="SENHA"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="40px 0px  16px  0px" onClick={handLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
