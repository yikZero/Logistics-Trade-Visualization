function HeadTitle({ title }: { title: string }) {
  return (
    <>
      <h1 className="absolute top-8 left-20 text-4xl font-title text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{title}</h1>
    </>
  );
}

export default HeadTitle;
