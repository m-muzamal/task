import axios from "axios";
import React, { useState } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [result, setResutl] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErr(false);
      setLoading(true);
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      setLoading(false);
      await setResutl(res.data[0]?.meanings[0]?.definitions);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErr(true);
    }
  };

  return (
    <section>
      <div className="dictionary card">
        <h1>Dictionary</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word..."
          />
          <button type="submit">Search</button>
        </form>
        {/* <p>Word: {word}</p> */}
        {loading ? (
          <h3 className="txt">Loading...</h3>
        ) : (
          <>
            {err ? (
              <div className="txt err">
                <h4>Somthing went wrong!</h4>
              </div>
            ) : (
              <>
                {result &&
                  result?.map(({ definition }, index) => (
                    <p key={index}>
                      <strong>{index + 1}:</strong> {definition}
                    </p>
                  ))}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Dictionary;
