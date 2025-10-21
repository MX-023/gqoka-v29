// components/BotpressChat.tsx
import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Écris ton message ici...",
        botId: "74b7dded-ca48-4a6d-b1fa-403c13037ff5",
        clientId: "01K7BNJFZBYQ6QPZRQ4F07XWT0",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        lazySocket: true,
        themeName: "prism",
        botName: "Anna",
        avatarUrl: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
        layoutWidth: "400px",
        layoutHeight: "500px",
        hideWidget: false,
        showCloseButton: true,
        enableReset: true,
        stylesheet: "https://cdn.botpress.cloud/webchat/v1/themes/default/index.css",
        theme: {
          primaryColor: "#111",
          secondaryColor: "#fff",
          textColor: "#111",
          backgroundColor: "#fefefe",
        },
        // Message d'accueil d'Anna
        onInit: () => {
          window.botpressWebChat.sendEvent({
            type: "proactive-trigger",
            channel: "web",
            payload: {
              text: "Bonjour, je suis Anna, ta styliste personnelle. Comment puis-je t’aider ?",
            },
          });
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

