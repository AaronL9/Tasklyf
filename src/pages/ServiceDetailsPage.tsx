import { useState } from "react";
import ServiceProviderInfo from "@/components/ServiceProviderInfo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

function ServiceDetailsPage() {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <h1 className="bg-pattern my-4 w-full text-center text-xxl font-bold">
        Service Details
      </h1>

      <div className="relative my-10 flex gap-5">
        <section className="w-full max-w-[609px]">
          <h2 className="mb-2 text-xl font-bold">Plumbing</h2>
          <p className="mb-2 flex gap-2">
            <img src="location.svg" /> Pangsinan, Dagupan City
          </p>
          <img className="mb-4 rounded-md" src="/images/plumbing.webp" />

          <h2 className="text-xl font-bold">Service Details</h2>
          <p className="mb-4 text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-xl font-bold">Service Provider</h2>
          <section className="my-4 flex flex-wrap gap-9">
            <div className="grid w-[175px] grid-cols-[36px_1fr] grid-rows-2 gap-x-2">
              <img
                className="row-span-full h-[36px] w-[36px] rounded-full"
                src="/images/sample-profile.jpg"
              />
              <p className="text-[12px]">John Doe</p>
              <p className="text-[12px] text-primary-grey">Plumber</p>
            </div>
            <ServiceProviderInfo />
            <ServiceProviderInfo />
            <ServiceProviderInfo />
            <ServiceProviderInfo />
            <ServiceProviderInfo />
          </section>
        </section>

        <section className="sticky top-4 h-fit w-[402px]">
          <div className="mb-4 flex h-[88px] items-center justify-between rounded-md border border-secondary-grey px-[1rem]">
            <p className="font-semi-bold">₱500</p>
            <p className="flex items-center gap-2 font-semi-bold">
              <img
                className="h-[42px] w-[42px] rounded-full"
                src="/images/sample-profile.jpg"
                alt=""
              />{" "}
              John Doe
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-2 rounded-md border border-secondary-grey p-4">
            <p className="mb-2 text-[20px] font-bold">Service Availability</p>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((value, index) => (
              <div key={index} className="flex justify-between">
                <p className="font-semi-bold">06:00 AM - 10:00 PM</p>
                <p className="font-semi-bold text-primary-grey">{value}</p>
              </div>
            ))}
          </div>

          <Dialog>
            <DialogOverlay className="fixed inset-0 bg-dark opacity-70" />
            <DialogTrigger asChild>
              <Button className="w-full bg-blue font-semi-bold hover:border hover:border-blue hover:bg-white hover:text-blue">
                Book Service
              </Button>
            </DialogTrigger>
            <DialogContent className="h-[650px] overflow-auto sm:max-w-[650px]">
              <DialogHeader>
                <DialogTitle>Information</DialogTitle>
                <DialogDescription>
                  Please fill the form below:
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-3">
                <div className="rounded-md border p-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-fit"
                  />
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow pro to suggest other dates
                    </label>
                  </div>
                </div>
                <div className="w-full rounded-md border p-2">
                  <p className="font-semi-bold">
                    What time of day do you prefer?
                  </p>
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Early Morning (6am - 9am)
                    </label>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Morning (9am - 12pm)
                    </label>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Afternoon (12pm - 3pm)
                    </label>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Late Afternoon (3pm - 6pm)
                    </label>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Evening (6pm - 9pm)
                    </label>
                  </div>
                </div>
              </div>
              <Textarea
                className="focus-visible:outline-blue"
                placeholder="Add description"
              />
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button
                    className="hover:bg-white` bg-muted text-primary-grey hover:border hover:border-primary-grey"
                    type="reset"
                  >
                    cancel
                  </Button>
                </DialogClose>

                <Button
                  className="bg-blue hover:border hover:border-blue hover:bg-white hover:text-blue"
                  type="submit"
                >
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      </div>
    </>
  );
}

export default ServiceDetailsPage;
