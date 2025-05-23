
import CookieCard from "./Cards/CardType1";
import Button from "./Button";
import CardType2 from "./Cards/CardType2";
import ButtonType1 from "./Button/ButtonType1";
import SubmitButton from "./Button/SubmitButton";

function Home() {

  return (
    <div className="bg-red-300 h-[91dvh] w-[100dvw]">
        <CookieCard />
        <CardType2 />
        <ButtonType1 />
        <SubmitButton />
    </div>
  );
}

export default Home;