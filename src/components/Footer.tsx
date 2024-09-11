const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-4 bg-primary text-white">
      <div className="text-base">&copy; {year} By Jordi Roca</div>
    </div>
  );
};

export default Footer;
