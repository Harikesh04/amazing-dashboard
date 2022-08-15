import React, { Fragment } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Barchart from "../Barchart/Barchart.js";
import Linechart from "../Linechart/Linechart.js";
import TeamMember from "../TeamMember/TeamMember.js";

const Dashboard = () => {
  const value = 0.5;
  const value2 = 0.25;
  const value3 = 0.59;
  const value4 = 0.75;

  const bestmember = [
    {
      name: "Harikesh Singh",
      image:
        "https://res.cloudinary.com/dhuv7iqg9/image/upload/v1659892713/Avtars/profile_yduqv1.jpg",
      post: "Software Developer",
      rating: "10",
    },
    {
      name: "Rahul Dravid",
      image:
        "https://th.bing.com/th/id/OIP.W9wfC8J5svSM08AWbhTq9AHaEK?pid=ImgDet&rs=1",
      post: "Team Lead",
      rating: "9.7",
    },
    {
      name: "Sachin Tendulkar",
      image:
        "https://1.bp.blogspot.com/-nBHzA-iv-cQ/Xz4sUunT90I/AAAAAAAAA1Y/wBISPhPEhLQC1cwHCUu3mKGMlwmwx0TmwCLcBGAsYHQ/s1200/ezgif.com-webp-to-jpg.jpg",
      post: "Manager",
      rating: "9.0",
    },
    {
      name: "Sonal Tiwari",
      image:
        "https://www.dtstudios.co.uk/wp-content/uploads/2019/01/professional-portrait-photography-worcestershire.jpg",
      post: "Project Manager",
      rating: "8.9",
    },
  ];
  return (
    <div className="dashboard">
      <div className="nav">
        <Header />
      </div>
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="piechart">
        <div className="card">
          <div className="cardsection1">
            <p>Work</p>
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
              className="CircularProgress"
              styles={buildStyles({
                rotation: 0.45,

                pathColor: ` #FFD339`,
                textColor: " #FFD339",
                trailColor: "#222240",
              })}
            />
          </div>
          <div className="cardsection2">
            <p>75</p>
            <p>Works Today</p>
          </div>
        </div>
        <div className="card">
          <div className="cardsection1">
            <p>Analytics</p>
            <CircularProgressbar
              value={value2}
              maxValue={1}
              text={`${value2 * 100}%`}
              className="CircularProgress"
              styles={buildStyles({
                rotation: 0.75,

                pathColor: `  #FF6D39`,
                textColor: "  #FF6D39",
                trailColor: "#222240",
              })}
            />
          </div>
          <div className="cardsection2">
            <p>310</p>
            <p>Analytics Today</p>
          </div>
        </div>
        <div className="card">
          <div className="cardsection1">
            <p>Statistics</p>
            <CircularProgressbar
              value={value3}
              maxValue={1}
              text={`${value3 * 100}%`}
              className="CircularProgress"
              styles={buildStyles({
                rotation: 0.45,

                pathColor: `#9539FF`,
                textColor: "#9539FF",
                trailColor: "#222240",
              })}
            />
          </div>
          <div className="cardsection2">
            <p>59</p>
            <p>Works Today</p>
          </div>
        </div>
        <div className="card">
          <div className="cardsection1">
            <p>Tasks</p>
            <CircularProgressbar
              value={value4}
              maxValue={1}
              text={`${value4 * 100}%`}
              className="CircularProgress"
              styles={buildStyles({
                rotation: 0.45,

                pathColor: `#3954FF`,
                textColor: "#3954FF",
                trailColor: "#222240",
              })}
            />
          </div>
          <div className="cardsection2">
            <p>75</p>
            <p>Task Today</p>
          </div>
        </div>
      </div>
      <div className="activities">
        <p>Activities</p>
        <Barchart/>
      </div>
      <div className="teamActivities">
        <p>TeamActivities</p>
        
        <Linechart />
        
      </div>
      <div className="teamPerformence">
        <p> Team Member Performance</p>

        {bestmember && bestmember.map((props) => <TeamMember props={props} />)}
      </div>
    </div>
  );
};

export default Dashboard;
