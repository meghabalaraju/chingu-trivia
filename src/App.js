import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Layout } from "./components/Layout";
import { QuestionCard } from "./components/QuestionCard";
import useFetch from "hooks/datafetch/useFetch";

// TODO : Card, Button, Options and Data fetching

function App() {
  const url = "https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json";
  const options = {
    method: "GET",
  };

  const { loading, data, error } = useFetch(url, options);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <CssBaseline />
      <Layout>
        <QuestionCard data={data} />
      </Layout>
    </>
  );
}

export default App;
