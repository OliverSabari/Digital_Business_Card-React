
import {faInstagram,faGithub,faDiscord} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footerlinks">
            <a 
             href="https://www.instagram.com/oliver_sabari/"
             target="_blank"
             rel="noopener noreferrer"
            >
            <FontAwesomeIcon 
            icon={faInstagram}
            />
            </a>
            <a 
             href="https://github.com/OliverSabari"
             target="_blank"
             rel="noopener noreferrer"
            >
             <FontAwesomeIcon 
            icon={faGithub}
            />
            </a>
            <a 
             href="https://discordapp.com/users/868888604695490621"
             target="_blank"
             rel="noopener noreferrer"
            >
             <FontAwesomeIcon 
            icon={faDiscord}
            />
            </a>
        </div>
    )
}

export default Footer