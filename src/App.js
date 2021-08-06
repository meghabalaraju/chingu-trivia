import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { Layout } from "./components/Layout";
import { QuestionList } from "components/Question";
import useFetch from "hooks/datafetch/useFetch";

// TODO : Card, Button, Options and Data fetching

function App() {
  const [questions, setQuestions] = useState([]);
  const url = "https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json";
  const options = {
    method: "GET",
  };

  const { loading, data, error } = useFetch(url, options);

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <CssBaseline />
      <Layout>
        <QuestionList questions={questions} />
      </Layout>
    </>
  );
}

export default App;
