import { FC } from 'react';
import { SliderItemType } from './types';

const SliderItem: FC<SliderItemType> = ({ children }) => {
  return <div className="keen-slider__slide">{children}</div>;
};

export default SliderItem;
