import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function BookingPage() {
  return (
    <Tabs defaultValue="active" className="mb-10 mt-5 w-full">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="success">Success</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="grid w-max grid-cols-[max-content_200px] items-center gap-y-2 rounded-xl border border-secondary-grey p-4">
          <div className="row-span-2">
            <p className="text-blue">#123456</p>
            <p className="text-lg font-semi-bold">Plumbing</p>
            <p className="text-primary-grey">22 Sep 21, 03:00 - 04:30 PM</p>
          </div>
          <p className="bg-blue-opacity-20 h-fit w-fit justify-self-end rounded-md px-4 py-1 font-semi-bold text-blue">
            Accepted
          </p>
          <p className="justify-self-end text-xl font-semi-bold">₱150</p>
          <hr className="col-span-full" />
          <div>
            <p className="font-semi-bold">Brien Myell</p>
            <p className="flex gap-2 text-yellow">
              <img src="/star.svg" /> 4.8
            </p>
            <p className="text-primary-grey">192 Ratings</p>
          </div>
          <img
            src="/images/sample-profile.jpg"
            className="h-[40px] w-[40px] justify-self-end rounded-full object-cover"
            alt=""
          />
        </div>
      </TabsContent>
      <TabsContent value="success">
        <p className="text-primary-grey">Nothing here</p>
      </TabsContent>
      <TabsContent value="cancelled">
        <p className="text-primary-grey">Nothing here</p>
      </TabsContent>
    </Tabs>
  );
}

export default BookingPage;
