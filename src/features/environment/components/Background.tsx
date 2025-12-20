import { cn } from "@home/utils/css/classNames";
import LiveWallpaper from "./LiveWallpaper";

export const Background = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "absolute inset-0 -z-10")}>
      <LiveWallpaper
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
    </div>
  );
};
