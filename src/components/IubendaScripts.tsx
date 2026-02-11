"use client";

import Script from "next/script";

// ============================================================
// ISTRUZIONI: Sostituisci questi valori con quelli di Iubenda
// dopo aver creato il sito su https://www.iubenda.com/it
// ============================================================
const IUBENDA_SITE_ID = "INSERISCI_SITE_ID";
const IUBENDA_COOKIE_POLICY_ID = "INSERISCI_POLICY_ID";

export default function IubendaScripts() {
  return (
    <>
      {/* Iubenda Cookie Solution — Banner */}
      <Script id="iubenda-config" strategy="beforeInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "siteId": ${IUBENDA_SITE_ID},
            "cookiePolicyId": ${IUBENDA_COOKIE_POLICY_ID},
            "lang": "it",
            "storage": { "useSiteId": true },
            "banner": {
              "position": "float-bottom-center",
              "acceptButtonDisplay": true,
              "customizeButtonDisplay": true,
              "rejectButtonDisplay": true,
              "closeButtonDisplay": false,
              "acceptButtonColor": "#FF6B00",
              "acceptButtonCaptionColor": "white",
              "customizeButtonColor": "#252529",
              "customizeButtonCaptionColor": "#9E9E9E",
              "rejectButtonColor": "#252529",
              "rejectButtonCaptionColor": "#9E9E9E",
              "backgroundColor": "#1A1A1E",
              "textColor": "#FFFFFF",
              "fontSizeBody": "13px"
            }
          };
        `}
      </Script>
      <Script
        src={`https://cs.iubenda.com/autoblocking/${IUBENDA_SITE_ID}.js`}
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="beforeInteractive"
        charSet="UTF-8"
      />
    </>
  );
}
