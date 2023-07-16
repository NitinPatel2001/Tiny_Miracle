import React from "react";
import SchemeCard from "./Schemecard";
import "./Schemes.css";
import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Schemes() {
    const [EventData, setEventData] = useState([]);
    useEffect(() => {
    axios
      .get("https://tiny-miracle-backend.onrender.com/details-Event")
      .then((response) => {
        const Event = response.data;
        setEventData(Event);
      })
      .catch((error) => {
        console.error("Failed to retrieve Event data:", error);
      });
  }, []);

  useEffect(() => {
  }, [EventData]);
  console.log(EventData);
  return (
    <div className="scheme_div">
      <div className="schemeHeading">Events</div>
      <div className="schemeCards">
      {EventData.map(Event => (
          <SchemeCard description={Event.description} Event_id={Event._id} EventName={Event.nameOfActivity} StartTime={Event.startDate} Venue={Event.venue} Theme={Event.theme} Invited={Event.invitedCommunity}/>
      ))}
      </div>
    </div>
  );
}
