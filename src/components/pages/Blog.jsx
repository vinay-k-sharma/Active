import { useState } from 'react';
import Pagination from '../common/Pagiation'
import { blogs } from '../../constants'
import Breadcrumbs from '../common/Breadcrumbs';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const shouldRenderPagination = blogs.length > recordsPerPage;
return (
    <>
    <Breadcrumbs/>
        <section className="py-[60px]">
            <div className="flex flex-wrap md:px-[40px] ">
        {
            blogs.slice(indexOfFirstRecord, indexOfLastRecord).map(blog => (
                <div className="md:w-1/3 w-full px-3" key={blog.title}>
                    <img src={blog.image} alt={blog.title} className="w-full max-h-[440px] object-cover object-center" />
                    <div className="p-1 ">
                        <Link to='/blog-details'>
                        <div className='flex flex-row'>
                        <h1 className="text-sm tracking-tight  text-gray-400 mb-1 mt-1">{blog.category}</h1>
                        <GoDotFill className='text-xs tracking-tight  text-gray-400 mb-1 mt-2 mx-2'/>
                        <span className='text-sm tracking-tight  text-gray-400 mb-1 mt-1'>Jan 1, 2022</span>
                        </div>                       
                        <h1 className="text-[20px] font-[700] my-[5px] text-[#2d465e] hover:text-[#34BF49] hover:cursor-pointer mb-3">{blog.title}</h1>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
        </section>
        <section className='mb-5'>
        {shouldRenderPagination && (
          <div className="w-full">
            <Pagination
              nPages={Math.ceil(blogs.length / recordsPerPage)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
        </section>
    </>
)
}

export default Blog
