import SocialNetworkContainer from './SocialNetworkContainer'
import InformationContainer from './InformationContainer'

import Avatar from '../img/perfil.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Junia Camargo" />
      <h2 className="title">Junia Camargo</h2>
      <h3 className="sub-title">Estudante de <br></br>Engenharia de Computação</h3>

      <SocialNetworkContainer />
      <InformationContainer />
      <a href="Curriculo-2023.pdf" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar