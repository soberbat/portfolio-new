import React from "react";
import { Container } from "../.././styles/Index.styled";
import { Inner } from "../../styles/Projects.styled";
import { Project } from "../../src/components/Project";

const projectsİnfo = [
  {
    header: "Avalanche",
    project: "avalanche",
    sourceCode: "https://github.com/soberbat/Avalanche",
    live: "https://avalanche-00.netlify.app/",
    descriptionOne:
      "Main takeaway of this project  (after using Tailwindcss for a while) was figuring out that the library in the end is great for quick-short projects. Trust me! İt gets really challenging to keep code clean even if you use frameworks or other solutions Tailwindcss offers. At least it was what I experienced. ",
    descriptionTwo:
      "It was really painful to look for spesific part of a code and just focus on there when there is bunch of p-4's flex's bg-blue-900's... So I said to myself 'hmmm... time to look for a clean fast solution' So I become acquainted with CSS preporocessors. Used SASS and got the help of nesting and variables. ",
  },
  //DÜZETLME YAP
  {
    header: "Avalanche X | Apply Grant",
    project: "applygrant",
    sourceCode: "https://github.com/soberbat/Grant-Form",
    live: "https://apply-grant-00.netlify.app/",
    descriptionOne:
      "This project is all about forms and interactions. I've came across with this beautiful JotForm form. Sections have their own vertical slider-like transition which is made using Vanilla JS and every section we see, there is a different update in the interface according to the data user entered. There is a progress bar in up top. Also the spinning circles was made with CSS Doodle. ",
    descriptionTwo:
      "Logic in the project has already been implemented before for this spesific problem and presented as a 3rd party library. I've been overly exposed to a articles in summary saying there is no one way to a solution. Experiencing it at first hand was a big step for me. And this achievement not only gave me a chance to implement my own logic but also added value to my learning process. Gave me some crucial hints on programming in general...",
  },
  {
    header: "E-Reel Mini",
    project: "ereel",
    sourceCode: "https://github.com/soberbat/E-reel",
    live: "https://e-reel.netlify.app/ ",
    descriptionOne:
      "I was looking for sites to copy and sharpen my skills. First thing I do when looking for inspiration would be check the Awwwards. So I did and fell in love with this site. How its animating smoothly, colors, general Uİ and of course the romance that french gives. ",
    descriptionTwo:
      "Animating is by far the most exiciting thing for me. Using GSAP in this project and seeing how powerful it is was quite fun. Swiper.JS was also helpful in this project. And.... Using Tailwindcss was fast but again as I said readability and maintainability of code was drastically reduced.  ",
  },
  {
    header: "Awwax Wallet",
    project: "wallet",
    sourceCode: "https://github.com/soberbat/Wallet-App",
    live: "https://awwax-w-00.netlify.app/",
    descriptionOne:
      "Back when I was obsessed with Crypto Currency, I came across with this smart contracts platform Avalanche. And in order to access your wallet there you'd need an app that you create an mnemonic phrase. So this app lets you create a mnemonic phase with fetched data. And requires you to complete the phase on a modal. ",
    descriptionTwo:
      "This project is particulary important in that it made me sure that I was ready to learn React. I wouldn't really appreciate new technologies without struggles and burn outs of relatively old ones. I needed a system that deconstruct a page where i can target every component seperately, reuse them without extra markup. And React was the exact solution.   ",
  },
];

export default function projects() {
  return (
    <Container>
      <Inner>
        {projectsİnfo.map((project, i) => (
          <Project key={i + "key"} {...project} />
        ))}
      </Inner>
    </Container>
  );
}
