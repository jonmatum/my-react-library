import React from 'react';

// Define Button props type
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary'; // Allow two variants of the button
  onClick?: () => void;  // Optional click handler
  className?: string;    // Allow additional classes for more customization
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary',
  onClick,
  className
}) => {
  // Determine button style based on the variant
  const baseStyle = 'py-2 px-4 rounded';
  const primaryStyle = 'bg-blue-500 text-white hover:bg-blue-600';
  const secondaryStyle = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button 
      className={`${baseStyle} ${style} ${className}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
