import classNames from "classnames";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

export const Button = ({
  size = "medium",
  className,
  ...props
}: ButtonProps) => {
  const classes = classNames(
    "font-bold py-2 px-4 rounded flex items-center gap-2 text-teal-400 hover:bg-opacity-20 hover:bg-teal-200",
    {
      "text-xs": size === "small",
      "text-sm": size === "medium",
      "text-base": size === "large",
    },
    className
  );

  return <button {...props} className={classes} />;
};
