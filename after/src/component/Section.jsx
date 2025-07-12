const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-[40px] scroll-mt-[150px]">
      <h2 className="text-[2rem] mb-[15px] border-l-[6px] border-[#8c8c8c] pl-[10px] text-[#8c8c8c] font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
