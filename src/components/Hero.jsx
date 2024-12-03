import Button from "./Button";


export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[1200px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
        <span className="text-blue-400 font-medium">Ut illum recusandae </span>
        adipisci itaque quaerat voluptatibus aliquam sequi.{" "}
        <span className="text-blue-400 font-medium">
          Et rerum molestiae{" "}
        </span>{" "}
        reiciendis saepe deleniti optio quod enim temporibus dolor, aspernatur
        corrupti!
      </p>
      <Button func = {() => {
        window.location.href = '#generate'
      }}
      text={"Accept & Begin"} />
    </div>
  );
}
