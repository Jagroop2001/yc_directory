import React from 'react'
import Form from "next/form"
import SearchFormReset from '@/app/components/SearchFormReset'
import { Search } from 'lucide-react'

const SearchFrom=({query}:{query:string})=> {
    console.log("query",query)
  return (
    <Form action='/' scroll={false} className='search-form'>
        <input
         name='query'
         defaultValue={query}
         className='search-input'
         placeholder='Seach Startups'
        />
        <div className='flex gap-2'>
            {query && <SearchFormReset/>}
            <button type='submit' className='search-btn text-white'>
                <Search className='size-5'/>
            </button>

        </div>

    </Form>
  )
}

export default SearchFrom;