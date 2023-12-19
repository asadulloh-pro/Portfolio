const ContactForm = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center gap-[4rem] mt-[148px]">
      <div>
        <h2 className="text-[3rem] text-addition">
          Any questions ? <br /> I`m ready to answer!
        </h2>
        <p className="text-[2rem] text-primary">
          {` Let's get this conversation started. Tell us a bit about yourself,
              and we'll get in touch as soon as we can.`}
        </p>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <input
          className="py-[0.5rem] text-[1.5rem] px-[1rem] bg-main text-primary focus:border-addition border border-primary outline-none rounded-[0.5rem]"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="py-[0.5rem] text-[1.5rem] px-[1rem] bg-main text-primary focus:border-addition border border-primary outline-none rounded-[0.5rem]"
          type="email"
          placeholder="Email"
        />
        <input
          className="py-[0.5rem] text-[1.5rem] px-[1rem] bg-main text-primary focus:border-addition border border-primary outline-none rounded-[0.5rem]"
          type="tel"
          placeholder="Phone"
        />
        <button
          type="submit"
          className="py-[0.5rem] text-[1.5rem] px-[1rem] text-main  font-[600] bg-addition rounded-[0.2rem] border border-[transparent] hover:shadow-hovered_primary"
        >
          Get a quote
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
