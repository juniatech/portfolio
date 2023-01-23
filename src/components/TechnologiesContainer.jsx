    import '../styles/components/technologiescontainer.sass'
  
  const technologies = [
    { name: "O Caminho Para a Certificação CTFL - DIO"},
    { name: "Automação de Testes com Cypress Back-end - Compass.UOL"},
    { name: "Formação Carreira QA: processos e automação de testes - Alura"},
    { name: "Formação JavaScript para back-end - Alura"},
    { name: "Quality Assurance: plano de testes e gestão de bugs - Alura"},
    { name: "Basecamp - Engenharia de Software - 42 São Paulo"},
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Meus últimos cursos finalizados</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
          <a href="https://br.linkedin.com/in/juniatech#:~:text=Licen%C3%A7as%20e%20certificados" target="_blank" className="btn">
            Ver todos os certificados
          </a>
        </div>
      </section>


    );
  };
  
  export default TechnologiesContainer;