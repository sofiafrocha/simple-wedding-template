import { useState } from "react";
import { Form } from "../config";

function GuestInfo({ index }: { index: number }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="flex flex-col">
          <label htmlFor={`[Guest_${index}]_first_name`} className="text-xl">
            Name
          </label>
          <input
            type="text"
            name={`[Guest_${index}]_first_name`}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`[Guest_${index}]_surname`} className="text-xl">
            Surname
          </label>
          <input
            type="text"
            name={`[Guest_${index}]_surname`}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div className="mt-8">
        <label
          htmlFor={`[Guest_${index}]_vegetarian`}
          className="text-lg mb-1 flex"
        >
          Vegetarian option?
        </label>

        <div className="flex flex-row">
          <div className="flex flex-row items-center">
            <input
              type="radio"
              name={`[Guest_${index}]_vegetarian`}
              className="radio"
              value="Yes"
            />
            <span className="text-md ml-3">Yes</span>
          </div>

          <div className="flex flex-row items-center ml-6">
            <input
              type="radio"
              name={`[Guest_${index}]_vegetarian`}
              className="radio"
              value="No"
            />
            <span className="text-md ml-3">No</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <label
          htmlFor={`[Guest_${index}]_food_restrictions`}
          className="text-lg flex items-baseline"
        >
          Food Restrictions{" "}
          <span className="text-xs ml-3">{Form.extra.optionalText}</span>
        </label>
        <textarea
          name={`[Guest_${index}]_food_restrictions`}
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>
    </>
  );
}

export function RSVPForm() {
  const [guests, setGuests] = useState(1);

  return (
    <>
      <h1 className="text-6xl font-bold text-center">{Form.title}</h1>

      <h2 className="text-3xl font-bold text-center mt-4 mb-12">
        {Form.deadline}
      </h2>
      <form
        name="confirmar"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="confirmar" />

        <h2 className="text-3xl font-bold mb-2 text-color-green">
          {Form.main.title}
        </h2>

        <div>
          {[...Array(guests)].map((_, i) => (
            <GuestInfo key={i} index={i + 1} />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          {guests > 1 && (
            <button
              type="button"
              className="btn btn-outline mr-3"
              onClick={() => setGuests(guests - 1)}
            >
              {Form.main.remove}
            </button>
          )}

          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setGuests(guests + 1)}
            disabled={guests === Form.main.maxGuests}
          >
            {Form.main.add}
          </button>
        </div>

        <h2 className="text-3xl font-bold mt-10 text-color-green">
          {Form.extra.title}
        </h2>

        {Form.extra.questions.map((item) => (
          <div key={item.id} className="mt-6">
            <label
              htmlFor={item.id}
              className="text-lg mb-1 flex items-baseline"
            >
              {item.title}{" "}
              <span className="text-xs ml-3">{Form.extra.optionalText}</span>
            </label>
            <textarea
              name={item.id}
              className="textarea textarea-bordered w-full"
              placeholder={item.details}
            ></textarea>
          </div>
        ))}

        <div className="mt-10 text-right">
          <button className="btn btn-accent text-xl" type="submit">
            {Form.confirm}{" "}
            {guests > 1 ? Form.attendeePlural : Form.attendeeSingular}
          </button>
        </div>
      </form>
    </>
  );
}
