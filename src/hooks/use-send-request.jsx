export default function useSendRequest(){
    async function sendRequest(url, init){
        const URL =  import.meta.env.VITE_API_DOMAIN + url;
        const INIT = {
            method: "GET",
            headers: {
                'accept': 'application/json',
                'content-type': "application/json",
            },
            ...init
        }

        let request = null;
        let response = null;

        try {
            request = await fetch(URL, INIT);
            response = await request.json();
        }catch (Exception){
           console.log(Exception)
        }

        return {request, response};
    }

    return [sendRequest];
}