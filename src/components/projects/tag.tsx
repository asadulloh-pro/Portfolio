import { FC, memo } from 'react';

type TagType = {
  text: string;
};

const Tag: FC<TagType> = ({ text }) => {
  return (
    <span className="whitespace-nowrap py-[0.2rem] px-[1.2rem] text-addition bg-[#58dada49] rounded-[2rem]">
      {text}
    </span>
  );
};

export default memo(Tag);
