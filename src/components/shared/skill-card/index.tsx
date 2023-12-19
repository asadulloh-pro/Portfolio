import Image from 'next/image';
import { FC, memo } from 'react';

type SkillCardType = {
  icon: string;
  title: string;
  text: string;
};

const SkillCard: FC<SkillCardType> = ({ icon, title, text }) => {
  return (
    <div className="p-4 border border-addition rounded text-primary h-max">
      <div>
        <Image
          src={icon}
          width={100}
          height={100}
          alt="logo"
          className="w-[6.25rem] h-[6.25rem]"
        />
      </div>
      <p className="text-bold text-[1.5rem] mt-[0.75rem]">{title}</p>
      <p className="opacity-[0.5]">{text}</p>
    </div>
  );
};

export default memo(SkillCard);
