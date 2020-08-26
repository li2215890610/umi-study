import React, { FC } from 'react';
import {
  LoginModelState,
  ConnectProps,
  Loading,
  connect,
  useIntl,
  getLocale,
} from 'umi';

interface Props extends ConnectProps {
  login: LoginModelState['state'];
  loading: boolean;
}

const Login: FC<Props> = ({ login }) => {
  // const { name } = login;
  const intl = useIntl();
  console.log(login);
  console.log(getLocale());
  return (
    <div>
      Hello
      {intl.formatMessage({ id: 'name' }, { default_name: '旅行者' })}111
    </div>
  );
};

export default connect(
  ({ login, loading }: { login: Props['login']; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(Login);
