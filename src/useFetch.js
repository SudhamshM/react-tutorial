import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    // useEffect function runs EVERY TIME there is a render of the component,
    // such as whenever the state changes and causes a render, useEffect runs
    useEffect(function () {
        console.log("Entered useEffect function...")
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch for that resource.")
                    }
                    return res.json()
                })
                .then(data => {
                    console.log("Data: ", data);
                    setData(data);
                    setIsPending(false)
                    setError(null)
                })
                .catch((e) => {
                    setError(e.message);
                    setIsPending(false)
                })
        }, 1000);

    }, [])

    return { data, isPending, error }
}

export default useFetch;