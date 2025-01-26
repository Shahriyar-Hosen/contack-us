const HomePage = () => {
  return (
    <div className="flex justify-start items-center w-full flex-col h-svh bg-background text-foreground">
      <div className="text-center py-[67px]">
        <h1 className="text-[81px] font-extrabold leading-[99.06px] tracking-[-3%]">
          Get in{" "}
          <span className="bg-gradient-to-r from-white from-10% via-secondary via-75% to-primary to-95% bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="text-[22px] font-medium leading-[26.63px] tracking-[-2%]">
          Contact the Hablu programmer team!
        </p>
      </div>
      <div className="w-full max-w-[1092px] mx-auto bg-[#FFFFFF0A] border-2 rounded-[20px] border-[#0A0D170D] h-[576px] relative">
        <div className="left-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-primary" />
        <div className="right-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
        <div className="left-0 bottom-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
      </div>
    </div>
  );
};

export default HomePage;
