import CountUp from "react-countup";

interface DataItemProps {
  name: string;
  unit?: string;
  dataNamber: number;
}

function DataItem({ name, unit, dataNamber }: DataItemProps) {
  return (
    <>
      <div className="flex flex-col gap-1 items-center">
        <CountUp
          className="font-[DIN] text-blue-600 font-medium text-2xl tracking-tight"
          end={dataNamber}
          duration={1}
          separator=","
        />
        <div className="flex flex-row text-sm text-gray-100 font-normal relative">
          <div>{name}</div>
          {unit && (
            <div>（{unit}）</div>
          )}
        </div>
      </div>
    </>
  );
}

export default DataItem;
