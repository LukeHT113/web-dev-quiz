import whiteLogo from "../assets/whiteLogo.png"
import blackLogo from "../assets/logo.png"

interface IProps {
  theme: 'light' | 'dark'
}

export default function Footer({ theme }: IProps) {
  return (
    <footer className="footer">
      <a target="_blank" href="https://lukehtalling.com/"><img className="footer-logo" src={theme == 'dark' ? whiteLogo : blackLogo}></img></a>
      <small>Created by <a target="_blank" href="https://lukehtalling.com/">LHT</a></small>
    </footer>
  )
}
