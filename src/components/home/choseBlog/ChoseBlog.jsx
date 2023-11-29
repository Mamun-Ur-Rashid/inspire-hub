import React from 'react';

const ChoseBlog = () => {
    return (
        <div className='my-20 m-10 z-20 relative'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 '>
                <div className='p-10 '>
                    <h1 className='text-4xl text-blue-500 font-bold'>Chossen a Blog with Categories</h1>
                    <p className='my-5'>Welcome to Inspire Hub, your daily dose of creativity! Explore the beauty of art, innovation, and self-expression. Dive into practical tips and personal stories that empower you to infuse creativity into your routines. Let's make every day an inspiration!!.
                    </p>
                    <div className='flex justify-center items-center'>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 ">
                            Create Your Blog
                        </button>
                    </div>
                </div>
                <div className='w-full '>
                    <img className='object-cover w-full rounded-lg' src="https://i.ibb.co/nPN8NcF/chose.png" alt="chose" />
                </div>
            </div>
        </div>
    );
};

export default ChoseBlog;