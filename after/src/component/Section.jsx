const Section = ({ id, title, children, showTitle = true, minHeight = true}) => {
  return (
    <section id={id} className="{`${minHeight ? 'min-h-screen' : ''} scroll-mt-[70px]">
      {showTitle && (
        <div className="flex items-center w-full mb-[50px]">
          <hr className="flex-grow border-t-[3px] border-white" />
          <h2 className="mx-[30px] text-4xl font-black text-white whitespace-nowrap">
            {title}
          </h2>
          <hr className="flex-grow border-t-[3px] border-white" />
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
