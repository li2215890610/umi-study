import React, { FC } from 'react';
import { LoginModelState, ConnectProps, Loading, connect } from 'umi';

interface Props extends ConnectProps {
  login: LoginModelState['state'];
  loading: boolean;
}

const Login: FC<Props> = ({ login }) => {
  // const { name } = login;
  console.log(login);

  return <div>Hello `{login.name}`111</div>;
};

export default connect(
  ({ login, loading }: { login: Props['login']; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(Login);
