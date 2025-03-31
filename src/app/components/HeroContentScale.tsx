export default function HeroContentScale() {
  return (
    <div className="h-[calc(100vh-20px)] w-[100%] m-[10px] absolute">
      <div className="w-[calc(100%-40px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%-20px)]">
        {/* ROW */}
        <div className="col-span-3 col-start-1 row-start-4 bg-green-800">
          <h5 className="text-[60px] p-[0px] m-[0px]">Hello World</h5>
        </div>
      </div>
    </div>
  );
}
