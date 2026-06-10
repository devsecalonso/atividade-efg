/* ═══════════════════════════════════════════
   PETIÇÃO RODEIO — main.js
   ═══════════════════════════════════════════ */

// CONFIGURAÇÃO: Se quiser enviar diretamente para um número específico,
// coloque o número com o código do país e DDD aqui (ex: "5511999999999").
// Deixe vazio "" para abrir a tela de escolha de contato do WhatsApp.
const WHATSAPP_NUMERO = "";

/**
 * Pré-visualiza uma foto num slot de grade (3 fotos com ela).
 * @param {HTMLInputElement} input
 */
function previewFoto(input) {
  const slot = input.closest('.photo-slot');
  if (!input.files || !input.files[0]) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    // Remove imagem anterior, se houver
    let img = slot.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      img.alt = 'Foto adicionada';
      slot.appendChild(img);
    }
    img.src = e.target.result;

    // Esconde placeholders
    slot.querySelectorAll('.ph-icon, .ph-text').forEach(el => {
      el.style.display = 'none';
    });
  };
  reader.readAsDataURL(input.files[0]);
}

/**
 * Pré-visualiza a foto grande (espaço vazio sem ela).
 * @param {HTMLInputElement} input
 */
function previewFotoArea(input) {
  const area = input.closest('.empty-photo-area');
  if (!input.files || !input.files[0]) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    let img = area.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      img.alt = 'Foto do grupo sem ela';
      area.appendChild(img);
    }
    img.src = e.target.result;

    // Esconde placeholders
    area.querySelectorAll('.ph-big-icon, .ph-text-area').forEach(el => {
      el.style.display = 'none';
    });
  };
  reader.readAsDataURL(input.files[0]);
}

/**
 * Exibe a mensagem de comemoração e redireciona para o WhatsApp.
 */
function showResult() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.querySelectorAll('input, textarea').forEach(el => {
      el.setAttribute('disabled', 'disabled');
    });
  }
  const msg = document.getElementById('result-msg');
  if (msg) {
    msg.style.display = 'block';
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const texto = encodeURIComponent("Oi! Vi a petição de vocês e a resposta é SIM! A Júlia pode ir ao rodeio com vocês! Divirtam-se e cuidem bem dela! 🤠🎉");
  
  let whatsappUrl = "";
  if (typeof WHATSAPP_NUMERO !== 'undefined' && WHATSAPP_NUMERO.trim() !== "") {
    // Envia direto para o número configurado (remove caracteres não-numéricos)
    whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO.replace(/\D/g, '')}&text=${texto}`;
  } else {
    // Abre a lista para selecionar o contato
    whatsappUrl = `https://api.whatsapp.com/send?text=${texto}`;
  }

  // Abre o WhatsApp em uma nova aba após 1 segundo
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 1000);
}

/**
 * Envia a mensagem do formulário para o WhatsApp (sem backend).
 */
function handleContactSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');
  if (!form) return;

  const nome = (form.querySelector('#nome')?.value || '').trim();
  const email = (form.querySelector('#email')?.value || '').trim();
  const mensagem = (form.querySelector('#mensagem')?.value || '').trim();

  const textoBase = `Oi! Vi a petição de vocês.\n\nNome: ${nome}\nE-mail: ${email}\n\nMensagem: ${mensagem}\n\nObrigado! 🤠`;
  const texto = encodeURIComponent(textoBase);

  let whatsappUrl = '';
  if (typeof WHATSAPP_NUMERO !== 'undefined' && WHATSAPP_NUMERO.trim() !== "") {
    whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO.replace(/\D/g, '')}&text=${texto}`;
  } else {
    whatsappUrl = `https://api.whatsapp.com/send?text=${texto}`;
  }

  // Feedback simples e prático: desabilita e abre WhatsApp
  form.querySelectorAll('input, textarea, button').forEach(el => {
    el.setAttribute('disabled', 'disabled');
  });

  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', handleContactSubmit);
});
