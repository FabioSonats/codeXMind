import React from 'react';
import { Link } from 'react-router-dom';

/**
 * About Page Component
 * Information about CodeXMind and the creator
 */
export default function About() {
  const containerStyle = {
    maxWidth: '48rem',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#cbd5e1',
    marginBottom: '2rem',
  };

  const sectionStyle = {
    marginBottom: '3rem',
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  };

  const textStyle = {
    color: '#cbd5e1',
    lineHeight: '1.7',
    marginBottom: '1rem',
  };

  const listStyle = {
    color: '#cbd5e1',
    lineHeight: '1.7',
    paddingLeft: '1.5rem',
  };

  // const linkStyle = {
  //     color: '#22d3ee',
  //     textDecoration: 'none',
  // };

  const cardStyle = {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid #334155',
    marginBottom: '2rem',
  };

  const authorStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  };

  const avatarStyle = {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#06b6d4',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  };

  const authorInfoStyle = {
    flex: 1,
  };

  const authorNameStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.25rem',
  };

  const authorTitleStyle = {
    color: '#22d3ee',
    fontSize: '0.875rem',
  };

  const socialStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.875rem',
  };

  const ctaStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    padding: '2rem',
    borderRadius: '1rem',
    textAlign: 'center' as const,
    border: '1px solid #334155',
  };

  const ctaTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  };

  const ctaDescriptionStyle = {
    color: '#cbd5e1',
    marginBottom: '1.5rem',
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#06b6d4',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#22d3ee',
    border: '2px solid #22d3ee',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Sobre o CodeXMind</h1>
        <p style={subtitleStyle}>
          Uma plataforma dedicada ao aprendizado e desenvolvimento de software
        </p>
      </div>

      {/* Mission Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Nossa Missão</h2>
        <p style={textStyle}>
          O CodeXMind nasceu da paixão por compartilhar conhecimento e acelerar
          o aprendizado de desenvolvedores. Nossa missão é criar uma comunidade
          onde o conhecimento técnico seja acessível, prático e sempre
          atualizado.
        </p>
        <p style={textStyle}>
          Acreditamos que a programação é uma arte que pode ser dominada por
          qualquer pessoa com dedicação e os recursos certos. Por isso, criamos
          conteúdo que vai desde conceitos básicos até técnicas avançadas,
          sempre com foco na aplicação prática.
        </p>
      </section>

      {/* What We Offer Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>O que oferecemos</h2>
        <ul style={listStyle}>
          <li>
            <strong>Artigos Técnicos:</strong> Tutoriais profundos sobre
            programação, frameworks e melhores práticas
          </li>
          <li>
            <strong>Biblioteca de Recursos:</strong> Ebooks, cheatsheets e
            snippets organizados por linguagem e nível
          </li>
          <li>
            <strong>Conteúdo sobre IA:</strong> Recursos e tutoriais sobre
            inteligência artificial e automação
          </li>
          <li>
            <strong>Busca Inteligente:</strong> Encontre exatamente o que
            precisa com nossa ferramenta de busca avançada
          </li>
          <li>
            <strong>Conteúdo Gratuito:</strong> Todo o material é
            disponibilizado gratuitamente para a comunidade
          </li>
        </ul>
      </section>

      {/* Author Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Criado por Fábio Ferreira</h2>
        <div style={cardStyle}>
          <div style={authorStyle}>
            <div style={avatarStyle}>FF</div>
            <div style={authorInfoStyle}>
              <h3 style={authorNameStyle}>Fábio Ferreira</h3>
              <p style={authorTitleStyle}>
                Desenvolvedor Full-Stack & Criador de Conteúdo
              </p>
            </div>
          </div>
          <p style={textStyle}>
            Desenvolvedor apaixonado por tecnologia e educação, com experiência
            em desenvolvimento web, mobile e inteligência artificial. Criador do
            CodeXMind com o objetivo de democratizar o acesso ao conhecimento
            técnico de qualidade.
          </p>
          <p style={textStyle}>
            Especialista em React, Node.js, Python e tecnologias emergentes,
            sempre em busca de novas formas de compartilhar conhecimento e
            acelerar o aprendizado da comunidade de desenvolvedores.
          </p>
          <div style={socialStyle}>
            <a
              href='https://github.com/FabioSonats'
              style={socialLinkStyle}
              target='_blank'
              rel='noopener noreferrer'
            >
              📱 GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/'
              style={socialLinkStyle}
              target='_blank'
              rel='noopener noreferrer'
            >
              💼 LinkedIn
            </a>
            <a
              href='https://fabiosonats.github.io/my-portifolio/'
              style={socialLinkStyle}
              target='_blank'
              rel='noopener noreferrer'
            >
              🌐 Portfolio
            </a>
            <a
              href='https://wa.me/5542991643802'
              style={socialLinkStyle}
              target='_blank'
              rel='noopener noreferrer'
            >
              📞 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Nossos Valores</h2>
        <ul style={listStyle}>
          <li>
            <strong>Qualidade:</strong> Todo conteúdo é revisado e testado antes
            da publicação
          </li>
          <li>
            <strong>Praticidade:</strong> Focamos em exemplos reais e aplicações
            práticas
          </li>
          <li>
            <strong>Acessibilidade:</strong> Conteúdo gratuito e acessível para
            todos
          </li>
          <li>
            <strong>Atualização:</strong> Mantemos o conteúdo sempre atualizado
            com as últimas tendências
          </li>
          <li>
            <strong>Comunidade:</strong> Valorizamos o feedback e a participação
            da comunidade
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={ctaStyle}>
        <h2 style={ctaTitleStyle}>Junte-se à nossa comunidade</h2>
        <p style={ctaDescriptionStyle}>
          Explore nosso conteúdo, compartilhe conhecimento e faça parte de uma
          comunidade que cresce aprendendo juntos.
        </p>
        <div style={buttonGroupStyle}>
          <Link to='/artigos' style={buttonStyle}>
            Explorar Artigos
          </Link>
          <Link to='/contato' style={secondaryButtonStyle}>
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
