import React from 'react';

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null; // 값이 false인 경우 null 반환하여 아무것도 렌더링하지 않음
  }

  return (
    <div>
      <img style={{ width: "100%" }} src="/Untitled.svg" alt="광고 배너" />
    </div>
  );
};

export default Ad;
