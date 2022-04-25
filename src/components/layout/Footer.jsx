import { SiReact } from 'react-icons/si'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/fontawesome-free-solid'

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-6 bg-gray-700
    text-primary-content footer-center">
      <div>
      <FontAwesomeIcon icon={faSun} style={{'animation': 'spin 6s infinite linear', 'fontSize': '20px'}} />
        <p>Copyright &copy; {footerYear} All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
