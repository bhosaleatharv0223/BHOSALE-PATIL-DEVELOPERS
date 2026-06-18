export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919860810865?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noreferrer"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      style={{ background: "#25D366" }}
      title="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.38.67 4.6 1.83 6.5L3 29l6.73-1.77A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="white"/>
        <path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366"/>
      </svg>
    </a>
  );
}
