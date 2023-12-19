import { KeenSliderOptions } from 'keen-slider/react';
import { ReactNode } from 'react';

export type SliderType = {
  config: KeenSliderOptions;
  children: ReactNode;
  title?: string;
};

export type SliderItemType = {
  children: ReactNode;
};

export interface SliderComponent extends React.RefAttributes<HTMLElement> {
  Item: SliderItemType & React.RefAttributes<HTMLElement>;
}
