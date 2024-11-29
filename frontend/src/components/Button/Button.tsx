import classNames from "classNames";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "primary" | "secondary";
export type ButtonContained = boolean;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  contained?: ButtonContained;
}

export const Button = ({
  size = "medium",
  variant = "primary",
  contained = false,
  className,
  ...props
}: ButtonProps) => {
  const classes = classNames(
    "font-bold py-2 px-4 rounded flex items-center gap-2",
    {
      "bg-teal-400 text-white hover:bg-teal-500":
        variant === "primary" && contained,
      "bg-rose-400 text-white hover:bg-rose-500":
        variant === "secondary" && contained,
      "text-teal-400 hover:bg-teal-200 hover:bg-opacity-40":
        variant === "primary" && !contained,
      "text-rose-400 hover:bg-rose-200 hover:bg-opacity-40":
        variant === "secondary" && !contained,
    },
    {
      "text-xs": size === "small",
      "text-sm": size === "medium",
      "text-base": size === "large",
    },
    className
  );

  return <button {...props} className={classes} />;
};
