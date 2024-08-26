import { FC, ReactNode } from 'react';

interface GhostButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    className?: string;
    disabled?: boolean;
}

const GhostButton: FC<GhostButtonProps> = ({ children, onClick, type = 'button', href, className, disabled = false }) => {
    const baseClasses = "rounded-lg px-6 py-2 transition-colors duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2";

    // Ghost button styles
    const ghostClasses = "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white";

    // Dark mode styles
    const darkModeGhostClasses = "dark:bg-transparent dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary dark:hover:text-white dark:focus:ring-dark-primary";

    // Disabled styles
    const disabledClasses = "opacity-50 cursor-not-allowed";

    const combinedClasses = `${baseClasses} ${ghostClasses} ${darkModeGhostClasses} ${className} ${disabled ? disabledClasses : ''}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...(disabled && { 'aria-disabled': true })}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={combinedClasses}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default GhostButton;
