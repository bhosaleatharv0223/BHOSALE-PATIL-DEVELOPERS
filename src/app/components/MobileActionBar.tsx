import { Phone, MessageCircle } from "lucide-react";

export function MobileActionBar() {
  return (
    <>
      {/* Mobile sticky bottom action bar - hidden on lg and up */}
      <div
        className="fixed bottom-0 left-0 right-0 lg:hidden z-40 flex gap-0 shadow-lg"
        style={{
          background: "#1A1A1A",
          borderTop: "1px solid #333",
          height: "56px",
        }}
      >
        {/* Call button */}
        <a
          href="tel:+919860810865"
          className="flex-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all touch-manipulation active:opacity-70"
          style={{
            color: "#FFF8E7",
            fontFamily: "Sora, sans-serif",
          }}
          aria-label="Call now"
        >
          <Phone size={18} />
          <span className="hidden sm:inline">Call</span>
        </a>

        {/* Divider */}
        <div style={{ background: "#333", width: "1px" }} />

        {/* WhatsApp button */}
        <a
          href="https://wa.me/919860810865?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all touch-manipulation active:opacity-70"
          style={{
            color: "#FFF8E7",
            fontFamily: "Sora, sans-serif",
          }}
          aria-label="WhatsApp us"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* Spacer to prevent content from being hidden behind the action bar */}
      <div className="h-14 lg:hidden" />
    </>
  );
}
