import Lorem from "./Lorem.jsx";
import { ways } from "../data.js";

export default function TeachingSection() {
    return (
        <section>
                    <h1>Hello!!!</h1>
                    <ul>
                      {ways.map((way) => (
                        <Lorem key={way.title} {...way} />
                      ))}
                    </ul>
                  </section>
    )
}