const WorkLine = () => {
  return (
    <div className="container mx-auto grid gap-[4rem]">
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex gap-[1rem] ">
          <div className="sticky top-[6.25rem] flex flex-col h-max gap-[1rem] rotate-[6deg]">
            <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
              <img src="/mediapark.svg" alt="image" width={200} height={180} />
            </picture>
            <p className="text-addition text-center">July 2023 - Present</p>
          </div>
        </div>
        <div className="col-span-2 min-h-[25rem]">
          <p className="text-primary text-[3rem]">Frontend Team Lead</p>
          <p className="text-background text-[1.5rem] opacity-[0.7]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatem enim nam. Quas beatae voluptatum, recusandae veritatis
            possimus a est perferendis. Molestias, nulla voluptas commodi
            sapiente earum eligendi. Veniam, aspernatur?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 min-h-[25rem]">
          <p className="text-primary text-[3rem]">Frontend Team Lead</p>
          <p className="text-primary text-[1.5rem] opacity-[0.7]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatem enim nam. Quas beatae voluptatum, recusandae veritatis
            possimus a est perferendis. Molestias, nulla voluptas commodi
            sapiente earum eligendi. Veniam, aspernatur?
          </p>
        </div>
        <div className="col-span-1 flex justify-end gap-[1rem]">
          <div className="sticky top-[6.25rem] h-max flex flex-col gap-[1rem] rotate-[-6deg]">
            <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
              <img src="/natija.svg" alt="image" width={200} height={180} />
            </picture>
            <p className="text-addition text-center">
              September 2022 - October 2023
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="col-span-1 flex gap-[1rem]">
          <div className="sticky top-[6.25rem] h-max flex flex-col gap-[1rem] rotate-[6deg]">
            <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
              <img src="/exadot.svg" alt="image" width={200} height={180} />
            </picture>
            <p className="text-addition text-center">
              March 2022 - September 2022
            </p>
          </div>
        </div>
        <div className="col-span-2 min-h-[25rem]">
          <p className="text-primary text-[3rem]">Frontend Engineer</p>
          <p className="text-primary text-[1.5rem] opacity-[0.7]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatem enim nam. Quas beatae voluptatum, recusandae veritatis
            possimus a est perferendis. Molestias, nulla voluptas commodi
            sapiente earum eligendi. Veniam, aspernatur?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 min-h-[25rem]">
          <p className="text-primary text-[3rem]">Frontend Engineer</p>
          <p className="text-primary text-[1.5rem] opacity-[0.7]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatem enim nam. Quas beatae voluptatum, recusandae veritatis
            possimus a est perferendis. Molestias, nulla voluptas commodi
            sapiente earum eligendi. Veniam, aspernatur?
          </p>
        </div>
        <div className="col-span-1 flex justify-end gap-[1rem]">
          <div className="sticky top-[6.25rem] h-max flex flex-col gap-[1rem] rotate-[-6deg]">
            <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
              <img src="/soffit.svg" alt="image" width={200} height={180} />
            </picture>
            <p className="text-addition text-center">July 2021 - March 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLine;
