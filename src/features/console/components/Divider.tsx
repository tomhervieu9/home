type DividerProps = {
  label: string;
};

// A divider for button entries
export const Divider = (props: DividerProps) => {
  return (
    <p className="wide:w-full tall:h-full text-label text-center font-semibold">
      {props.label}
    </p>
  );
};
