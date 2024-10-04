function RatingsCard() {
  return (
    <div className="flex h-[180px] w-[289px] flex-col justify-center gap-2 rounded-[10px] bg-[#F7FAF7] px-4">
      <div className="flex gap-2 text-base font-semi-bold">
        Elizabeth P.
        <div className="flex gap-1">
          <img className="w-5" src="/blue-star.svg" />
          <img className="w-5" src="/blue-star.svg" />
          <img className="w-5" src="/blue-star.svg" />
          <img className="w-5" src="/blue-star.svg" />
          <img className="w-5" src="/blue-star.svg" />
        </div>
      </div>
      <p className="text-[14px] leading-4">
        David did an awesome job assembling crib and dresser for nursery. Really
        appreciate this! He cleaned up the area after his work, organized the
        boxes for easy disposal and went through the
      </p>
      <p className="font-bold text-blue">Home Repair</p>
    </div>
  );
}

export default RatingsCard;
