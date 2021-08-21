import React, { useState } from "react";
import "./styles.css";

var streamerList = {
  Amazon: [
    {
      name: "Dead Pigs",
      rating: "97/100",
      description:
        "A bumbling pig farmer, a feisty salon owner, a sensitive busboy, an expat architect and a disenchanted rich girl converge and collide as thousands of dead pigs float down the river towards a rapidly-modernizing Shanghai."
    },
    {
      name: "My Heart Can't Beat Unless You Tell It To",
      rating: "98/100",
      description:
        "Two mysterious siblings find themselves at odds over care for their frail and sickly younger brother."
    },
    {
      name: "Stalker",
      rating: "92/100",
      description:
        "In a small, unnamed country there's an area called the Zone. It's an unusual area, and within its a place known as the Room, where it's believed wishes are granted. The government declared The Zone a no-go area and have sealed it off. This hasn't stopped people from entering the Zone. A writer, and a professor, want to reach the Zone. Their guide - a man known as a stalker, has a special relation with the Zone."
    }
  ],
  NetFlix: [
    {
      name: "Circus Of Books",
      rating: "98/100",
      description:
        "Circus of Books is a new Netflix documentary about Karen and Barry Mason, the straight, conservative couple who ran a gay porn empire. Here's what happened to them after they shut shop."
    },
    {
      name: "Miles Davis: Birth of the Cool",
      rating: "92/100",
      description:
        "Musicians, scholars, family and friends reflect on the life of jazzer Miles Davis to reveal the man behind the legend. Full access to Davis' estate provides rare footage and photos, outtakes from recording sessions and new interviews."
    },
    {
      name: "Crip Camp: A Disability Revolution",
      rating: "100/100",
      description:
        "A groundbreaking summer camp galvanizes a group of teens with disabilities to help build a movement, forging a new path toward greater equality."
    }
  ],
  HBO: [
    {
      name: "Tumbbad",
      rating: "82/100",
      description:
        "Set in Tumbbad in the 1920s, the story revolves around the three generations of a family facing the consequences when they build a temple for the first-born of a goddess, named Hastar--he who must not be worshiped."
    },
    {
      name: "Gangs of Wasseypur",
      rating: "90/100",
      description:
        "Shahid Khan is exiled after impersonating the legendary Sultana Daku in order to rob British trains. Now outcast, Shahid becomes a worker at Ramadhir Singh's colliery, only to spur a revenge battle that passes on to generations. At the turn of the decade, Shahid's son, the philandering Sardar Khan vows to get his father's honor back, becoming the most feared man of Wasseypur."
    },
    {
      name: "Bhaag Milkha Bhaag",
      rating: "81/100",
      description:
        "The true story of the 'Flying Sikh' - world champion runner and Olympian Milkha Singh -- who overcame the massacre of his family, civil war during the India-Pakistan partition, and homelessness to become one of India's most iconic athletes."
    },
    {
      name: "Queen",
      rating: "84/100",
      description:
        " A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled."
    }
  ]
};

export default function App() {
  const [selectedStreamer, setStreamer] = useState("Amazon");

  function showStreams(streamer) {
    setStreamer(streamer);
  }

  return (
    <div className="App">
      <h1>Rotten Fish</h1>
      <hr></hr>
      <h2>Popular Movies On:</h2>
      <div className="windowDiv">
        {Object.keys(streamerList).map((items) => (
          <button onClick={() => showStreams(items)} className="buttonDiv">
            {items}
          </button>
        ))}
      </div>
      <hr />
      <div className="listDiv">
        <ul>
          {streamerList[selectedStreamer].map((items) => (
            <li className="itemDiv" key={items.name}>
              <p style={{ fontSize: "larger" }}>{items.name}</p>
              <p style={{ fontSize: "smaller", opacity: "0.6" }}>
                {items.description}
              </p>
              <p style={{ fontSize: "smaller" }}>{items.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
