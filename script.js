function toggleLegalTab(event, tabId) {
  const contents = document.querySelectorAll('.legal-tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-toggle-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

function goToLegalTab(tabId) {
  const targetSection = document.getElementById('legal-docs');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  const contents = document.querySelectorAll('.legal-tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-toggle-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  const targetButton = document.querySelector(`[onclick*="${tabId}"]`);
  if (targetButton) {
    targetButton.classList.add('active');
  }
}

function openLegalModal(type) {
  const modal = document.getElementById(`modal-${type}`);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLegalModal(type) {
  const modal = document.getElementById(`modal-${type}`);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

window.addEventListener('click', function (e) {
  const modals = document.querySelectorAll('.legal-modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('b2b-contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const fieldsToReset = form.querySelectorAll('input, select, textarea');
    fieldsToReset.forEach(field => {
      field.style.borderColor = '';
      field.style.outline = '';
    });

    const companyName = document.getElementById('company_name');
    if (!companyName.value.trim()) {
      companyName.style.borderColor = '#d32f2f';
      isValid = false;
    }

    const contactPerson = document.getElementById('contact_person');
    if (!contactPerson.value.trim()) {
      contactPerson.style.borderColor = '#d32f2f';
      isValid = false;
    }

    const email = document.getElementById('user_email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.style.borderColor = '#d32f2f';
      isValid = false;
    }

    const cooperation = document.getElementById('cooperation_format');
    if (!cooperation.value) {
      cooperation.style.borderColor = '#d32f2f';
      isValid = false;
    }

    const message = document.getElementById('user_message');
    if (!message.value.trim()) {
      message.style.borderColor = '#d32f2f';
      isValid = false;
    }

    const privacy = document.getElementById('privacy_agreement');
    if (!privacy.checked) {
      privacy.style.outline = '2px solid #d32f2f';
      isValid = false;
    }

    if (isValid) {
      const successMsg = document.getElementById('form-success-msg');
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    }
  });

  form.addEventListener('input', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      e.target.style.borderColor = '';
      e.target.style.outline = '';
    }
  });

  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const currentItem = this.parentElement;
      const isOpen = currentItem.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isOpen) {
        currentItem.classList.add('active');
      }
    });
  });

  const firstAccordion = document.querySelector('.accordion-item');
  if (firstAccordion) {
    firstAccordion.classList.add('active');
  }

// --- НАДЕЖНОЕ УПРАВЛЕНИЕ КУКИ-БАННЕРОМ НАПРЯМУЮ ---
  const cookieBanner = document.getElementById('cookie-notice-banner');
  const acceptBtn = document.getElementById('accept-cookie-btn');

  // Показываем баннер через 1 секунду в любом случае, если кнопка еще не нажата
  if (cookieBanner) {
    setTimeout(() => {
      cookieBanner.style.bottom = '0'; // Выплывает на экран
    }, 1000);
  }

  if (acceptBtn && cookieBanner) {
    acceptBtn.addEventListener('click', function () {
      cookieBanner.style.bottom = '-150px'; // Прячется обратно под экран
    });
  }
});