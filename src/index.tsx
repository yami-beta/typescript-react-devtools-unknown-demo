import * as React from "react";
import * as ReactDOM from "react-dom";
import { Foo } from "./components/Foo";
import { Bar } from "./components/Bar";

ReactDOM.render(
  <div>
    <Foo />
    <Bar />
  </div>,
  document.getElementById("root")
);
