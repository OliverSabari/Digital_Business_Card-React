
import {faTwitter,faFacebook,faInstagram,faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footerlinks">
            <a 
             href="https://github.com/OliverSabari"
             target="_blank"
             rel="noopener noreferrer"
            >
            <FontAwesomeIcon 
            icon={faTwitter}
            />
            </a>
            <a 
             href="https://github.com/OliverSabari"
             target="_blank"
             rel="noopener noreferrer"
            >
             <FontAwesomeIcon 
            icon={faFacebook}
            />
            </a>
            <a 
             href="https://github.com/OliverSabari"
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
        </div>
    )
}

export default Footer