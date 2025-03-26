import "./App.css";
import { Countdown } from "./components/Countdown";
import { QuestionsAndAnswers } from "./components/QuestionsAndAnswers";
import { RSVPForm } from "./components/RSVPForm";
import { Hero, When, Where } from "./config";

function App() {
  return (
    <main className="container mx-auto max-w-screen-md p-4">
      <div className="text-center my-40">
        <h1 className="text-7xl font-bold super sm:text-8xl">{Hero.title}</h1>
        <Countdown />
      </div>

      <img className="w-full" src={Hero.photo} alt="" />

      <div className="grid grid-cols-2 my-40">
        <div className="text-center p-2">
          <h3 className="text-3xl font-bold mb-4">{When.title}</h3>
          <p className="text-xl">
            {When.dayOfTheWeek}
            <br />
            {When.date}
            <br />
            {When.hours}
          </p>
        </div>

        <div className="text-center p-2">
          <h3 className="text-3xl font-bold mb-4">{Where.title}</h3>
          <p className="text-xl">
            {Where.venue}
            <br /> {Where.city}
            <br />(
            <a href={Where.map.link} target="_blank" className="underline">
              {Where.map.text}
            </a>
            )
          </p>
        </div>

        <div className="col-span-2 mt-10">
          <iframe
            src={Where.map.googleMaps}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="my-40">
        <QuestionsAndAnswers />

        <div className="my-40">
          <RSVPForm />
        </div>
      </div>
    </main>
  );
}

export default App;
