type Props = {
  srcDoc: string;
};

const Iframe = ({ srcDoc }: Props) => {
  return (
    <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      width="100%"
      height="100%"
    ></iframe>
  );
};

export default Iframe;
