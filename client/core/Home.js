import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/portfolio">Portfolio</Link>
      <h1>Hello Friend</h1>
    </div>
  );
}
