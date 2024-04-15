import { Link } from 'react-router-dom'
import logoDark from '../assets/logoDark.png'
import logoLight from '../assets/logoLight.png'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

interface Props {
  theme: string,
  switchTheme: () => void
}

export default function Header({ theme, switchTheme }: Props) {
  return (
    <header className="header">
      <Link to={'/'} className='header-logo'>
        <img src={theme == 'dark' ? logoDark : logoLight} className='header-img' />
        <h1 className="header-heading">Web Dev Quizzes</h1>
      </Link>
      <button onClick={switchTheme} className='theme-btn'>{theme === 'light' ? <FaMoon /> : <MdSunny />}</button>
    </header>
  )
}
