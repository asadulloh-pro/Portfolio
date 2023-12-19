import React, { FC, useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { SliderItemType, SliderType } from './types';
import SliderItem from './SliderItem';
import { Arrow } from '@/assets/svg';

const Slider: FC<SliderType> & {
  Item: FC<SliderItemType>;
} = ({ config, children, title }) => {
  const [ref, innerRef] = useKeenSlider<HTMLDivElement>(config);

  const onPrev = useCallback(() => {
    innerRef.current?.prev();
  }, [innerRef]);

  const onNext = useCallback(() => {
    innerRef.current?.next();
  }, [innerRef]);

  return (
    <div className="grid gap-[1rem]">
      {title && (
        <div className="flex items-center justify-between">
          <h3 className="text-[3rem] text-primary">{title}</h3>
          <div className="flex items-center justify-end gap-[1rem]">
            <button
              className="stroke-addition w-[2.5rem] h-[2.5rem] border border-addition flex items-center justify-center rounded-full hover:shadow-hovered_primary"
              type="button"
              onClick={onPrev}
              aria-label='slide prev'
            >
              <Arrow />
            </button>
            <button
              className="stroke-addition w-[2.5rem] h-[2.5rem] border border-addition flex items-center justify-center rounded-full rotate-[180deg] hover:shadow-hovered_primary"
              type="button"
              onClick={onNext}
              aria-label='slide next'
            >
              <Arrow />
            </button>
          </div>
        </div>
      )}

      <div ref={ref} className="keen-slider">
        {children}
      </div>
    </div>
  );
};

Slider.Item = SliderItem;

export default Slider;
