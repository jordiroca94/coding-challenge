type Props = {
  children: React.ReactNode;
};

// I created this ui component just in case that i needed to use it many times during the project
const Grid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8">
      {children}
    </div>
  );
};

export default Grid;
