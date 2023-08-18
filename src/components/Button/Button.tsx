import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

/**
 * Button properties.
 *
 * @typedef {Object} ButtonProps
 *
 * @property {string} label - Label to display on the button.
 * @property {('primary' | 'secondary')} [variant='primary'] - Button variant. Defaults to 'primary'.
 * @property {() => void} [onClick] - Click event handler for the button.
 * @property {string} [className] - Additional CSS classes for the button.
 */
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Allow two variants of the button
  onClick?: () => void; // Optional click handler
  className?: string; // Allow additional classes for more customization
  loading?: boolean;
}

/**
 * Button component.
 *
 * @param {ButtonProps} props - Properties passed to the component.
 *
 * @returns {React.FC<ButtonProps>} Button element.
 */
const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  className,
  loading,
}) => {
  // Determine button style based on the variant
  const baseStyle = "py-2 px-4 rounded";
  const primaryStyle = "bg-blue-500 text-white hover:bg-blue-600";
  const secondaryStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  const style = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button className={`${baseStyle} ${style} ${className}`} onClick={onClick}>
      {loading ? (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faCircleNotch} spin />
          <span className="ml-2">Loading...</span>
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default Button;
