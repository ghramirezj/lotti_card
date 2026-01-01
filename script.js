// ========== MÓDULO DE CONFIGURACIÓN ==========
const CONFIG = {
  maps: {
    url: 'https://maps.app.goo.gl/wFr2g9bg7nPz3uSV6',
  },
  whatsapp: {
    phone: '5491122571534', // Reemplazar con el número real (código país + área + número)
    message: '¡Hola! Confirmo mi asistencia al cumpleaños de Lotti',
  },
};

// ========== MÓDULO DE UTILIDADES ==========
const Utils = {
  encodeMessage: (message) => encodeURIComponent(message),

  generateMapsUrl: (url) => {
    return url;
  },

  generateWhatsAppUrl: (phone, message) => {
    const encodedMessage = Utils.encodeMessage(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },
};

// ========== MÓDULO DE EVENTOS ==========
const EventHandlers = {
  handleMapsClick: (e) => {
    e.preventDefault();
    const url = Utils.generateMapsUrl(CONFIG.maps.url);
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  handleWhatsAppClick: (e) => {
    e.preventDefault();
    const url = Utils.generateWhatsAppUrl(
      CONFIG.whatsapp.phone,
      CONFIG.whatsapp.message,
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  },
};

// ========== INICIALIZACIÓN ==========
const init = () => {
  const btnMaps = document.getElementById('btnMaps');
  const btnWhatsapp = document.getElementById('btnWhatsapp');

  if (btnMaps) {
    btnMaps.addEventListener('click', EventHandlers.handleMapsClick);
  }

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener(
      'click',
      EventHandlers.handleWhatsAppClick,
    );
  }
};

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
