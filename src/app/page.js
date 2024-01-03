
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <head>
        <title>Chester portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className=" bg-white px-10">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1>develop by ches</h1>
            <ul>
              <li><BsFillMoonStarsFill/></li>
              <li>
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
