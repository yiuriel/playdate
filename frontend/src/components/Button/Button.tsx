import classNames from "classNames";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  size = "medium",
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const classes = classNames(
    "font-bold py-2 px-4 rounded flex items-center gap-2",
    {
      "text-teal-400 hover:bg-teal-200 hover:bg-opacity-40":
        variant === "primary",
      "text-rose-400 hover:bg-rose-200 hover:bg-opacity-40":
        variant === "secondary",
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
