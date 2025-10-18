import { useEffect } from "react";

export default function BotpressChat() {
  const botId = process.env.NEXT_PUBLIC_BOTPRESS_BOT_ID;
  const clientId = process.env.NEXT_PUBLIC_BOTPRESS_CLIENT_ID;

  useEffect(() => {
    if (!botId || !clientId) return;
    const s1 = document.createElement("script");
    s1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    s1.async = true;
    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.botpressWebChat && window.botpressWebChat.init({
        botId: "${botId}",
        clientId: "${clientId}",
        composerPlaceholder: "Parler à Anna",
        themeName: "prism",
        botName: "Anna",
        hideWidget: false,
        enableTranscriptDownload: false,
        showConversationsButton: true
      });
    `;
    document.body.appendChild(s1);
    s1.onload = () => document.body.appendChild(s2);
    return () => { s1.remove(); s2.remove(); };
  }, [botId, clientId]);

  return null;
}
