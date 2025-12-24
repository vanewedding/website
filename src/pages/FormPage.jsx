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
    phoneNumber: (it ? "Telefono" : "Phone number").toUpperCase(),
    // email: (it ? "Email" : "Email").toUpperCase(),
    submit: (it ? "Conferma" : "Submit").toUpperCase(),
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
  const [errorMessage, setErrorMessage] = useState("");

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
    "focus:border-brand-pink focus:outline-none bg-off-white border-bordeaux border-2 p-2 my-2 rounded-xl w-full resize-none";
  const gridRowStyle = "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6";
  const singleColRowStyle = "grid grid-cols-1 mb-6";
  const labelStyle = "block mb-1";
  const channelStyle =
    "p-3 rounded-full w-16 flex justify-center items-center cursor-pointer bg-brand-pink";
  const submitButtonStyle =
    "px-6 py-3 rounded-xl bg-bordeaux cursor-pointer text-white font-semibold hover:opacity-90 transition";

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
    const phoneNumber = "393348358349";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
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
    const toEmail = "jhonniest741@gmail.com";

    window.open(
      `mailto:${toEmail}?subject=${subject}&body=${encodedMessage}`,
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
    setFormData(initialFormData);
  }
  return (
    <>
      <section className="my-6">
        <Title
          text={it ? "QUESTIONARIO" : "QUESTIONNAIRE"}
          colorBg="bg-bordeaux"
          className="p-3"
        />
        <form onSubmit={sendData} className="m-8 border-2 border-bordeaux  p-4">
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
                  it ? "Inserisci la data dell'evento" : "Select event date"
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
                it
                  ? "Dove si terrà l'evento?"
                  : "Where will the event take place?"
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
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={setFieldValue}
                required
                onInvalid={validateInput}
                onInput={validateInput}
                className={inputValueStyle}
                placeholder={it ? "Numero di telefono" : "Phone number"}
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
          <div className="flex justify-center gap-6 my-8">
            <div
              onClick={() => setActiveChannel(CHANNELS.WHATSAPP)}
              className={`${
                activeChannel === "whatsapp" ? "pointer-events-none" : ""
              } ${channelStyle} cursor-pointer`}
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
                activeChannel === CHANNELS.EMAIL ? "pointer-events-none" : ""
              } ${channelStyle} cursor-pointer`}
            >
              <img
                src={mail}
                alt="choose email"
                className={`transition-opacity duration-300 w-full ${
                  activeChannel === CHANNELS.EMAIL
                    ? ""
                    : "opacity-25 hover:opacity-100"
                }`}
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="flex justify-center">
            <button type="submit" className={submitButtonStyle}>
              {it ? "Conferma" : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
