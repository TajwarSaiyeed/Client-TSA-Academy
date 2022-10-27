import React from "react";
import cors from "../../assets/cors.png";
import firebase from "../../assets/firebase.png";
import privateRoute from "../../assets/privateRoute.png";
import nodejs from "../../assets/nodejs.png";
import Question from "../../components/Question/Question";

const Blog = () => {
  const questions = [
    {
      id: 1,
      img: cors,
      name: "What is CORS?",
      answer:
        "CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.",
    },
    {
      id: 2,
      img: firebase,
      name: "Why are you using FireBase? What other options do you have to implement authentication?",
      answer:
        "Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections. Authentication Platfroms without Firebase : STYTCH, Ory, Supabase,Okta, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Amazon Cognito, OneLogin",
    },
    {
      id: 3,
      img: privateRoute,
      name: "How does the private route work?",
      answer:
        "The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)",
    },
    {
      id: 4,
      img: nodejs,
      name: "What is Node? How Does Node Work?",
      answer:
        "Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 p-5">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Blog;
