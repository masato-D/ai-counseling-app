import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>悩み相談AI（デモ）</h2>

      <textarea
        rows="5"
        style={{ width: "100%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ここに悩みを書いてください"
      />

      <button
        style={{ marginTop: "10px" }}
        onClick={() => setResponse("考え中です…")}
      >
        相談する
      </button>

      {response && <p style={{ marginTop: "20px" }}>{response}</p>}

      <small>
        ※本サービスは専門家の代替ではありません。
      </small>
    </div>
  );
}

export default App;
