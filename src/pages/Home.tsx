import { Link } from "react-router-dom"
import Nav from "../components/Nav"
export default function Home() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center">

      <Nav />
      <h1>Hello! Welcome to my a small react demonstration</h1>
      <p>It contains all the projects I created while learning the basics of react</p>
    </div>)
}
