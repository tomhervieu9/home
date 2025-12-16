type ImageProps = {
  src: string;
  alt: string;
  isPriority?: boolean;
};

// Displays a dynamic image that expands to fit the exact size of its parent
// while maintaining its aspect ratio.
export const ContainedImage = (props: ImageProps) => {
  return (
    <div className="relative h-full w-full">
      <img
        src={props.src}
        alt={props.alt}
        loading={props.isPriority ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  );
};
