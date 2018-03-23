// Dependencies
import React from 'react';
import {Image} from 'react-native';

// Assets
const LogoAlmundo = require('../../assets/images/logo-almundo.png');

function Logo() {
  return (
    <Image
      source={LogoAlmundo}
      style={{width: 30, height: 30}}
    />
  );
}

export default Logo;
