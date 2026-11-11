<script setup lang="ts">
import LegalLayout from './LegalLayout.vue'
</script>

<template>
  <LegalLayout title="Datenschutzerklärung">
    <h2>Verantwortlicher</h2>
    <p>[PLACEHOLDER: full name, address and contact email]</p>

    <h2>Hosting</h2>
    <p>
      Diese Website wird bei der Hetzner Online GmbH in Deutschland gehostet. Beim Aufruf
      verarbeitet der Server technisch notwendige Daten wie IP-Adresse, Zeitpunkt und aufgerufene
      Adresse, um die Seite auszuliefern (Art. 6 Abs. 1 lit. f DSGVO). [PLACEHOLDER: server log
      retention period]
    </p>

    <h2>Reichweitenmessung mit Umami</h2>
    <p>
      Seitenaufrufe werden mit Umami Cloud (cloud.umami.is) gezählt. Umami setzt keine Cookies und
      speichert keine personenbezogenen Daten; erfasst werden anonyme Angaben wie aufgerufene Seite,
      Herkunftsseite, Browser und Land (Art. 6 Abs. 1 lit. f DSGVO). [PLACEHOLDER: Umami provider
      name, address and data location]
    </p>

    <h2>Fehlerberichte mit Sentry</h2>
    <p>
      Tritt in der Seite ein Fehler auf, wird ein Fehlerbericht an Sentry (Functional Software,
      Inc.) gesendet, um Fehler zu beheben (Art. 6 Abs. 1 lit. f DSGVO). Der Bericht enthält
      technische Angaben wie Browser, Betriebssystem und Fehlermeldung, aber keine IP-Adressen oder
      Cookies. Die Daten werden in den USA verarbeitet. [PLACEHOLDER: legal basis for the transfer
      to the USA, e.g. EU-US Data Privacy Framework certification]
    </p>

    <h2>Externe Links</h2>
    <p>
      Links zu LinkedIn, GitHub und den anderen cnotv-Seiten werden erst beim Anklicken geladen;
      dort gelten die Datenschutzerklärungen der jeweiligen Anbieter.
    </p>

    <h2>Ihre Rechte</h2>
    <p>
      Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
      Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO) sowie auf Beschwerde bei einer
      Datenschutz-Aufsichtsbehörde.
    </p>
  </LegalLayout>
</template>
