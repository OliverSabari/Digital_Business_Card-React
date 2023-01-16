
import { Button } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faLinkedin , faDiscord} from "@fortawesome/free-brands-svg-icons"

import profile_photo from "../image/profile_photo.jpg"

const Header = () => {
    return (
      <>
                <img
                    src={profile_photo}
                    alt="myimage"
                    width="80%"
                    height="300px"
                />

                <h2 className="name">
                    Sabari Hiswaran
                </h2>

                <h6 className="role">
                    Front End Developer
                </h6>

                <p className="place">
                    Chennai,TamilNadu
                </p>

                <div className="profiles">
                    <Button
                        href='https://discordapp.com/users/868888604695490621'
                        variant="none"
                        style={
                            {
                                backgroundColor:"white" ,
                                 color:"black" ,
                                  width: "115px"
                            }
                         }
                         target="_blank"
                    >
                    <FontAwesomeIcon
                    icon={faDiscord}
                    style={{marginRight : "10px"}}
                    />
                        Discord
                    </Button>

                    <Button
                        href='https://www.linkedin.com/in/sabari-hiswaran-4bba52166/'
                        variant="danger"
                        target="_blank"
                   >
                     <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{marginRight : "10px"}}
                    />
                        LinkedIn
                    </Button>

                </div>
            
                </>
    )
}

export default Header