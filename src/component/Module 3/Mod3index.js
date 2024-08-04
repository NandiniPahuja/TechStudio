import React, { Component } from "react";
import PageHeader from "../generalComponent/PageHeader";
import {
  Domain,
  GeneralHeaders,
  LargeConatiner,
  COLORS,
} from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
import Table3 from "../EmploymentDomain/Table3";
import YoutubeEmbed from "../YouTube";
import { BCOLOR4, YCOLOR4, XCOLOR4 } from "./colors.style";

export default class GenAI extends Component {
  render() {
    return (
      <div className="newdiv1">
        <Domain>
          <PageHeader title={"Generative AI"}></PageHeader>
          <LargeConatiner
            style={{
              height: "auto",
              minHeight: "1020px",
              paddingBottom: "50px",
            }}
            id="lrgContEdu"
          >
            <GeneralHeaders>Generative AI</GeneralHeaders>
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
              Hey girl! 🌟 Ready to dive into the fascinating world of Generative AI? 🤖✨ Imagine having 
              a BFF who’s not only super smart but also incredibly creative—creating new art, music, and 
              even writing stories just for you. That’s Generative AI in action! 💫<br /><br />
              Generative AI is like having a techie buddy who can whip up new content by learning from 
              existing examples. From generating art pieces 🎨 to composing music 🎵 and writing captivating 
              stories 📖, it’s all about using AI’s creative powers to make something totally new and 
              amazing. It’s like having a magical artist right in your pocket!<br /><br />
              So, get ready to explore the exciting features of Generative AI and see how it’s pushing 
              the boundaries of creativity. Whether you’re into digital art, music, or storytelling, 
              Generative AI is here to make everything a bit more fabulous. Keep shining and enjoy this 
              creative adventure! 🌟🚀
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
              <Table3 />
            </GeneralDiv>
          </LargeConatiner>

          <YoutubeEmbed
            embedId="YOUR_NEW_VIDEO_ID" // Replace with the actual video ID for Generative AI
            link="https://www.youtube.com/embed/" // Link prefix
          />
        </Domain>
      </div>
    );
  }
}
