type DebouncedResultProps = {
  result: string;
};

const DebouncedResult = ({ result }: DebouncedResultProps) => {
  return <p>Debounced Value: {result}</p>;
};

export default DebouncedResult;
