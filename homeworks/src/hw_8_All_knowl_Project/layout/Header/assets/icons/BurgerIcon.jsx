import style from'./Icons.module.css';

export const BurgerIcon = () => {
    return (
        <svg className={`${style.icon}`} width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" fill="#E8E8E8" />
                    </svg>
    )
}