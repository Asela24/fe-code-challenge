import upIcon from '@/assets/up.png';
import downIcon from '@/assets/down.png';
import './TrendIcon.css'
import { memo } from 'react';

type TrendIconProps = {
  direction: 'UP' | 'DOWN' | null;
};

const TrendIcon = ({ direction }: TrendIconProps) => {
  if (direction === null) {
    return null;
  }

  switch (direction) {
    case 'DOWN':
      return <img src={upIcon} className='trendIcon' />;
    case 'UP':
      return <img src={downIcon} className='trendIcon' />;
    default:
      const exhaustiveCheck: never = direction;
      return exhaustiveCheck;
  }
};
export default memo(TrendIcon);