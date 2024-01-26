export default function Footer() {
  return (
    <div className="relative min-h-[100px] flex items-center justify-center">
      <div className="absolute  ">
        <span className="text-stroke-secondary font-bold text-transparent lowercase font-primary text-[9vw] md:text-[8vw] tracking-wider">
          ͲechlςͲics &apos;
          <span className="font-secondary font-extrabold">24</span>
        </span>
      </div>
      <div>
        <span className="text-[10px] sm:text-md md:text-lg font-secondary">
          Copyright © 2024{" "}
          <span className="text-primary">Christ College of Engineering</span>.
          All Rights Reserved
        </span>
      </div>
    </div>
  );
}
