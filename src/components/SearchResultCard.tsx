import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function SearchResultCard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[186px] items-center rounded-md border border-secondary-grey p-4">
      <div className="grid h-full w-full grid-cols-[147px_1fr] grid-rows-2 flex-col gap-x-2">
        <div className="row-span-full w-[147px] rounded-md bg-[url('/images/plumbing.webp')] bg-cover bg-center"></div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semi-bold">John Doe</p>
          <p className="w-fit rounded-[4px] bg-[#F7F7FF] p-[5px] text-center text-sm text-blue">
            Plumbing
          </p>
          <p className="flex gap-2 text-sm text-primary-grey">
            <img src="/location.svg" />
            Pangasinan, Dagupan City
          </p>
        </div>
        <p className="row-span-2 place-self-end justify-self-start font-semi-bold">
          ₱500
        </p>
      </div>
      <Button
        className="bg-blue font-semi-bold hover:border hover:border-blue hover:bg-white hover:text-blue"
        variant="default"
        onClick={() => navigate("/service-details")}
      >
        Book Now
      </Button>
    </div>
  );
}

export default SearchResultCard;
