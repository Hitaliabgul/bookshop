import React from 'react'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

                <div className='order-2 md:order-1 w-full md:w-1/2 mt:12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='font-bold text-4xl'>There is nothing better than to read, Welcome here to learn something <span className='text-pink-500'>new everday !!!</span></h1>
                        <p className='text-xl'>Learning from books is learning from experience of others. From reading, we learn what others have learned
                            in their lifetime and so we summarily live numerous lifetimes. Personally experiencing a lesson yields
                            better understanding of what is read.</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="mt-6 btn btn-secondary">Submit</button>

                </div>

                <div className='order-1 w-full md:w-1/2 '>
                    <div className="carousel w-full mt-32 rounded">
                        <div id="item1" className="carousel-item w-full ">
                            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src="https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner