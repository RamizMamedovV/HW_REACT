import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

export function ThemeToggle() {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <div style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <button
                onClick={() => dispatch(toggleTheme())}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
            </button>
            <p>Текущая тема: {theme}</p>
        </div>
    );
}