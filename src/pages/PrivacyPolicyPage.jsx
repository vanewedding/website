import { Link } from "react-router-dom";
import style from "./PrivacyPolicyPage.module.css";
import useLang from "../hooks/useLang";

export default function PrivacyPolicyPage() {
  const lang = useLang();

  return (
    <div className={style.container}>
      <h1 className={style.privacyh1}>
        {lang === "it" ? "Informativa sulla Privacy" : "Privacy Policy"}
      </h1>

      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            La presente Informativa sulla Privacy descrive le politiche di{" "}
            <strong>{import.meta.env.VITE_COMPANY}</strong>, con sede in{" "}
            {import.meta.env.VITE_LOCATION}, email:{" "}
            {import.meta.env.VITE_EMAIL_SENDER} telefono:{" "}
            {import.meta.env.VITE_CELL_SENDER} riguardo alla raccolta, all’uso e
            alla divulgazione delle informazioni che raccogliamo quando utilizzi
            il nostro sito web ({import.meta.env.VITE_WEBSITE}) (il “Servizio”).
            Accedendo o utilizzando il Servizio, acconsenti alla raccolta,
            all’uso e alla divulgazione delle tue informazioni in conformità con
            la presente Informativa. Se non acconsenti, ti preghiamo di non
            accedere né utilizzare il Servizio.
          </>
        ) : (
          <>
            This Privacy Policy describes the policies of{" "}
            <strong>{import.meta.env.VITE_COMPANY}</strong>,{" "}
            {import.meta.env.VITE_LOCATION}, email:{" "}
            {import.meta.env.VITE_EMAIL_SENDER}, phone:{" "}
            {import.meta.env.VITE_CELL_SENDER} on the collection, use and
            disclosure of your information that we collect when you use our
            website ({import.meta.env.VITE_WEBSITE}) (the “Service”). By
            accessing or using the Service, you are consenting to the
            collection, use, and disclosure of your information in accordance
            with this Privacy Policy. If you do not consent, please do not
            access or use the Service.
          </>
        )}
      </p>

      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            Potremmo modificare questa Informativa sulla Privacy in qualsiasi
            momento senza preavviso. La versione aggiornata sarà pubblicata sul
            Servizio e sarà efficace dal giorno della pubblicazione. Continuando
            ad accedere o utilizzare il Servizio dopo tale periodo, accetti
            implicitamente la nuova versione.
          </>
        ) : (
          <>
            We may modify this Privacy Policy at any time without prior notice.
            The updated version will be posted on the Service and will be
            effective from the day it is published. By continuing to access or
            use the Service after that time, you implicitly accept the new
            version.
          </>
        )}
      </p>

      <h2 className={style.title}>
        {lang === "it" ? "I tuoi diritti:" : "Your Rights:"}
      </h2>
      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            In base alla normativa applicabile, potresti avere il diritto di
            accedere, rettificare, cancellare o limitare il trattamento dei tuoi
            dati personali. Puoi inoltre revocare il consenso, richiedere la
            portabilità dei dati o presentare un reclamo presso l’autorità
            competente. Per esercitare tali diritti, scrivi a{" "}
            {import.meta.env.VITE_EMAIL_SENDER}. Risponderemo secondo quanto
            previsto dalla legge.
          </>
        ) : (
          <>
            Depending on applicable law, you may have the right to access,
            rectify, erase, or restrict your personal data. You may also
            withdraw consent, request data portability, or lodge a complaint
            with a statutory authority. To exercise these rights, write to{" "}
            {import.meta.env.VITE_EMAIL_SENDER}. We will respond in accordance
            with applicable law.
          </>
        )}
      </p>

      <h2 className={style.title}>{lang === "it" ? "Cookie:" : "Cookies:"}</h2>
      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            Il nostro sito utilizza solo cookie minimi. Non tracciamo né
            profilizziamo gli utenti per finalità di marketing. Per ulteriori
            dettagli, consulta la nostra{" "}
          </>
        ) : (
          <>
            Our website uses minimal cookies. We do not track or profile users
            for marketing purposes. For more details, see our{" "}
          </>
        )}
        <Link to={lang === "it" ? "/it/cookie-policy" : "/en/cookie-policy"}>
          Cookie Policy
        </Link>
        .
      </p>

      <h2 className={style.title}>
        {lang === "it" ? "Sicurezza:" : "Security:"}
      </h2>
      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            La sicurezza delle tue informazioni è importante per noi.
            Applichiamo misure ragionevoli per proteggere i tuoi dati da
            perdita, uso improprio o alterazione non autorizzata. Tuttavia, non
            è possibile garantire una sicurezza assoluta.
          </>
        ) : (
          <>
            The security of your information is important to us. We implement
            reasonable measures to protect against loss, misuse, or unauthorized
            alteration of your information. However, absolute security cannot be
            guaranteed.
          </>
        )}
      </p>

      <h2 className={style.title}>
        {lang === "it"
          ? "Link di terze parti & Uso delle tue informazioni:"
          : "Third-Party Links & Use Of Your Information:"}
      </h2>
      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            Il nostro sito contiene link a servizi esterni come Instagram,
            Facebook, Google Maps, email. Non abbiamo controllo su tali servizi
            di terze parti e non siamo responsabili delle loro pratiche sulla
            privacy né delle informazioni che raccolgono. Visitando tali link,
            sei soggetto alle rispettive informative sulla privacy.
          </>
        ) : (
          <>
            Our website contains links to external services such as Instagram,
            Facebook, Google Maps, email. We do not control these third-party
            services and are not responsible for their privacy practices or the
            information they collect. By visiting these external links, you are
            subject to the respective service’s privacy policies.
          </>
        )}
      </p>

      <h2 className={style.title}>
        {lang === "it"
          ? "Responsabile per i reclami / Data Protection Officer:"
          : "Grievance / Data Protection Officer:"}
      </h2>
      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            Per domande o dubbi riguardo ai tuoi dati personali, contatta il
            nostro Responsabile all’indirizzo{" "}
            {import.meta.env.VITE_EMAIL_SENDER}. Affronteremo le tue richieste
            in conformità con la normativa applicabile.
          </>
        ) : (
          <>
            For queries or concerns regarding your personal information, contact
            our Grievance Officer at {import.meta.env.VITE_EMAIL_SENDER}. We
            will address your concerns in accordance with applicable law.
          </>
        )}
      </p>
      <h2 className={style.title}>HTTPS</h2>
      <p className={style.privacyP}>
        {lang === "it" ? (
          <>
            Il sito utilizza connessioni sicure HTTPS per proteggere le
            informazioni scambiate.
          </>
        ) : (
          <>
            The website uses secure HTTPS connections to protect the information
            exchanged.
          </>
        )}
      </p>

      <p className={style.privacyP}>
        {lang === "it"
          ? "Informativa sulla Privacy generata con "
          : "Privacy Policy generated with "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
        >
          CookieYes
        </a>
        .
      </p>
    </div>
  );
}
