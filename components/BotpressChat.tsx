// components/BotpressChat.tsx
import { useEffect } from "react";

const INJECT = process.env.NEXT_PUBLIC_BOTPRESS_INJECT_URL || "https://cdn.botpress.cloud/webchat/v1/inject.js";
const HOST   = process.env.NEXT_PUBLIC_BOTPRESS_HOST_URL   || "https://cdn.botpress.cloud/webchat/v1";
const BOT_ID = process.env.NEXT_PUBLIC_BOTPRESS_BOT_ID;
const CLIENT = process.env.NEXT_PUBLIC_BOTPRESS_CLIENT_ID;
const MSGURL = process.env.NEXT_PUBLIC_BOTPRESS_MESSAGING_URL || "https://messaging.botpress.cloud";

export default function BotpressChat() {
  useEffect(() => {
    if (!BOT_ID || !CLIENT) return;
    if ((window as any).__bp_loaded) return;

    const s = document.createElement("script");
    s.src = INJECT;
    s.async = true;

    s.onload = () => {
      (window as any).botpressWebChat?.init({
        hostUrl: HOST,
        botId: BOT_ID,
        clientId: CLIENT,
        messagingUrl: MSGURL,
        botName: "Anna",
        hideWidget: false,
        showCloseButton: true,
        layoutWidth: "380px",
        enableConversationDeletion: false,
        stylesheet: `
          .bpw-widget-btn { background:#FF6A00 !important; border-radius:9999px !important; }
          .bpw-widget-btn span { font-weight:700; }
          .bpw-floating-button { bottom: 20px !important; right: 20px !important; }
          .bpw-header-title { font-weight:700; }
        `,
        onEvent: () => {},
      });

      // Teaser "Besoin d’aide ?" qui disparaît après 5s
      const teaser = document.createElement("div");
      teaser.textContent = "Besoin d’aide ?";
      Object.assign(teaser.style, {
        position: "fixed",
        right: "90px",
        bottom: "28px",
        background: "#1f1f1f",
        color: "#ffffff",
        border: "1px solid #2a2a2a",
        padding: "8px 12px",
        borderRadius: "9999px",
        fontSize: "14px",
        opacity: "0.95",
        zIndex: "2147483647",
        pointerEvents: "none",
        transition: "opacity .3s ease",
      });
      document.body.appendChild(teaser);
      setTimeout(() => (teaser.style.opacity = "0"), 4500);
      setTimeout(() => teaser.remove(), 5200);

      (window as any).__bp_loaded = true;
    };

    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return null;
}
