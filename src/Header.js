
import { Button } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Header = () => {
    return (
      <>
                <img
                    src="https://source.unsplash.com/random"
                    alt="myimage"
                    width="100%"
                    height="300px"
                />

                <h2 className="name">
                    Sabari Hiswara
                </h2>

                <h6 className="role">
                    Front End Developer
                </h6>

                <p className="place">
                    Chennai,TamilNadu
                </p>

                <div className="profiles">
                    <Button
                        href='https://example.com/'
                        style={
                            {
                                backgroundColor:"white" ,
                                 color:"black" ,
                                  width: "115px"
                            }
                         }
                    >
                    <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{marginRight : "10px"}}
                    />
                        Gmail
                    </Button>

                    <Button
                        href='https://www.linkedin.com/in/sabari-hiswaran-4bba52166/'
                        variant="danger"
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