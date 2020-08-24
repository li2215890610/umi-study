import React from 'react';
import styles from './index.less';

const CopyRight: React.FC<{}> = () => (
  <div className={styles.cr}>
    © {new Date().getFullYear()} 北京XX科技有限公司 版权所有 京ICP备XXXXXX号-1
  </div>
);

export default CopyRight;
