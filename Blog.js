import React from 'react'
import Navbar from '../components/Navbar'

const Blog = () => {
    return (
        <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
            <div className='w-full'>
                <Navbar/>
            </div>
            <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Blogs</p>
            <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
                <p className='text-xl font-bold text-white '>1. The Beauty of Physics Demonstrations: Why Teaching with Experiments Works 
                    <span className='text-sm italic text-slate-400'> Published on: February 5, 2025</span>
                </p>
                <p className='text-lg text-slate-600 mt-1 ml-4'>Physics isn’t just about equations and theories—it’s about understanding the natural 
                    world through observation. In this post, I discuss why demonstrations in physics education not only make learning fun but also help 
                    to solidify concepts in ways that words and formulas alone cannot. I'll also share some of my favorite experiments that I’ve used over 
                    the years to bring physics to life in the classroom.
                </p>
    
                <p className='text-xl font-bold text-white mt-5'>2. The Importance of Curiosity in Scientific Exploration 
                    <span className='text-sm italic text-slate-400'> Published on: January 22, 2025</span></p>
                <p className='text-lg text-slate-600 mt-1 ml-4'>One of the most powerful tools a physicist can possess is curiosity. It drives us to 
                    ask questions, explore new ideas, and constantly seek understanding. In this post, I delve into how curiosity has shaped my own research
                     in astrophysics and how it can inspire the next generation of scientists to make groundbreaking discoveries.
                </p>
    
                <p className='text-xl font-bold text-white mt-5'>3: How to Love Physics: A Guide for Beginners 
                    <span className='text-sm italic text-slate-400'> Published on: December 15, 2024</span></p>
                <p className='text-lg text-slate-600 mt-1 ml-4'>Physics can seem intimidating, but I’ve always believed that anyone can love the subject 
                    with the right approach. In this blog post, I share tips and advice on how to begin your journey into physics, even if you’ve never 
                    studied it before. From understanding the basics to diving into advanced topics, this post will guide you through the process of 
                    developing a deep appreciation for the subject.
                </p>
    
                <p className='text-xl font-bold text-white mt-5'>4: The Role of Online Education in Modern Science Learning 
                    <span className='text-sm italic text-slate-400'> Published on: November 10, 2024</span></p>
                <p  className='text-lg text-slate-600 mt-1 ml-4'>The world of education has evolved dramatically, especially with the advent of online 
                    platforms. In this post, I reflect on my experience with MIT’s OpenCourseWare and how online education has made learning physics more 
                    accessible to people around the world. I explore both the benefits and challenges of digital education and what I think the future holds.
                </p>
    
                <p className='text-xl font-bold text-white mt-5'>5: Exploring the Universe: My Journey in Astrophysics 
                    <span className='text-sm italic text-slate-400'>Published on: October 5, 2024</span></p>
                <p  className='text-lg text-slate-600 mt-1 ml-4'>Throughout my career, I’ve been fortunate to work on exciting research projects in the 
                    field of X-ray astronomy. In this post, I share some highlights from my research and discuss how understanding cosmic radiation 
                    has expanded our knowledge of the universe. I also offer a glimpse into what the future holds for astrophysics as technology and
                     research continue to progress.
                </p>
            </div>
    
        </div>
      )
    
}

export default Blog