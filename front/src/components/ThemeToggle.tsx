import { use } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
        onClick={toggleTheme}
        style={{
            marginTop: '1rem',
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: 'var(--accent-color)',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
        }}
        >
        </button>
    )
}