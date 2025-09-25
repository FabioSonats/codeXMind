import React, { useState } from 'react';

/**
 * Contact Page Component
 * Contact form and information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  };

  const formStyle = {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '1rem',
    border: '1px solid #334155',
  };

  const formTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#cbd5e1',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#334155',
    border: '1px solid #475569',
    borderRadius: '0.5rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical' as const,
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#06b6d4',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const buttonDisabledStyle = {
    ...buttonStyle,
    backgroundColor: '#6b7280',
    cursor: 'not-allowed',
  };

  const successStyle = {
    backgroundColor: '#065f46',
    color: '#d1fae5',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    textAlign: 'center' as const,
  };

  const errorStyle = {
    backgroundColor: '#7f1d1d',
    color: '#fecaca',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    textAlign: 'center' as const,
  };

  const infoStyle = {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '1rem',
    border: '1px solid #334155',
  };

  const infoTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#334155',
    borderRadius: '0.5rem',
  };

  const contactIconStyle = {
    fontSize: '1.5rem',
  };

  const contactTextStyle = {
    color: '#cbd5e1',
  };

  const contactLinkStyle = {
    color: '#22d3ee',
    textDecoration: 'none',
  };

  const socialStyle = {
    marginTop: '2rem',
  };

  const socialTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '1rem',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    backgroundColor: '#334155',
    borderRadius: '0.5rem',
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '0.875rem',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Contato</h1>
        <p style={subtitleStyle}>
          Entre em contato conosco para dúvidas, sugestões ou colaborações
        </p>
      </div>

      <div style={gridStyle}>
        {/* Contact Form */}
        <div style={formStyle}>
          <h2 style={formTitleStyle}>Envie uma mensagem</h2>

          {submitStatus === 'success' && (
            <div style={successStyle}>
              ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={errorStyle}>
              ❌ Erro ao enviar mensagem. Tente novamente.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label htmlFor='name' style={labelStyle}>
                Nome *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder='Seu nome completo'
              />
            </div>

            <div style={formGroupStyle}>
              <label htmlFor='email' style={labelStyle}>
                E-mail *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder='seu@email.com'
              />
            </div>

            <div style={formGroupStyle}>
              <label htmlFor='subject' style={labelStyle}>
                Assunto *
              </label>
              <select
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                style={selectStyle}
              >
                <option value=''>Selecione um assunto</option>
                <option value='duvida'>Dúvida sobre conteúdo</option>
                <option value='sugestao'>Sugestão de artigo</option>
                <option value='colaboracao'>Colaboração</option>
                <option value='bug'>Reportar bug</option>
                <option value='outro'>Outro</option>
              </select>
            </div>

            <div style={formGroupStyle}>
              <label htmlFor='message' style={labelStyle}>
                Mensagem *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                style={textareaStyle}
                placeholder='Descreva sua mensagem aqui...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              style={isSubmitting ? buttonDisabledStyle : buttonStyle}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={infoStyle}>
          <h2 style={infoTitleStyle}>Informações de Contato</h2>

          <div style={contactItemStyle}>
            <span style={contactIconStyle}>📧</span>
            <div>
              <div style={contactTextStyle}>E-mail</div>
              <a href='mailto:contato@codexmind.com' style={contactLinkStyle}>
                contato@codexmind.com
              </a>
            </div>
          </div>

          <div style={contactItemStyle}>
            <span style={contactIconStyle}>⏰</span>
            <div>
              <div style={contactTextStyle}>Tempo de Resposta</div>
              <div style={contactTextStyle}>24-48 horas</div>
            </div>
          </div>

          <div style={contactItemStyle}>
            <span style={contactIconStyle}>🌍</span>
            <div>
              <div style={contactTextStyle}>Localização</div>
              <div style={contactTextStyle}>Brasil (GMT-3)</div>
            </div>
          </div>

          <div style={socialStyle}>
            <h3 style={socialTitleStyle}>Redes Sociais</h3>
            <div style={socialLinksStyle}>
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
        </div>
      </div>
    </div>
  );
}
