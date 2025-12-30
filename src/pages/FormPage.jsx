import { useState, useContext } from "react";
import { eventTimeOptions, eventTypeOptions } from "../data/form";
import GlobalContext from "../context/GlobalContext";
import Title from "../components/visual/Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import wa from "../assets/svg/wa.svg";
import mail from "../assets/svg/mail.svg";
import { CHANNELS } from "../constants/enum";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function FormPage() {
  const { it } = useContext(GlobalContext);
  const labels = {
    eventType: (it ? "Tipo di evento" : "Type of event").toUpperCase(),
    guestNumber: (it ? "Numero di invitati" : "Number of guests").toUpperCase(),
    eventDay: (it ? "Giorno dell'evento" : "Event day").toUpperCase(),
    eventTime: (it ? "Momento dell'evento" : "Time of day").toUpperCase(),
    location: (it ? "Location" : "Location").toUpperCase(),
    otherInfo: (it
      ? "Altre informazioni"
      : "Additional information"
    ).toUpperCase(),
    name: (it ? "Nome" : "Name").toUpperCase(),
    phoneNumber: (it ? "Recapito telefonico" : "Phone number").toUpperCase(),
    // email: (it ? "Email" : "Email").toUpperCase(),
    submitWa: (it
      ? "Continua su whatsapp"
      : "Continue on whatsapp"
    ).toUpperCase(),
    submitEmail: it ? "scrivimi via email" : "send me an email",
  };
  const initialFormData = {
    eventType: "",
    eventDay: "",
    eventTime: "",
    location: "",
    guestNumber: "",
    otherInfo: "",
    name: "",
    phoneNumber: "",
    // email: "",
  };
  const [activeChannel, setActiveChannel] = useState(CHANNELS.WHATSAPP);
  const [startDate, setStartDate] = useState(); // Gestisci la data
  const [formData, setFormData] = useState(initialFormData);

  function handleDateChange(date) {
    // 'date' è un oggetto Date che rappresenta la data selezionata dal DatePicker.
    setStartDate(date);
    const day = date.getDate().toString().padStart(2, "0"); // giorno a 2 cifre
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // mese a 2 cifre
    const year = date.getFullYear(); // anno a 4 cifre

    setFormData({
      ...formData,
      eventDay: `${day}/${month}/${year}`, // formato dd/MM/yyyy
    });
  }

  // function to set the value of the form fields
  function setFieldValue(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // function to validate the input fields
  // function to validate the input fields
  const validateInput = (event) => {
    const inputValue = event.target.name;

    if (inputValue === "eventType" && !event.target.value) {
      event.target.setCustomValidity(
        it ? "Specifica il tipo di evento" : "Specify the type of event"
      );
    } else if (inputValue === "eventDay" && !event.target.value) {
      event.target.setCustomValidity(
        it ? "Inserisci il giorno dell'evento" : "Enter the event day"
      );
    } else if (inputValue === "eventTime" && !event.target.value) {
      event.target.setCustomValidity(
        it
          ? "Specifica se l'evento sarà di mattina o di sera"
          : "Specify if the event is in the morning or evening"
      );
    } else if (inputValue === "location" && !event.target.value) {
      event.target.setCustomValidity(
        it ? "Inserisci il luogo dell'evento" : "Enter the event location"
      );
    } else if (inputValue === "guestNumber" && !event.target.value) {
      event.target.setCustomValidity(
        it
          ? "Inserisci il numero approssimativo degli invitati"
          : "Enter the approximate number of guests"
      );
    } else {
      event.target.setCustomValidity("");
    }
  };

  const inputValueStyle =
    "focus:border-brand-pink focus:outline-none  focus-within:border-brand-pink focus-within:ring-2 focus-within:ring-brand-pink bg-off-white border-bordeaux border-2 p-2 my-2 rounded-xl w-full resize-none";
  const gridRowStyle = "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6";
  const singleColRowStyle = "grid grid-cols-1 mb-6";
  const labelStyle = "block mb-1";
  // const activeChannelStyle =
  //   "p-3 rounded-full w-16 flex justify-center items-center cursor-pointer border-1 border-bordeaux  bg-brand-pink pointer-events-none";
  // const channelStyle =
  //   "p-3 rounded-full w-16 flex transition-all duration-300 justify-center items-center cursor-pointer border-1 border-bordeaux/20  bg-brand-pink/30 hover:bg-brand-pink ";
  const submitButtonStyle =
    "px-6 py-3 rounded-xl border-bordeaux border-2  text-bordeaux cursor-pointer font-semibold hover:opacity-90 hover:text-brand-pink hover:border-brand-pink active:text-brand-pink active:border-brand-pink transition";
  // whastapp sender
  const sendWhatsAppMessage = () => {
    let greeting = formData.name
      ? `Ciao, sono ${formData.name} e ti scrivo per:`
      : `Ciao! Ti scrivo per una nuova richiesta di evento:`;

    let messageLines = [
      greeting,
      "",
      `- Tipo di evento: ${formData.eventType}`,
      `- Data: ${formData.eventDay}`,
      `- Fascia oraria: ${formData.eventTime}`,
      `- Location: ${formData.location}`,
      `- Numero invitati: ${formData.guestNumber}`,
    ];

    if (formData.otherInfo) messageLines.push(`- Note: ${formData.otherInfo}`);
    if (formData.phoneNumber)
      messageLines.push(`- Telefono: ${formData.phoneNumber}`);
    // if (formData.email) messageLines.push(`- Email: ${formData.email}`);

    const message = messageLines.join("\n");

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${
        import.meta.env.VITE_CELL_SENDER
      }?text=${encodedMessage}`,
      "_blank"
    );
  };

  // Email
  const sendEmailMessage = () => {
    let greeting = formData.name
      ? `Ciao, sono ${formData.name} e ti scrivo per:`
      : `Ciao! Ti scrivo per una nuova richiesta di evento:`;

    const messageLines = [greeting, ""];

    if (formData.eventType)
      messageLines.push(`- Tipo di evento: ${formData.eventType}`);
    if (formData.eventDay) messageLines.push(`- Data: ${formData.eventDay}`);
    if (formData.eventTime)
      messageLines.push(`- Fascia oraria: ${formData.eventTime}`);
    if (formData.location)
      messageLines.push(`- Location: ${formData.location}`);
    if (formData.guestNumber)
      messageLines.push(`- Numero invitati: ${formData.guestNumber}`);
    if (formData.otherInfo) messageLines.push(`- Note: ${formData.otherInfo}`);
    if (formData.phoneNumber)
      messageLines.push(`- Telefono: ${formData.phoneNumber}`);
    // if (formData.email) messageLines.push(`- Email: ${formData.email}`);

    // unisci usando CRLF per il mailto
    const message = messageLines.join("\r\n");
    const encodedMessage = encodeURIComponent(message);

    const subject = encodeURIComponent("Nuova richiesta di evento");

    window.open(
      `mailto:${
        import.meta.env.VITE_EMAIL_SENDER
      }?subject=${subject}&body=${encodedMessage}`,
      "_blank"
    );
  };

  function sendData(e) {
    e.preventDefault();
    if (activeChannel === CHANNELS.WHATSAPP) {
      sendWhatsAppMessage();
    } else {
      sendEmailMessage();
    }
    //setFormData(initialFormData);
  }
  return (
    <>
      <section className="my-6">
        <Title
          text={it ? "SCRIVIMI" : "WRITE ME"}
          colorBg="bg-bordeaux"
          className="p-3"
        />
        <form
          onSubmit={sendData}
          className="lg:m-8 lg:border-2  lg:border-bordeaux  p-6 "
        >
          {/* EVENT TYPE | GUEST NUMBER */}
          <div className={gridRowStyle}>
            <div className="md:col-span-2">
              <label className={labelStyle}>{labels.eventType}</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={setFieldValue}
                required
                onInvalid={validateInput}
                onInput={validateInput}
                className={inputValueStyle}
              >
                {eventTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {it ? opt.labelIt : opt.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelStyle}>{labels.guestNumber}</label>
              <input
                type="number"
                name="guestNumber"
                value={formData.guestNumber}
                onChange={setFieldValue}
                required
                onInvalid={validateInput}
                onInput={validateInput}
                className={`${inputValueStyle} appearance-none`}
                placeholder="Es. 120"
              />
            </div>
          </div>

          {/* EVENT DAY | EVENT TIME */}
          <div className={gridRowStyle}>
            <div className="md:col-span-2">
              <label className={labelStyle}>{labels.eventDay}</label>
              <DatePicker
                selected={startDate}
                onSelect={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText={
                  it ? "Seleziona la data dell'evento" : "Select event date"
                }
                className={inputValueStyle}
                wrapperClassName="w-full"
              />
            </div>

            <div>
              <label className={labelStyle}>{labels.eventTime}</label>
              <select
                name="eventTime"
                value={formData.eventTime}
                onChange={setFieldValue}
                required
                onInvalid={validateInput}
                onInput={validateInput}
                className={inputValueStyle}
              >
                {eventTimeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {it ? opt.labelIt : opt.labelEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* LOCATION */}
          <div className={singleColRowStyle}>
            <label className={labelStyle}>{labels.location}</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={setFieldValue}
              required
              onInvalid={validateInput}
              onInput={validateInput}
              className={inputValueStyle}
              placeholder={
                it ? "Inserisci il luogo dell'evento" : "Enter event location"
              }
            />
          </div>

          {/* OTHER INFO */}
          <div className={singleColRowStyle}>
            <label className={labelStyle}>{labels.otherInfo}</label>
            <textarea
              name="otherInfo"
              value={formData.otherInfo}
              onChange={setFieldValue}
              onInvalid={validateInput}
              onInput={validateInput}
              className={inputValueStyle}
              rows={4}
              placeholder={
                it
                  ? "Dettagli aggiuntivi, orari, richieste particolari..."
                  : "Additional details, timing, special requests..."
              }
            />
          </div>

          {/* NAME | PHONE */}
          <div className={gridRowStyle}>
            <div className="md:col-span-2">
              <label className={labelStyle}>{labels.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={setFieldValue}
                required
                onInvalid={validateInput}
                onInput={validateInput}
                className={inputValueStyle}
                placeholder={it ? "Inserisci il tuo nome" : "Enter your name"}
              />
            </div>
            <div>
              <label className={labelStyle}>{labels.phoneNumber}</label>
              <PhoneInput
                name="phoneNumber"
                value={formData.phoneNumber}
                onInvalid={validateInput}
                onInput={validateInput}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phoneNumber: value }))
                }
                placeholder={it ? "Numero di telefono" : "Phone number"}
                defaultCountry="IT"
                international
                className={inputValueStyle}
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          {/* <div className={singleColRowStyle + " mb-8"}>
            <label className={labelStyle}>{labels.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={setFieldValue}
              required
              onInvalid={validateInput}
              onInput={validateInput}
              className={inputValueStyle}
              placeholder={it ? "Inserisci la tua email" : "Enter your email"}
            />
          </div> */}

          {/* CHANNEL */}
          {/* <div className="m-8 ">
            <h3 className="text-center my-4">
              {it ? "CONTATTAMI TRAMITE" : "CONTACT ME VIA"}
            </h3>
            <div className="flex justify-center gap-6">
              <div
                onClick={() => setActiveChannel(CHANNELS.WHATSAPP)}
                className={`${
                  activeChannel === CHANNELS.WHATSAPP
                    ? activeChannelStyle
                    : channelStyle
                }`}
              >
                <img
                  src={wa}
                  alt="choose whatsapp"
                  className={`transition-opacity duration-300 w-full ${
                    activeChannel === CHANNELS.WHATSAPP
                      ? ""
                      : "opacity-25 hover:opacity-100"
                  }`}
                />
              </div>

              <div
                onClick={() => setActiveChannel(CHANNELS.EMAIL)}
                className={`${
                  activeChannel === CHANNELS.EMAIL
                    ? activeChannelStyle
                    : channelStyle
                }`}
              >
                <img
                  src={mail}
                  alt="choose email"
                  className={`transition-opacity duration-300 w-full ${
                    activeChannel === CHANNELS.EMAIL
                      ? ""
                      : "opacity-100 hover:opacity-100"
                  }`}
                />
              </div>
            </div>
          </div> */}

          {/* SUBMIT */}
          <div className="mt-12">
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={() => setActiveChannel(CHANNELS.WHATSAPP)}
                className={submitButtonStyle}
              >
                {labels.submitWa}
              </button>
            </div>

            <div className="flex justify-center gap-2">
              <p className="text-center my-4">{it ? "Oppure" : "Or"}</p>
              <button
                onClick={() => setActiveChannel(CHANNELS.EMAIL)}
                type="submit"
                className={
                  "transition-all duration-200 cursor-pointer underline  underline-offset-2 decoration-2 hover:text-brand-pink active:text-brand-pink"
                }
              >
                {labels.submitEmail}
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
