import { SiNodedotjs } from 'react-icons/si'

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700
    text-primary-content footer-center">
      <div>
        <SiNodedotjs className='text-2xl'/>
        <p>Copyright &copy; {footerYear} All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
