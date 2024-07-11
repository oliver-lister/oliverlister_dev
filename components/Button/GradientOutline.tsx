type GradientOutlineProps = {
  children: React.ReactNode;
};

const GradientOutline: React.FC<GradientOutlineProps> = ({ children }) => {
  return (
    <>
      <span className="w-full h-full bg-gradient group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative flex items-center gap-2 py-2 px-3 transition-all ease-out text-secondary bg-primary dark:bg-primary-400 rounded-md group-hover:bg-opacity-0 duration-400">
        {children}
      </span>
    </>
  );
};

export default GradientOutline;
