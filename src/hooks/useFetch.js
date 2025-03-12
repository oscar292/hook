import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setSate]=useState({data: null, loading:true, error: null});

    useEffect(()=>{

        setSate({data: null, loading:true, error: null})

        const fetchData = async () =>{

            try {
                const resp = await fetch(url);
                
                if(!resp.ok){
                    throw new Error('La url no esta respondiendo');
                }

                const data = await resp.json();
                setSate({
                    data,
                    loading: false,
                    error:null
                });
                
            }catch(error){
                setSate({data:null,loading: false, error: error.message})
            }
        }

        fetchData();

    },[url])

    return state;

}
