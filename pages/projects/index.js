import React from "react";
import Head from "next/head";
import { Container } from "../.././styles/Index.styled";
import { Inner } from "../../styles/Projects.styled";
import { Project } from "../../src/components/Project";

const projectsİnfo = [
  {
    header: "Avalanche",
    project: "avalanche",
    sourceCode: "https://github.com/soberbat/Avalanche",
    live: "https://sunny-phoenix-4af01d.netlify.app/",
    descriptionOne:
      "The main takeaway of this project (after using Tailwindcss for a while) was figuring out that the library in the end is great for quick-short projects. Trust me! İt gets challenging to keep code clean even if you use frameworks or other solutions Tailwindcss offers. At least it was what I experienced.",
    descriptionTwo:
      "It was really painful to look for specific part of a code and just focus on there when there is a bunch of p-4's flex's bg-blue-900's... So I said to myself 'hmmm... time to look for a clean fast solution' So I become acquainted with CSS preprocessors. Used SASS and got the help of nesting and variables. ",
  },
  {
    header: "Awwax Wallet",
    project: "wallet",
    sourceCode: "https://github.com/soberbat/Wallet-App",
    live: "https://deluxe-crepe-b51802.netlify.app/",
    descriptionOne:
      "Back when I was curious about Crypto technologies, I came across this smart contracts platform Avalanche. And there to access your wallet you would need an app that gives you a mnemonic phrase. So this app lets you create a mnemonic phase with fetched data and requires you to complete the phase on a modal. ",
    descriptionTwo:
      "This project is particularly important in that it made me sure that I was ready to learn React. The actual app was a SPA and using separate HTML for each page was a headache. I wouldn't appreciate new technologies without struggles and burnouts from relatively old ones. I needed a system that deconstructs a page where I can target every component separately, and reuse them without extra markup. And React was the exact solution.   ",
  },
  //DÜZETLME YAP
  {
    header: "Avalanche X | Apply Grant",
    project: "applygrant",
    sourceCode: "https://github.com/soberbat/Grant-Form",
    live: "https://radiant-babka-8cb866.netlify.app/",
    descriptionOne:
      "This project is all about forms and interactions. I've come across this beautiful JotForm form. Sections have their vertical slider-like transition which is made using Vanilla JS and in every section we see, there is a different update in the interface according to the data user entered. There is a progress bar up top. Also, the spinning circles were made with CSS Doodle. ",
    descriptionTwo:
      "Logic in the project has already been implemented before for this specific problem and presented as a 3rd party library. I've been overly exposed to articles, in summary, saying there is no one way to a solution. Experiencing it firsthand was a big step for me. And this achievement not only gave me a chance to implement my logic but also added value to my learning process. Gave me some crucial hints on programming in general...",
  },
  {
    header: "E-Reel Mini",
    project: "ereel",
    sourceCode: "https://github.com/soberbat/E-reel",
    live: "https://e-reel.netlify.app/ ",
    descriptionOne:
      "I was looking for sites to check if I can clone and sharpen my skills. I did come across this site and fell in love with it. How it animates smoothly, colors, general UI, and of course the romance that french gives. ",
    descriptionTwo:
      "Animating is by far the most exciting thing for me. Using GSAP in this project and seeing how powerful it is was quite fun. Swiper.JS was also helpful in this project. And.... Using Tailwindcss was fast but again as I said readability and maintainability of code were drastically reduced compared to using regular CSS.  ",
  },
];

export default function projects() {
  return (
    <Container>
      <Head>
        <title key="projects">Projects</title>
        <meta key="ogType" name="og:type" content="projects" />
      </Head>
      <Inner>
        {projectsİnfo.map((project, i) => (
          <Project key={i + "key"} {...project} />
        ))}
      </Inner>
    </Container>
  );
}
