import Galaxy from "../assets/img/galaxy.jpg";

function Background() {

  return (
    <>
      <div className="h-full">
        <img src={Galaxy} alt="背景" className="h-full opacity-60"/>
      </div>
    </>
  );
}

export default Background;
