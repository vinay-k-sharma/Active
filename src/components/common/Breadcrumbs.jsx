import { useLocation,Link } from "react-router-dom";

const Breadcrumbs = () => {
    const path = useLocation();
 
    const breadcrumb = path.pathname.split('/').filter(Boolean).map(segment => 
        segment.charAt(0).toUpperCase() + segment.slice(1)
    ).join(' / ');
    return (
        <div className=" p-[20px] relative bg-[#f3f4f4] block ">
            <div className="md:pl-[75px]">
            <h1 className="text-[#2d465e] text-[24px] mb-5 font-x[300] leading-[1.2] block">{breadcrumb}</h1>
            <ol className="flex flex-wrap text-[14px] font-normal">
                <li className="list-item">
                <Link className="text-[#34bf49] transition-[0.3] cursor-pointer" to='/'>Home</Link>
                </li>
                <li className="list-item pl-[10px] ">
                  /  {breadcrumb}
                </li>
            </ol>
            </div>
        </div>
    );
};

export default Breadcrumbs;