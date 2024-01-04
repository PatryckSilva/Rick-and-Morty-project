interface VideoProps {
  src: string;
  className?: any;
}

export const Video = ({ src, className }: VideoProps) => {
  return (
    <video autoPlay loop className={className}>
      <source src={src} />
    </video>
  );
};
