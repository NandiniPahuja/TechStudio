import React, { Component } from "react";
import PageHeader from "../generalComponent/PageHeader";
import {
  filterBand,
  returnAllBandWithDivision,
  returnAllBandWithDivision1,
} from "../Middleware/EmpFunction";
import {
  Domain,
  GeneralHeaders,
  LargeConatiner,
  COLORS,
} from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
import Table from "../EmploymentDomain/Table";
import YoutubeEmbed from "../YouTube";
import { BCOLOR4, YCOLOR4, XCOLOR4, YCOLOR6 } from "./colors.style";

export default class EmpIndex extends Component {
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
    const band1 = filterBand("AA");
    const band2 = filterBand("A");
    const band3 = filterBand("BB");
    const band4 = filterBand("B");
    const XYAxsis1 = [
      returnAllBandWithDivision(band1),
      returnAllBandWithDivision(band2),
      returnAllBandWithDivision(band3),
      returnAllBandWithDivision(band4),
    ];
    const XYAxsis2 = [
      returnAllBandWithDivision1(band1),
      returnAllBandWithDivision1(band2),
      returnAllBandWithDivision1(band3),
      returnAllBandWithDivision1(band4),
    ];

    const labels = ["AA", "A", "BB", "B"];
    const labels1 = [">=90,000", "60-90,000", "30-60,000", "0-30,000"];
    const labels2 = ["7.5-10", "5-7.5", "2.5-5", "0-2.5"];
    
    return (
      <div className="newdiv1">
        <Domain>
          <PageHeader title={"CLOUD"}></PageHeader>
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
              href="https://medium.com/msackiit/edge-computing-from-frustration-to-fulfillment-in-data-processing-6709321cff96"
              style={{ color: "snow", textDecoration: "none" }}
            >
              Click here to read a blog on Cloud{" "}
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
            <GeneralHeaders>Cloud</GeneralHeaders>
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
              Hey girl! 🌟 Ever wondered where all your fabulous Insta pics and TikTok vids live? 
              Yep, that’s right—up in the cloud! ☁️<br /> <br />
              Now, picture this: You’re at a sleepover with your besties, and instead of fighting 
              over who gets to use the one laptop, you’re all accessing your favorite apps and photos
               from your own devices, all thanks to the cloud. It’s like having a shared secret diary
                that only you and your friends can access, no matter where you are. Whether you're 
                sharing pics from your latest adventure or collaborating on that fab group project, 
                the cloud makes it super easy and fun!<br />{" "}
              <br /> But wait, there’s more! 🌈 The cloud isn’t just about sharing your latest 
              selfies or keeping your playlist up to date. It’s also a major lifesaver for businesses 
              and techies who need to store loads of data without having to invest in pricey equipment. 
              Imagine if you had to buy a whole bunch of notebooks just to keep track of your homework—sounds
               like a lot of work, right? The cloud is like having a magical notebook that never runs out 
               of pages and is always right there when you need it. <br />{" "}
              <br />
              Plus, the cloud can be super eco-friendly! 🌍 Instead of everyone having their own huge
               servers that use tons of energy, we use big, efficient data centers that do all the heavy 
               lifting. It’s like swapping out those old, clunky textbooks for a sleek, digital reader—better
                for you and for the planet! So not only are you getting the best tech, but you’re also helping 
                out the environment. How cool is that?<br /> <br />
              So, there you have it, cloud computing in all its sparkly glory! It’s all about making life easier,
               more fun, and super connected. Whether you’re streaming your favorite shows, collaborating on 
               projects, or just keeping your photos safe, the cloud is there to make everything a little bit 
               more fabulous. 🌟 Keep shining bright and enjoy all the amazing things the cloud has to offer!

              {" "}
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
              <Table />
            </GeneralDiv>
          </LargeConatiner>

          <YoutubeEmbed
            embedId="8C_kHJ5YEiA" // New video ID
            link="https://www.youtube.com/embed/" // Link prefix
          />
        </Domain>
      </div>
    );
  }
}
