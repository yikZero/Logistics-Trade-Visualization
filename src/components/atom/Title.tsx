interface TitleProps {
  title: string;
  showTimeOptions?: boolean;
}

function Title({ title, showTimeOptions = false }: TitleProps){
  return (
    <>
      <section
        className={`flex flex-row w-full -mb-4 ${
          showTimeOptions ? "justify-between" : "justify-start"
        }`}
      >
        <h1 className="text-base font-semibold text-white">{title}</h1>
        {showTimeOptions && (
          <div className="flex flex-row gap-3 text-sm">
            <div>近七天</div>
            <div>近一月</div>
            <div>近六月</div>
          </div>
        )}
      </section>
    </>
  );
}

export default Title;
