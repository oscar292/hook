import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setSate]=useState({data: null, loading:true, error: null});

    useEffect(()=>{
        return ()=>{
            isMounted.current = false;
        }
    },[])

    useEffect(()=>{

        setSate({data: null, loading:true, error: null})

        const fetchData = async () =>{

            try {

                const resp = await fetch(url);                

                if(!resp.ok){
                    throw new Error('La URL no esta respondiendo');
                }

                const data = await resp.json();

                if(isMounted.current){
                    setSate({
                        data,
                        loading: false,
                        error:null
                    });
                }else{
                    console.log('setSate no se llamo');
                }

            }catch(error){

                setSate({data:null,loading: false, error: error.message})
                
            }
        }
        fetchData();
    }, [url])

    return state;

}
