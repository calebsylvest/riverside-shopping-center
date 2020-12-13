import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <h2>{config.subHeading}</h2>
    </header>
  );
}
