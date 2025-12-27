import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  const waNumber = "5585994059821";
  const message = encodeURIComponent("Olá! Vi o site da Pedrosa & Peixoto e gostaria de falar com um especialista sobre a regularização do passivo tributário da minha empresa.");
  const url = `https://wa.me/${waNumber}?text=${message}`;

  const handleTrack = () => {
    // Fix: Cast window to any to access gtag and fbq tracking functions added by external scripts
    const win = window as any;
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'contact', {
        'event_category': 'whatsapp',
        'event_label': 'floating_button'
      });
    }
    if (typeof win.fbq === 'function') {
      win.fbq('track', 'Contact');
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTrack}
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold py-2 px-3 rounded-lg shadow-xl opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
        Falar com especialista
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45"></div>
      </div>
      <svg 
        viewBox="0 0 24 24" 
        width="30" 
        height="30" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.895-5.335 11.898-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;