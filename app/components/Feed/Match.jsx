// ubaci constante u html tako da se podaci dinamicki display-juju
import Button from "../UI/Button";
import Link from "next/link";
const getMatches = async () => {
  let api_key = "";
  isUpcoming ? (api_key = "api key za predstojece") : "api key za prethodne ";
  const res = await axios.get(
    "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard"
  );
  const data = res.data.events;
  return data;
};
function Match(utakmice) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font rounded-3xl">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-5 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div> */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href={`/feed/isUpcoming/match`}>
              <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Saznaj vise
              </Button>
            </Link>
          </div>
        </div>
        {utakmice.map((utakmica) => {
          return (
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                {utakmica.home_team} cs {utakmica.away_team}
                <br className="hidden lg:inline-block" />
                readymade glute n
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <Link href={`/feed/isUpcoming/match`}>
                  <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Saznaj vise
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Match;
