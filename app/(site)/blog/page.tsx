import BlogCard from "@/components/blog-card"

const BlogPage = () => {
  return (
    <main className="w-full">
         <div 
          id='contact'
          className="w-full h-[40vh] md:h-[60vh] px-6 md:px-0 lg:h-[70vh] overflow-hidden bg-slate-300 relative flex flex-col items-center justify-center">
           <div className="absolute top-0 w-full right-0 bg-black/65 p-6 md:p-0 flex items-center justify-center h-full">
             <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[60%] lg:w-[50%] ">
                 <h3 className="text-lg md:text-xl font-bold text-center text-zinc-200">Featuring</h3>
                 <h2 className='text-xl md:text-2xl font-bold text-center md:font-extrabold text-zinc-200'>
                     Empowering small Businesses, Tech Tools and Strategies for Growth
                 </h2>
                 <p className='text-sm font-medium text-zinc-300 text-center'>
                 AI-driven solutions. Our journey began with a simple yet powerful
idea: to leverage technology to create seamless, personalized customer service experiences.
With a team of passionate innovators and tech enthusiasts, we have grown from a small startup
to a trusted partner for numerous businesses worldwide.
                 </p>
             </div>
          </div>
        </div>
        <div className="w-full mt-6 md:w-[90%]  mx-auto px-7 md:px-0 flex flex-col gap-4">
             <h2
               className="text-xl md:text-2xl font-bold text-center md:font-extrabold text-zinc-800"
             >Our Blogs</h2>
        </div>
        <div className="w-[90%] md:w-[90%] lg:w-[80%] gap-4 mt-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1,2,3,5,6,7,8,8,8].map((g,i)=>(
                 <BlogCard key={i}/>
              ))
              }
        </div>
    </main>
  )
}

export default BlogPage