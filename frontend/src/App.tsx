import React, { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState<any>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/hello", {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((r) => {
        if (controller.signal.aborted) {
          return;
        }

        setAnswer(r);
      });

    return () => {
      controller.abort();
    };
  });
  return (
    <>
      <section>
        <h2>Frontend</h2>

        <p>Hello, this message is from the &lt;App&gt;</p>
      </section>

      <section>
        <h2>Backend</h2>
        {answer ? (
          <>
            This message is from "/api/hello"
            <pre className={"code"}>{JSON.stringify(answer, null, 2)}</pre>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
}

export default App;
