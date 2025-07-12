const TimelineItem = ({ item }) => {
  const isLeft = item.align === 'left';
  const isButton = item.type === 'certification' || item.type === 'project';
  const buttonClass =
    item.type === 'certification'
      ? 'cerButton'
      : item.type === 'project'
      ? 'proButton'
      : '';

  return (
    <div
      className={`relative w-1/2 px-[60px] py-[30px] ${
        isLeft ? 'left-0' : 'left-1/2'
      }`}
    >
      {/* 선 연결 포인트 */}
      <div
        className={`absolute w-[20px] h-[20px] rounded-full border-[2px] border-[#BDBDBD] bg-white z-[1] top-1/2 -translate-y-1/2 ${
          isLeft ? 'right-[-11px]' : 'left-[-12px]'
        }`}
      ></div>

      <div
        className={`absolute w-[90px] h-[2px] bg-[#BDBDBD] top-1/2 -translate-y-1/2 z-[1] ${
          isLeft ? 'right-[11px]' : 'left-[11px]'
        }`}
      ></div>

      {/* 날짜 */}
      <div
        className={`absolute text-[18px] font-bold text-[#BDBDBD] top-1/2 -translate-y-1/2 ${
          isLeft ? 'right-[-130px]' : 'left-[-130px]'
        }`}
      >
        {item.date}
      </div>

      {/* 아이콘 */}
      <div
        className={`absolute w-[30px] h-[30px] rounded-full border-[2px] border-[#BDBDBD] bg-white z-[1] top-1/2 -translate-y-1/2 ${
          isLeft ? 'right-[90px]' : 'left-[90px]'
        }`}
      ></div>

      {/* 콘텐츠 */}
      {isButton ? (
        <button
          className={`timeline-content ${buttonClass} w-full border-[2px] border-[#BDBDBD] rounded-full px-[30px] py-[30px] text-center hover:bg-[#BDBDBD]`}
        >
          <h3 className="font-bold">{item.title}</h3>
          {item.period && <p className="pt-2">{item.period}</p>}
        </button>
      ) : (
        <div className="timeline-content w-full border-[2px] border-[#BDBDBD] rounded-full px-[30px] py-[30px] text-center">
          <h3 className="font-bold">{item.title}</h3>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
