import hostImage from "@home/assets/portfolio-shot.png";
import { DynamicImage } from "@home/components/shared/DynamicImage";

export const Host = () => {
  return (
    <DynamicImage src={hostImage} alt="Profile Picture" />
  );
};
