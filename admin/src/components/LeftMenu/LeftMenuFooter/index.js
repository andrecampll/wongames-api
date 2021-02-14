/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://github.com/andrecampll" target="_blank" rel="noopener noreferrer">
          Made by andrecampll
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
