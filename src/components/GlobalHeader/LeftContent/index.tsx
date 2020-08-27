import React from 'react';
import Logo from '@/components/Logo';
import { Link } from 'umi';

const LeftContent: React.FC<{}> = () => (
  <>
    <Link to="/dashboard/main">
      <Logo />
    </Link>
  </>
);

export default LeftContent;
