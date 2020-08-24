import React, { FC } from 'react';
import { LoginModelState, ConnectProps, Loading, connect } from 'umi';
interface Props extends ConnectProps {
  login: LoginModelState;
  loading: boolean;
}

const Login: FC<Props> = ({ login }) => {
  // const { name } = login;
  console.log(login.state);
  return <div>Hello `name`</div>;
};

export default connect(
  ({ login, loading }: { login: Props['login']; loading: Loading }) => () => {
    console.log(login);

    return {
      login,
      loading: loading.models.login,
    };
  },
)(Login);
