import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PopularServiceCard from "../components/PopularServiceCard";
import ServiceCard from "../components/ServiceCard";
import RatingsCard from "@/components/RatingsCard";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="mt-20 flex w-full justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="w-[567px] font-heading text-xxl font-extra-bold leading-tight">
            Book Trusted Local Services Anytime, Quickly and Easily
          </h1>

          <div className="flex w-fit items-center gap-3 rounded-full border-2 border-tertiary-grey px-6 py-2">
            <input
              className="focus:outline-none"
              type="text"
              placeholder="What’s on your to do list?"
            />
            <div className="flex items-center gap-2 border-l border-l-tertiary-grey pl-5">
              <img src="/location.svg" />
              <input
                className="max-w-20 focus:outline-none"
                type="text"
                placeholder="Zip code"
              />
              <div
                className="rounded-full bg-blue p-3 hover:cursor-pointer"
                onClick={() => navigate("search-results")}
              >
                <img src="/search.svg" />
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/hero-image.jpg"
          className="h-[242px] w-[428px] rounded-md object-fill"
        />
      </section>

      <section className="my-20">
        <h2 className="mb-10 text-h2 font-bold">Featured Services</h2>
        <div className="flex flex-wrap gap-5">
          <ServiceCard name="AC Services" svg="/ac.svg" />
          <ServiceCard name="Cleaning" svg="/vacuum.svg" />
          <ServiceCard name="Painting" svg="/paint-roller.svg" />
          <ServiceCard name="Electrical" svg="/plug.svg" />
          <ServiceCard name="Local Moving" svg="/truck.svg" />
          <ServiceCard name="Car Wash" svg="/car-wash.svg" />
          <ServiceCard name="Computer" svg="/computer.svg" />
          <ServiceCard name="Plumbing" svg="/pipe.svg" />
        </div>
      </section>

      <section className="my-20 w-full">
        <h2 className="mb-10 text-h2 font-bold">Most Popular Services</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PopularServiceCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="my-20 flex w-full justify-between">
        <div className="max-w-[439px]">
          <h2 className="mb-2 text-xxl font-bold leading-10">
            Get the <span className="text-blue">app.</span> <br />
            Get things done.
          </h2>
          <p className="mb-5 text-primary-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <div className="flex">
            <img
              className="h-[49px] w-[140px] object-cover"
              src="/images/app-store-badge.png"
            />
            <img
              className="h-[49px] w-[140px] object-cover"
              src="/images/google-play.png"
            />
          </div>
        </div>
        <div className="flex h-[415px] w-[545px] justify-center gap-4 rounded-[15px] bg-gradient-to-t from-[#8E918E] to-[#F2F7F2] py-5">
          <img
            className="h-[320px] rounded-[20px] object-contain"
            src="/images/welcome.jpg"
          />
          <img
            className="rounded-[10px] object-contain"
            src="/images/home.jpg"
          />
        </div>
      </section>

      <section className="my-20">
        <h2 className="mb-2 text-xxl font-bold">
          See what happy customers are saying about{" "}
          <span className="text-blue">Tasklyf</span>
        </h2>
        <div className="flex flex-wrap gap-10">
          <RatingsCard />
          <RatingsCard />
          <RatingsCard />
          <RatingsCard />
          <RatingsCard />
          <RatingsCard />
        </div>
      </section>
    </>
  );
}

export default HomePage;
