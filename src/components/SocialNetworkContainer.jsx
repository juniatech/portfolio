import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworkcontainer.sass'

const socialNetworks = [
    { name: "linkedin", icon:<FaLinkedinIn />, text_link:"https://www.linkedin.com/in/juniatech/"},
    { name: "github", icon:<FaGithub />, text_link:"https://github.com/juniatech"},
    { name: "instagram", icon: <FaInstagram />, text_link:"https://www.instagram.com/juniacamargo_/"}
]

const SocialNetworkContainer = () => {
    return ( <section id="social-networks">
      {socialNetworks.map((network)=> (
        <a href={network.text_link}  target="_blank"  className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}


export default SocialNetworkContainer;