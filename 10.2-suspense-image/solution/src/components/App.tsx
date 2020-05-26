import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Img from "./Img";
import useFetch from "../utils/useFetch-suspense";

type GHProfile = { avatar_url: string; login: string };

const Profile: React.FC = () => {
  const data = useFetch<GHProfile>("https://api.github.com/users/nikgraf");
  return (
    <div>
      <React.Suspense fallback="Loading Portrait …">
        <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      </React.Suspense>
      <div>Username: {data.login}</div>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <Profile />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
