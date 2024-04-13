import React from 'react'

const Sidebar = () => {
  return (
    <div className="px-2 my-5 py-2 col-span-1 bg-gray-500 rounded-r-xl">
        <div className=' bg-gray-400 p-7 rounded-xl m-3 ml-2' >
            <h1 className='text-lg mb-3 font-semibold' >Search Books</h1>
            <form action="{% url 'item:browse' %}" method="get">
                <input placeholder="Books ..." type="text" className="w-full mt-2 py-4 px-6 border rounded-xl"/>
                <button className="w-full mt-2 py-2 px-6 rounded-xl bg-teal-400 text-white text-lg font-semibold" >Search</button>
            </form>
        </div>
    </div>
  )
}

export default Sidebar