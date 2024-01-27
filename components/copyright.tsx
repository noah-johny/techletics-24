const Copyright = () => {
  return (
    <div className="relative min-h-16 flex items-center justify-center overflow-clip bg-tertiary">
      <div className="absolute mt-2 md:mt-8">
        <span className="text-stroke-secondary font-bold text-transparent lowercase font-primary text-8xl md:text-9xl whitespace-nowrap tracking-widest leading-none align-middle">
          ͲechlςͲics
          {/* <span className="font-secondary font-extrabold">&apos;24</span> */}
        </span>
      </div>
      <div>
        <span className="text-sm sm:text-md md:text-lg font-secondary items-center justify-center flex flex-wrap">
          <span className="whitespace-nowrap">Copyright © 2024 </span>
          <span className="text-primary whitespace-nowrap">
            Christ College of Engineering
          </span>
          .<span className="whitespace-nowrap">All Rights Reserved</span>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
