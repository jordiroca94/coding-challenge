type Props = {
  onclick: () => void;
};

const DownloadButton = ({ onclick }: Props) => {
  return (
    <button
      className={`rounded-md border text-primary border-primary px-3 py-1 hover:bg-primary hover:text-white`}
      onClick={onclick}
    >
      Download report
    </button>
  );
};

export default DownloadButton;
