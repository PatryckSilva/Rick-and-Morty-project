interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className="loader3">
      <div className={"circle1 " + className}></div>
      <div className={"circle1 " + className}></div>
      <div className={"circle1 " + className}></div>
      <div className={"circle1 " + className}></div>
      <div className={"circle1 " + className}></div>
    </div>
  );
};

export default Loader;
