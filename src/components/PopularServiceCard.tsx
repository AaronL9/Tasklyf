import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function PopularServiceCard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[321px] w-[359px] flex-col rounded border border-secondary-grey">
      <div className="flex h-[170px] w-full items-start justify-between bg-[url('/images/plumbing.webp')] bg-contain bg-no-repeat px-2 pt-2">
        <p className="w-fit rounded-md bg-white bg-opacity-75 px-[6px] py-[2px]">
          John Doe
        </p>
        <div className="flex rounded-md bg-white px-[6px] py-[2px]">
          <img src="/star.svg" alt="" />
          <span>5</span>
        </div>
      </div>
      <div className="px-2">
        <p className="text-xl font-semi-bold">Plumbing</p>
        <p className="flex items-center gap-1 text-primary-grey">
          <img src="/location.svg" />
          Pangasinan, Dagupan City
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between p-2">
        <p className="font-semi-bold">₱500</p>
        <Button
          onClick={() => navigate("service-details")}
          className="rounded-md bg-[#F7F7FF] p-[9px] text-blue hover:border hover:bg-white"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default PopularServiceCard;
