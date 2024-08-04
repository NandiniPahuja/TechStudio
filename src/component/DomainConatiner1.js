import React from "react";
import {
  COLORS,
  Domain,
  GeneralHeaders,
  LargeConatiner,
} from "./styles/app.styles";
import PageHeader from "./generalComponent/PageHeader";
import { GeneralDiv } from "./styles/education.styles";
import Table from "./Table";

export default function DomainConatiner1() {
  return (
    <div className="newdiv1">
      <Domain>
        <PageHeader title={"Web Development"} />
        <GeneralDiv
          style={{
            height: "50px",
            marginBottom: "40px",
            marginLeft: "10%",
            borderRadius: "5px",
            color: COLORS.color5,
            background: "#B40272", // Pink background
            padding: "15px",
            textAlign: "center", // Center text
            fontSize: "1.5rem", // Adjust font size
          }}
          width="80%"
        >
          <a
            href="https://medium.com/tag/web-development"
            style={{ color: "white", textDecoration: "none" }}
          >
            Click here to Read a Blog on Web Development
          </a>
        </GeneralDiv>
        <LargeConatiner
          style={{ height: "auto", minHeight: "920px", paddingBottom: "50px" }}
          id="lrgContEdu"
        >
          <GeneralHeaders>Web Development: An Introduction</GeneralHeaders>
          <GeneralDiv
            style={{
              background: "inherit",
              boxShadow: "none",
              minHeight: "70%",
              height: "auto",
              fontFamily: `"Heebo", sans-serif`,
              fontSize: "18px",
            }}
            padding={"30px"}
          >
            Hey girl, ever wondered how those awesome websites you visit are made?
             That’s web development for you! It’s like the magic behind the scenes that
              makes a website look fab and work smoothly. Think of it as creating your 
              own digital playground where you can design, code, and make things happen 
              online.<br /> <br />
              So, what’s the scoop? Web development is all about building websites and web apps.
               You’ve got two main parts: front-end and back-end. Front-end is like the makeup—what 
               users see and interact with, like buttons and colors. Back-end is the brains of the operation, 
               handling data and making sure everything works behind the curtain. For example, when you log into
                your fave social media app, that’s the back-end making sure you see your posts and not someone 
                else’s.{" "}
            <br /> <br />
            Want to dive in? It’s totally doable! With tools like HTML, CSS, and JavaScript, you’ll be coding like a pro in no time. So go girl, give it a shot and start creating your own amazing web spaces! 🚀


            <br />
            <br />
            
          </GeneralDiv>
          <GeneralDiv
            style={{
              height: "200px",
              width: "50%",
              background: "inherit",
              boxShadow: "none",
              marginLeft: "24%",
            }}
          >
            <Table />
          </GeneralDiv>
        </LargeConatiner>
      </Domain>
    </div>
  );
}
