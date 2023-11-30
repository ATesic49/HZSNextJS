import prisma from "@/app/lib/PrismaClient";
import axios from "axios";
import { json } from "stream/consumers";

export async function GET() {
  // const liveUtakmice = await axios.get(
  //   "https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=60580022b1a62eee1fb1cb88759be5c4"
  // );

  const odigraneUtakmice = await axios.get(
    "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard"
  );
  const odigraneData = odigraneUtakmice.data.events;
  // const odigraneArray = odigraneData.forEach((utakmica) => {
  //   const matchString = "Juventus at Real Madrid";
  //   const teams = matchString.split(" at ");
  //   return {
  //     live: false,
  //     HomeTeam: utakmica.name.split(" at ")[0],
  //     AwayTeam: utakmica.name.split(" at ")[0],
  //     HomeTeamImg: utakmica.competitions.competitors[0].team.logo,
  //     AwayTeamImg: utakmica.competitions.competitors[1].team.logo,
  //     score: `1 - 2`,
  //   };
  // });
}
