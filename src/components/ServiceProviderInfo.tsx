function ServiceProviderInfo() {
  return (
    <div className="grid w-[175px] grid-cols-[36px_1fr] grid-rows-2 gap-x-2">
      <div className="row-span-full flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#F4F5F6]">
        <img src="/person.svg" />
      </div>

      <p className="text-[12px]">John Doe</p>
      <p className="text-[12px] text-primary-grey">Plumber</p>
    </div>
  );
}

export default ServiceProviderInfo;
