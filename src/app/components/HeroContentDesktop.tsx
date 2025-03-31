export default function HeroContentDesktop() {
  return (
    <div className="h-[calc(100vh-20px)] w-[100%] m-[10px] absolute">
      <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-12 grid-rows-8 relative gap-[10px]">
        {/* ROW */}
        <div className="col-span-8 col-start-2 row-start-4">
          <h5 className="text-[60px] p-[0px] m-[0px]">Hello World</h5>
        </div>
      </div>
    </div>
  );
}
