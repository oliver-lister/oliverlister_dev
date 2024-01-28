import {
  UilGithub,
  UilFileDownloadAlt,
  UilLinkedin,
  UilMessage,
  UilAdjustHalf,
  UilAngleRightB,
  UilSpinnerAlt,
  UilBrowser,
} from "@iconscout/react-unicons";

type IconProps = {
  icon:
    | "linkedin"
    | "github"
    | "contact"
    | "filedownload"
    | "theme"
    | "arrow"
    | "spinner"
    | "browser";
  size?: string;
  className?: string;
};

export default function Icon({ icon, size, className }: IconProps) {
  const iconComponents = {
    linkedin: <UilLinkedin size={size} className={className} />,
    github: <UilGithub size={size} className={className} />,
    contact: <UilMessage size={size} className={className} />,
    filedownload: <UilFileDownloadAlt size={size} className={className} />,
    theme: <UilAdjustHalf size={size} className={className} />,
    arrow: <UilAngleRightB size={size} className={className} />,
    spinner: <UilSpinnerAlt size={size} className={className} />,
    browser: <UilBrowser size={size} className={className} />,
  };
  const selectedIcon = iconComponents[icon];

  if (!selectedIcon) {
    return null;
  }

  return selectedIcon;
}
