import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
    </div>
  );
}
