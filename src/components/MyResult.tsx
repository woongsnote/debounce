type MyResultProps = {
  result: string;
};

const MyResult = ({ result }: MyResultProps) => {
  return <p>Debounced Value: {result}</p>;
};

export default MyResult;
