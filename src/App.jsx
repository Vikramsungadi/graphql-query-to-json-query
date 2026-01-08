import { useState } from "react";
import { graphQlQueryToJson } from "graphql-query-to-json";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    try {
      const result = graphQlQueryToJson(input);
      setOutput(JSON.stringify(result, null, 2));
    } catch {
      setOutput("Invalid GraphQL query");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard");
  };

  return (
    <div style={{ padding: 16, maxWidth: 900, width: "100%" }}>
      <h3>GraphQL → JSON</h3>

      <textarea
        rows={20}
        style={{ width: "100%", fontFamily: "monospace", padding: 10 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste GraphQL query here"
      />

      <div style={{ margin: "12px 0" }}>
        <button onClick={handleConvert}>Convert</button>
      </div>

      {output && (
        <>
          <pre
            style={{
              background: "#111",
              color: "#0f0",
              padding: 12,
              maxHeight: 300,
              overflow: "auto",
            }}
          >
            {output}
          </pre>

          <button onClick={handleCopy}>Copy JSON</button>
        </>
      )}
    </div>
  );
};

export default App;
