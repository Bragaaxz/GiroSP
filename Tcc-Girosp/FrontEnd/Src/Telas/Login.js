import React, { useState, useEffect } from 'react';
import '../styles/style.css';

// Importando as imagens
import logoImg from '../assets/logo.png';
import emailIcon from '../assets/email-icon.png';
import cadeadoIcon from '../assets/cadeado.png';
import mostrarSenhaIcon from '../assets/mostrar-senha.png';
import esconderSenhaIcon from '../assets/esconder-senha.png';
import googleIcon from '../assets/google_logo_g_logo_icon_159348.webp';
import iosIcon from '../assets/ios-icon.png';
import acceptIcon from '../assets/accept-icon.png'; // NOVO ÍCONE ADICIONADO
import errorIcon from '../assets/error-icon.png';   // NOVO ÍCONE ADICIONADO

export default function Login() {
  const [currentView, setCurrentView] = useState('login');
  const [registerStep, setRegisterStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  
  // Timer de recuperação
  const [countdown, setCountdown] = useState(30);

  // Estado unificado para todos os campos do formulário
  const [formData, setFormData] = useState({
    loginEmail: '', loginPassword: '',
    recoverEmail: '', recoverOtp: '',
    name: '', nickname: '', dob: '',
    region: '', contact: '', otp: '',
    username: '', password: '', confirmPassword: '', terms: false
  });

  // Estado para guardar quais campos estão com erro
  const [errors, setErrors] = useState({});
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interestsList = [
    'Museus & Arte', 'Gastronomia SP', 'Teatro & Espetáculos', 
    'Feiras de Rua', 'Shows Ao Vivo', 'Esporte', 
    'Bares & Pubs', 'Rolês Noturnos'
  ];

  // Regras de Senha em Tempo Real
  const passRules = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password)
  };

  // Efeito do Temporizador (Timer)
  useEffect(() => {
    let timer;
    if (currentView === 'recover2' && countdown > 0) {
      timer = setInterval(() => setCountdown(c => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [currentView, countdown]);

  // Função para atualizar os campos de texto
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false }); // Remove o erro ao digitar
  };

  // Função para máscara de Data (DD/MM/AAAA)
  const handleDateChange = (e) => {
    let val = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (val.length > 2) val = val.substring(0, 2) + '/' + val.substring(2);
    if (val.length > 5) val = val.substring(0, 5) + '/' + val.substring(5, 9);
    handleChange('dob', val);
  };

  // Validação dinâmica antes de avançar de tela
  const validateAndProceed = (nextAction) => {
    let newErrors = {};
    let isValid = true;

    if (currentView === 'login') {
      if (!formData.loginEmail) newErrors.loginEmail = true;
      if (!formData.loginPassword) newErrors.loginPassword = true;
    } else if (currentView === 'recover1') {
      if (!formData.recoverEmail) newErrors.recoverEmail = true;
    } else if (currentView === 'recover2') {
      if (!formData.recoverOtp) newErrors.recoverOtp = true;
    } else if (currentView === 'register') {
      if (registerStep === 1) {
        if (!formData.name) newErrors.name = true;
        if (!formData.nickname) newErrors.nickname = true;
        if (formData.dob.length !== 10) newErrors.dob = true;
      }
      if (registerStep === 2) {
        if (!formData.region) newErrors.region = true;
      }
      if (registerStep === 3) {
        if (!formData.contact) newErrors.contact = true;
      }
      if (registerStep === 4) {
        if (!formData.otp) newErrors.otp = true;
      }
      if (registerStep === 5) {
        if (!formData.username) newErrors.username = true;
        if (!passRules.length || !passRules.uppercase || !passRules.number || !passRules.special) newErrors.password = true;
        if (!formData.confirmPassword || formData.password !== formData.confirmPassword) newErrors.confirmPassword = true;
        if (!formData.terms) newErrors.terms = true;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    if (isValid) nextAction();
  };

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Botão de voltar para o Início
  const handleGoHome = () => {
    setCurrentView('login');
    setRegisterStep(1);
    setErrors({});
  };

  return (
    <div className="app-container">
      {/* Botão Voltar (Canto Superior Esquerdo) */}
      {currentView !== 'login' && (
        <button className="back-home-btn" onClick={handleGoHome}>
          &#8592; Voltar
        </button>
      )}

      <div className="header">
        <img src={logoImg} alt="GIRO SP" className="logo-img" />
      </div>

      <div className="form-container">
        
        {/* ================= TELA DE LOGIN ================= */}
        {currentView === 'login' && (
          <>
            <p className="subtitle">A cultura alimenta a quebrada</p>
            
            <div className="input-group">
              <span className="input-icon"><img src={emailIcon} alt="Email" className="custom-icon" /></span>
              <input 
                type="email" 
                placeholder="email" 
                className={errors.loginEmail ? 'input-error' : ''}
                value={formData.loginEmail}
                onChange={(e) => handleChange('loginEmail', e.target.value)}
              />
            </div>
            
            <div className="input-group">
              <span className="input-icon"><img src={cadeadoIcon} alt="Senha" className="custom-icon" /></span>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="senha" 
                className={errors.loginPassword ? 'input-error' : ''}
                value={formData.loginPassword}
                onChange={(e) => handleChange('loginPassword', e.target.value)}
              />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                <img src={showPassword ? esconderSenhaIcon : mostrarSenhaIcon} alt="Toggle" className="custom-icon" />
              </button>
            </div>
            
            <p className="link-text forgot-password" onClick={() => setCurrentView('recover1')}>
              Esqueci minha senha
            </p>
            
            <button className="btn-primary" onClick={() => validateAndProceed(() => alert('Login!'))}>Entrar</button>

            <div className="social-login">
              <div className="divider">ou continuar com</div>
              <div className="social-icons">
                <button><img src={googleIcon} alt="Google" className="social-icon-img" /></button>
                <button><img src={iosIcon} alt="Apple" className="social-icon-img" /></button>
              </div>
              <p className="footer-link">
                Ainda não tem conta? <span onClick={() => { setCurrentView('register'); setRegisterStep(1); setErrors({}); }}>Crie agora</span>
              </p>
            </div>
          </>
        )}

        {/* ================= RECUPERAÇÃO: ETAPA 1 ================= */}
        {currentView === 'recover1' && (
          <>
            <h3 className="subtitle-bold">Esqueceu sua senha?</h3>
            <p className="subtitle">Coloque o email do seu login que enviaremos o passo a passo.</p>
            
            <div className="input-group">
              <span className="input-icon"><img src={emailIcon} alt="Email" className="custom-icon" /></span>
              <input 
                type="email" 
                placeholder="email" 
                className={errors.recoverEmail ? 'input-error' : ''}
                value={formData.recoverEmail}
                onChange={(e) => handleChange('recoverEmail', e.target.value)}
              />
            </div>
            
            <button className="btn-primary" onClick={() => validateAndProceed(() => { setCurrentView('recover2'); setCountdown(30); })}>
              Enviar email
            </button>
          </>
        )}

        {/* ================= RECUPERAÇÃO: ETAPA 2 (COM TIMER) ================= */}
        {currentView === 'recover2' && (
          <>
            <h3 className="subtitle-bold">Esqueceu sua senha?</h3>
            <p className="subtitle">Coloque o código enviado para o seu email.</p>
            
            <div className="input-group">
              <span className="input-icon"><img src={emailIcon} alt="Email" className="custom-icon" /></span>
              <input type="email" value={formData.recoverEmail} readOnly />
            </div>
            
            <p className="timer-text">
              {countdown > 0 ? (
                <>Reenviar o código em {countdown}s</>
              ) : (
                <span className="resend-link" onClick={() => setCountdown(30)}>Reenviar agora</span>
              )}
            </p>

            <div className="input-group">
              <span className="input-icon"><img src={cadeadoIcon} alt="Código" className="custom-icon" /></span>
              <input 
                type="text" 
                placeholder="código" 
                className={errors.recoverOtp ? 'input-error' : ''}
                value={formData.recoverOtp}
                onChange={(e) => handleChange('recoverOtp', e.target.value)}
              />
            </div>
            
            <button className="btn-primary" onClick={() => validateAndProceed(() => setCurrentView('login'))}>Validar código</button>
          </>
        )}

        {/* ================= FLUXO DE CADASTRO ================= */}
        {currentView === 'register' && (
          <>
            {registerStep === 1 && (
              <>
                <p className="subtitle-bold">Dados Pessoais</p>
                <div className="input-group"><input type="text" placeholder="Nome completo" className={errors.name ? 'input-error' : ''} value={formData.name} onChange={(e) => handleChange('name', e.target.value)} /></div>
                <div className="input-group"><input type="text" placeholder="Apelido" className={errors.nickname ? 'input-error' : ''} value={formData.nickname} onChange={(e) => handleChange('nickname', e.target.value)} /></div>
                <div className="input-group"><input type="text" placeholder="DD/MM/AAAA" className={errors.dob ? 'input-error' : ''} value={formData.dob} onChange={handleDateChange} maxLength="10" /></div>
                <button className="btn-primary" onClick={() => validateAndProceed(() => setRegisterStep(2))}>Próximo</button>
              </>
            )}

            {registerStep === 2 && (
              <>
                <p className="subtitle-bold">Zona onde mora</p>
                <div className="input-group">
                  <select 
                    className={errors.region ? 'input-error' : (formData.region === '' ? 'placeholder-select' : '')} 
                    value={formData.region} 
                    onChange={(e) => handleChange('region', e.target.value)}
                  >
                    <option value="" disabled hidden>Escolha</option>
                    <option value="Leste">Leste</option>
                    <option value="Oeste">Oeste</option>
                    <option value="Norte">Norte</option>
                    <option value="Sul">Sul</option>
                    <option value="Centro">Centro</option>
                  </select>
                </div>
                <div className="button-row">
                  <button className="btn-secondary" onClick={() => setRegisterStep(1)}>Anterior</button>
                  <button className="btn-secondary" onClick={() => validateAndProceed(() => setRegisterStep(3))}>Próximo</button>
                </div>
              </>
            )}

            {registerStep === 3 && (
              <>
                <p className="subtitle-bold">Crie sua conta utilizando o Email ou o celular</p>
                <div className="input-group">
                  <span className="input-icon"><img src={emailIcon} alt="Contato" className="custom-icon" /></span>
                  <input type="text" placeholder="Email ou celular" className={errors.contact ? 'input-error' : ''} value={formData.contact} onChange={(e) => handleChange('contact', e.target.value)} />
                </div>
                <div className="button-row">
                  <button className="btn-secondary" onClick={() => setRegisterStep(2)}>Anterior</button>
                  <button className="btn-secondary" onClick={() => validateAndProceed(() => setRegisterStep(4))}>Confirmar</button>
                </div>
              </>
            )}

            {registerStep === 4 && (
              <>
                <p className="subtitle">O código foi enviado para:<br/><strong>{formData.contact}</strong></p>
                <div className="input-group">
                  <span className="input-icon"><img src={cadeadoIcon} alt="Código" className="custom-icon" /></span>
                  <input type="text" placeholder="código" className={errors.otp ? 'input-error' : ''} value={formData.otp} onChange={(e) => handleChange('otp', e.target.value)} />
                </div>
                <div className="button-row">
                  <button className="btn-secondary" onClick={() => setRegisterStep(3)}>Anterior</button>
                  <button className="btn-secondary" onClick={() => validateAndProceed(() => setRegisterStep(5))}>Confirmar</button>
                </div>
              </>
            )}

            {registerStep === 5 && (
              <>
                <p className="subtitle-bold">Defina suas credenciais</p>
                <div className="input-group">
                  <input type="text" placeholder="Username" className={errors.username ? 'input-error' : ''} value={formData.username} onChange={(e) => handleChange('username', e.target.value)} />
                </div>
                
                <div className="input-group" style={{marginBottom: '5px'}}>
                  <span className="input-icon"><img src={cadeadoIcon} alt="Senha" className="custom-icon" /></span>
                  <input type={showPassword ? "text" : "password"} placeholder="Senha" className={errors.password ? 'input-error' : ''} value={formData.password} onChange={(e) => handleChange('password', e.target.value)} />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    <img src={showPassword ? esconderSenhaIcon : mostrarSenhaIcon} alt="Toggle" className="custom-icon" />
                  </button>
                </div>
                
                <ul className="password-rules">
                  <li style={{color: 'var(--primary-color)'}}>A senha deve conter:</li>
                  <li>
                    <img src={passRules.length ? acceptIcon : errorIcon} alt="status" className="rule-icon" /> 
                    no mínimo 8 caracteres
                  </li>
                  <li>
                    <img src={passRules.uppercase ? acceptIcon : errorIcon} alt="status" className="rule-icon" /> 
                    uma letra maiúscula
                  </li>
                  <li>
                    <img src={passRules.number ? acceptIcon : errorIcon} alt="status" className="rule-icon" /> 
                    um número
                  </li>
                  <li>
                    <img src={passRules.special ? acceptIcon : errorIcon} alt="status" className="rule-icon" /> 
                    um caractere especial (@, #, $)
                  </li>
                </ul>

                <div className="input-group">
                  <span className="input-icon"><img src={cadeadoIcon} alt="Senha" className="custom-icon" /></span>
                  <input type="password" placeholder="Confirmar senha" className={errors.confirmPassword ? 'input-error' : ''} value={formData.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} />
                </div>
                
                <label className={`checkbox-group ${errors.terms ? 'error-text' : ''}`}>
                  <input type="checkbox" checked={formData.terms} onChange={(e) => handleChange('terms', e.target.checked)} />
                  <span>Li e aceito os <a href="#">Termos de Uso</a> e <a href="#">Política</a></span>
                </label>

                <div className="button-row">
                  <button className="btn-secondary" onClick={() => setRegisterStep(4)}>Anterior</button>
                  <button className="btn-primary" onClick={() => validateAndProceed(() => setRegisterStep(6))}>Criar Conta</button>
                </div>
              </>
            )}

            {registerStep === 6 && (
              <>
                <p className="subtitle">Escolha pelo menos 2 interesses para personalizar seu feed.</p>
                
                <div className="interests-grid">
                  {interestsList.map(item => (
                    <button 
                      key={item}
                      className={`interest-chip ${selectedInterests.includes(item) ? 'selected' : ''}`}
                      onClick={() => toggleInterest(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button 
                  className="btn-primary" 
                  disabled={selectedInterests.length < 2}
                  onClick={() => alert('Cadastro Finalizado com Sucesso!')}
                >
                  Finalizar
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}