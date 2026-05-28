// ==========================================
// 1. НАВИГАЦИЯ И ТАБЫ (ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ)
// ==========================================

function toggleLegalTab(evt, tabId) {
  const panes = document.querySelectorAll('.legal-tab-content');
  const buttons = document.querySelectorAll('.tab-toggle-btn');
  panes.forEach(p => p.classList.remove('active'));
  buttons.forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

function goToLegalTab(tabId) {
  const target = document.getElementById('legal-docs');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  const index = tabId === 'tab-privacy' ? 0 : 1;
  const buttons = document.querySelectorAll('.tab-toggle-btn');
  if (buttons[index]) {
    buttons[index].click();
  }
}

// ==========================================
// 2. ИНТЕРАКТИВ И ВАЛИДАЦИЯ (ЗАПУСКАЕТСЯ ПОСЛЕ ЗАГРУЗКИ DOM)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  
  // КНОПКА HERO: Плавный скролл к контактам
  const heroButton = document.getElementById('hero-action');
  const contactsSection = document.getElementById('contacts');
  
  if (heroButton && contactsSection) {
    heroButton.addEventListener('click', () => {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ВАЛИДАЦИЯ ФОРМЫ ОБРАТНОЙ СВЯЗИ
  const form = document.getElementById('b2b-contact-form');
  if (!form) return; 

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Блокируем реальную отправку

    const inputs = this.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.style.borderColor = '');

    let isValid = true;

    // 1. Название компании
    const companyName = document.getElementById('company_name');
    if (!companyName.value.trim()) {
      companyName.style.borderColor = '#d32f2f';
      isValid = false;
    }

    // 2. Контактное лицо
    const contactPerson = document.getElementById('contact_person');
    if (!contactPerson.value.trim()) {
      contactPerson.style.borderColor = '#d32f2f';
      isValid = false;
    }

    // 3. Email
    const email = document.getElementById('user_email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.style.borderColor = '#d32f2f';
      isValid = false;
    }

    // 4. Формат сотрудничества
    const cooperation = document.getElementById('cooperation_format');
    if (!cooperation.value) {
      cooperation.style.borderColor = '#d32f2f';
      isValid = false;
    }

    // 5. Сообщение
    const message = document.getElementById('user_message');
    if (!message.value.trim()) {
      message.style.borderColor = '#d32f2f';
      isValid = false;
    }

    // 6. Чекбокс
    const privacy = document.getElementById('privacy_agreement');
    if (!privacy.checked) {
      privacy.style.outline = '2px solid #d32f2f';
      isValid = false;
    } else {
      privacy.style.outline = '';
    }

    if (isValid) {
      const successMsg = document.getElementById('form-success-msg');
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      this.reset();
    }
  });

  // Живой сброс ошибок
  form.addEventListener('input', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      e.target.style.borderColor = '';
      if (e.target.type === 'checkbox') {
        e.target.style.outline = '';
      }
    }
  });
});