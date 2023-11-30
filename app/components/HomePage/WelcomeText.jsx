import Button from "../UI/Button";

function WelcomeText() {
  return (
    <div className="flex flex-col gap-5  max-w-3xl min-h-[40vh] mx-auto p-10 items-center  sm:max-w-sm  sm:items-start">
      <h1 className="sm:text-2xl lg:text-3xl font-extrabold">Dobrodošli na MungosSport!</h1>
      <p className="sm:max-w-sm">
      Tvoj izvor strasti i uzbuđenja u svetu sporta! 
      Sa našom inovativnom aplikacijom, prati najnovije informacije o predstojećim utakmicama, uživo prati rezultate i spoji se sa strastvenim 
      ljubiteljima sporta putem uzbudljivih komentara. 
      
      </p>
      <Button
        id="signIn"
        className=" flex text-black justify-center relative w-fit px-6 py-2 mt-3 after:bg-amber-400 after:w-full  after:bottom-[-.5em]  after:absolute  after:left-[50%] after:translate-x-[-50%] after:h-[2px] dugme "
      >
        Započni
      </Button>
    </div>
  );
}

export default WelcomeText;
