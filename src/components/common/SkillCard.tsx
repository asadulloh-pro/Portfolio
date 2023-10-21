const SkillCard = () => {
  return (
    <div>
      <picture className="rotate-[6deg] shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max sticky top-[100px]">
        <img src="/react.svg" alt="image" width={150} height={150} />
      </picture>

      <picture className="rotate-[-6deg] shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max sticky top-[100px]">
        <img src="/next.svg" alt="image" width={150} height={150} />
      </picture>

      <picture className="rotate-[-14deg] shadow-hovered_default rounded-[1rem] overflow-hidden  w-max h-max sticky top-[100px]">
        <img
          src="/typescript.svg"
          alt="image"
          width={170}
          height={170}
          className=""
        />
      </picture>
    </div>
  );
};
