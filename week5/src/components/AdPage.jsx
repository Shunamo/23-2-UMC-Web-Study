import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true // 광고 표시 여부를 상태로 관리
    };
  }

  // 광고 표시 여부를 토글하는 메서드
  handleToggleClick = () => {
    this.setState(prevState => ({
      showAd: !prevState.showAd // 현재 상태의 반대 값으로 토글
    }));
  };

  render() {
    const { showAd } = this.state;

    return (
      <div>
        {/* Ad 컴포넌트를 렌더링하고 상태에 따라 광고를 표시하거나 숨김 */}
        {showAd && <Ad showAd={showAd} />}

        {/* 광고를 제어하는 버튼 */}
        <button onClick={this.handleToggleClick}>
          {showAd ? '광고 숨기기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
