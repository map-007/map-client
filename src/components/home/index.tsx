import AutionTable from "./Aution-Table";
import Intro from "./Intro";

const HomeWrapper = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <Intro />
      <AutionTable />
      <div className="h-40 border mb-5">Test Card</div>
    </div>
  );
};

export default HomeWrapper;
