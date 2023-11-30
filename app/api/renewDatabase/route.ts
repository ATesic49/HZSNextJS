import prisma from "@/app/lib/PrismaClient";
import axios from "axios";
import { json } from "stream/consumers";

export async function GET() {
  const liveUtakmice = await axios.get(
    "/https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=60580022b1a62eee1fb1cb88759be5c4"
  );

  const odigraneUtakmice = await axios.get(
    "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard"
  );

  console.log(odigraneUtakmice.data.events);

  return new Response(JSON.stringify({ hello: odigraneUtakmice.data }));
}
