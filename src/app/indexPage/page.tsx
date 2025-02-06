"use client"

import { ChangeEvent, useState } from "react"


const indexPage = (): JSX.Element => {

    const [term, setTerm] = useState<string>('')
    const [options, setOptions] = useState<[]>([])

    const getSearch = (value: string) => {

        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
        .then( (res) => res.json())
        .then( (data) => setOptions(data))
    }

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setTerm(value)

        if(value === '') return

        getSearch(value)

    }

    return (
        <main className="flex justify-center items-center w-full">

            <section className="w-full 
                md:max-w-[500px] 
                p-4 
                flex-col 
                text-center 
                items-center 
                justify-center 
                md:px-10 
                lg:p-24 
                h-full 
                lg:h-[500px]">
                <h1 className="text-5xl font-bold">Weather</h1>
                <form className="max-w-md mx-auto mt-4">
                    <label className="mb-2 text-sm font-medium sr-only">Search...</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        </div>
                        <input 
                            type="search" 
                            id="default-search"
                            className="
                            block 
                            w-full 
                            p-4 
                            ps-10 
                            text-sm 
                            text-blue-800 
                            rounded-lg 
                            bg-white-50 
                            focus:ring-gray-100 
                            focus:border-gray-300 
                            dark:bg-gray-100 
                            dark:border-gray-200
                            dark:placeholder-gray-100 
                            dark:text-grey 
                            dark:focus:ring-blue-100 
                            dark:focus:border-blue-100" 
                            placeholder="Search City or ZIP..." required 
                            onChange={onSearchChange}/>
                        <ul className="
                        absolute 
                        top-15 
                        bg-white 
                        ml-1
                        rounded-b-md">                       
                        {options.map((option: {name: string, index: number}) => (
                           <li key={option.name + '_' + option.index}>
                                <button className="
                                text-left
                                text-sm
                                w-full
                                hover:bg-zinc-600
                                hover:text-white
                                px-2
                                py-1
                                cursor-pointer">
                                {option.name}
                                </button>
                           </li>
                        ))}
                        </ul>
                        <button 
                            type="submit" 
                            className="
                            text-white 
                            absolute 
                            end-2.5 
                            bottom-2.5 
                            bg-blue-700 
                            hover:bg-blue-800 
                            focus:ring-4 
                            focus:outline-none 
                            focus:ring-blue-300 
                            font-medium 
                            rounded-lg 
                            text-sm px-4 py-2 
                            dark:bg-blue-600 
                            dark:hover:bg-blue-700 
                            dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </section>

        </main>
    )
}
export default indexPage