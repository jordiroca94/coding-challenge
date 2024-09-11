type Props = {
  children: React.ReactNode;
  className?: string;
};

// I created this ui component just in case that i needed to use it many times during the project
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`${className}
       px-4 lg:px-24 w-full flex justify-center`}
    >
      <div className="max-w-[1600px] w-full">{children}</div>
    </div>
  );
};

export default Container;
