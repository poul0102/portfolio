const CertificationItem = ({ certification }) => {
    return (
        <article className="bg-white p-[15px_20px] mb-[15px] border-l-[4px] border-[#BDBDBD] rounded-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#919191] mb-[8px] font-bold">{certification.title}</h3>
            <ul>
                <li><strong>발급 기관: </strong> {certification.publisher}</li>
                <li><strong>취득일: </strong> {certification.date}</li>
            </ul>
        </article>
    );
};

export default CertificationItem;