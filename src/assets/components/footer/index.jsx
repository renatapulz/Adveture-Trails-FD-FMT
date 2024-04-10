import "./style.css";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <footer>
            <div className="logo-footer"><Link to="/" className="link-menu">Adventure Trails FD</Link></div>
            <div>
                <a href="#">
                    <GitHubIcon className='links-redes-sociais' />
                </a>
                <a href="#">
                    <LinkedInIcon className='links-redes-sociais' />
                </a>
                <a href="#">
                    <InstagramIcon className='links-redes-sociais' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;

