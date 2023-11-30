import Button from "../UI/Button";

function WelcomeText() {
  return (
    <div className="flex flex-col gap-5  max-w-md min-h-[40vh] mx-auto p-10 items-center sm:items-start">
      <h1 className="text-5xl font-extrabold">Design Time!</h1>
      <p>
        Design your own clothes using our amazing AI-powered designer. Be it
        socks, sweatpants, or shirts, you can upload your own images or prompt
        the AI to do it for you! Express your uniqueness through your outfit
        today!
      </p>
      <Button
        id="signIn"
        className=" flex text-black justify-center relative w-fit px-6 py-2 mt-3 after:bg-amber-400 after:w-full  after:bottom-[-.5em]  after:absolute  after:left-[50%] after:translate-x-[-50%] after:h-[2px] dugme "
      >
        Start now!
      </Button>
    </div>
  );
}

export default WelcomeText;
