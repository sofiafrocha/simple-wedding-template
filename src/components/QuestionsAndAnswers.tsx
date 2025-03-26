import { FAQ } from "../config";

export function QuestionsAndAnswers() {
  return (
    <>
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        {FAQ.title}
      </h1>

      {FAQ.questions.map((item, i) => (
        <div
          key={item.question}
          className={`collapse collapse-arrow ${i === 0 ? "mt-10" : ""}`}
        >
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-medium">
            {item.question}
          </div>
          <div className="collapse-content">
            {typeof item.answer === "function" ? (
              item.answer()
            ) : (
              <p className="text-lg">{item.answer}</p>
            )}
            <img className="mt-2" src={item.photo} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}
