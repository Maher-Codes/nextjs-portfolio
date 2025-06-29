import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.png"
          alt="Maher Profile Photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-6 text-3xl font-bold text-center sm:text-left">Hi, I'm Maher 👋</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a computer science student passionate about <strong>DevOps, cloud computing, and secure web development</strong>. 
          I enjoy building fast, automated applications and working with tools like <code>GitHub Actions</code>, <code>Vercel</code>, 
          and <code>Semgrep</code> to explore real-world CI/CD workflows.
        </p>
        <p>
          This portfolio is part of a hands-on CI/CD project where I integrated <strong>static and dynamic security testing</strong> into 
          a modern deployment pipeline. I love clean code, scalable design, and making technology accessible.
        </p>
        <p>
          I also enjoy exploring automation, Docker, Linux systems, and contributing to open-source when I can.
        </p>
        <p>
          📫 Feel free to connect with me on{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>{" "}
          or{" "}
          <a href={socialLinks.twitter} target="_blank">
            Twitter
          </a>
          .
        </p>
      </div>
    </section>
  );
}
