function ServiceCard({ name, svg }: { name: string; svg: string }) {
  return (
    <div className="flex h-[160px] w-[265px] flex-col items-center justify-center rounded-md border border-secondary-grey">
      <img src={svg} alt="" />
      <span className="font-md">{name}</span>
    </div>
  );
}

export default ServiceCard;
