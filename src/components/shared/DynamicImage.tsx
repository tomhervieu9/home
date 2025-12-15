type ImageProps = {
  src: string;
  alt: string;
  isPriority?: boolean;
};

// Displays a dynamic image that expands to fit the exact size of its parent
// while maintaining its aspect ratio.
export const DynamicImage = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      loading={props.isPriority ? "eager" : "lazy"}
      width="100px"
      height="100px"
      className="object-contain"
    />
  );
};
