import React, { FC } from 'react';
import {
  LocalesModelState,
  ConnectProps,
  Loading,
  connect,
  useIntl,
  getLocale,
  setLocale,
} from 'umi';
import { Select, Spin } from 'antd';
import styles from './index.less';

interface Props extends ConnectProps {
  Locales: LocalesModelState['state'];
  loading: boolean;
}

const Locales: FC<Props> = ({ Locales, loading }) => {
  const intl = useIntl();
  console.log(Locales);
  return (
    <Spin spinning={!!loading}>
      <div>
        <div style={{ width: 200, textAlign: 'center' }}>
          <Select
            style={{ width: 100 }}
            defaultValue={getLocale()}
            onChange={e => {
              setLocale(e);
            }}
          >
            {Locales.list.map(e => (
              <Select.Option key={e.key} value={e.key}>
                {e.value}
              </Select.Option>
            ))}
          </Select>
        </div>
        <h4 className={styles.message}>
          {intl.formatMessage({ id: 'name' }, { default_name: '旅行者' })}
        </h4>
      </div>
    </Spin>
  );
};

export default connect(
  ({ Locales, loading }: { Locales: Props['Locales']; loading: Loading }) => ({
    Locales,
    Loading: loading,
  }),
)(Locales);
