import React, { Component } from "react";
import PageHeader from "../generalComponent/PageHeader";
import { filterBand, returnAllBandWithDivision, returnAllBandWithDivision1 } from "../Middleware/EmpFunction";
import { Domain, GeneralHeaders, LargeConatiner, COLORS } from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
import YoutubeEmbed from "../YouTube";
import Table3 from "../Module 3/Table3";

export default class Mod3Index extends Component {
  constructor() {
    super();
    this.state = {
      band: 0,
    };
  }

  toggleBand = (e) => {
    this.setState({
      band: e.target.value,
    });
  };

  render() {
    return (
      <div className="newdiv1">
        <Domain>
          <PageHeader title={"Artificial Intelligence"}></PageHeader>
          <GeneralDiv
            style={{
              height: "50px",
              marginBottom: "40px",
              marginLeft: "10%",
              borderRadius: "5px",
              color: COLORS.color5,
              padding: "15px",
            }}
            width="80%"
          >
            <a
              href="https://colab.research.google.com/drive/1Mr9dVTKIafGFrVvmx9fYt1qXdrnji-Y3?usp=sharing"
              style={{ color: "snow", textDecoration: "none" }}
            >
              Click here to read a blog on AI{" "}
            </a>
          </GeneralDiv>
          <LargeConatiner
            style={{
              height: "auto",
              minHeight: "1020px",
              paddingBottom: "50px",
            }}
            id="lrgContEdu"
          >
            <GeneralHeaders>Artificial Intelligence</GeneralHeaders>
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
              Hey girl! 🌟 Let’s talk about something super cool and totally fab: Artificial Intelligence, 
              or as the techies call it, AI! 🤖✨<br /> <br />
              So, imagine you have a magical bestie who’s always there to help you out, whether it’s picking 
              the perfect outfit, helping you ace that tricky math problem, or even suggesting the best Insta 
              filter for your latest selfie. That’s kinda like what AI does! It’s like having a super-smart, 
              digital BFF who’s got your back 24/7.<br /> <br />
              AI is all about teaching computers to think and learn just like us. You know how you learn new 
              things and get better at them over time? Well, AI does the same thing! It can recognize patterns,
               make decisions, and even understand our feelings. It’s like having a techy fairy godmother who’s
                always ready to sprinkle some smart dust on your gadgets. 🌈✨<br /> <br />
                From those cute chatbots that help you shop online to the voice assistants like Siri and Alexa 
                that play your fave tunes, AI is everywhere! It’s making our lives easier, more fun, and super 
                  connected. And the best part? It keeps getting smarter every day!<br /> <br />
                  So next time you’re using your phone or computer, just remember there’s a little bit of AI magic 
                  working behind the scenes to make everything smooth and fabulous. Stay techy and fabulous, girl! 🌟💖
              <br /> <br />
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
            embedId="bknUn7yMwNI" // New video ID
            link="https://www.youtube.com/embed/" // Link prefix
          />
        </Domain>
      </div>
    );
  }
}
