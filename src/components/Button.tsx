import { FC, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;  // New prop for accessibility
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'button', href, className, disabled = false, ariaLabel }) => {
    const baseClasses = "rounded-lg px-6 py-2 transition-colors duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 font-semibold";

    // Primary button styles
    const primaryClasses = "bg-button text-buttonText hover:bg-secondary hover:text-buttonText";

    // Dark mode styles with improved readability for text
    const darkModePrimaryClasses = "dark:bg-dark-primary dark:text-black dark:hover:bg-dark-secondary dark:hover:text-dark-buttonText";

    // Disabled styles
    const disabledClasses = "opacity-50 cursor-not-allowed";

    const combinedClasses = `${baseClasses} ${primaryClasses} ${darkModePrimaryClasses} ${className} ${disabled ? disabledClasses : ''}`;

    // If the button is a link
    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                aria-label={ariaLabel}  // Provide an accessible name for links
                {...(disabled && { 'aria-disabled': true })}
            >
                {children}
            </a>
        );
    }

    // Regular button element
    return (
        <button
            type={type}
            onClick={onClick}
            className={combinedClasses}
            disabled={disabled}
            aria-label={ariaLabel}  // Provide an accessible name for buttons
        >
            {children}
        </button>
    );
};

export default Button;
