import DataItem from "./atom/DataItem";

function SpecializedBusiness() {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-4">
        <DataItem name="专项委托" unit="笔" dataNamber={123}/>
        <DataItem name="委托完成" unit="笔" dataNamber={120}/>
        <DataItem name="委托金额" unit="万" dataNamber={1197129}/>
        <DataItem name="专项申请" unit="笔" dataNamber={89}/>
        <DataItem name="专项完成" unit="笔" dataNamber={80}/>
        <DataItem name="专项发放" unit="万" dataNamber={1123}/>
      </div>
    </>
  );
}

export default SpecializedBusiness;
