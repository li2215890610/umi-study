import React from 'react';

const LOGO_SRC = '/v3/assets/logo.svg';
const LOGO_IMG_SRC = '/v3/assets/logo-img.svg';
const LOGO_TEXT_SRC = '/v3/assets/logo-text.svg';

const Logo: React.FC<{}> = () => <img src={LOGO_SRC} height="32" />;

export default Logo;
