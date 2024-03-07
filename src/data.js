// used to get data for performance measures

const coinsSimplePrice = async (params) => {

    const queryString = new URLSearchParams(params).toString();
    const url = "/simple/price" + '?' + queryString;


    try {
        const response = await fetch(url, {
            method : "GET", 
            mode: "cors",
            headers : {
                "Content-Type": "application/json",
            }
        })
    
        const responseData = response.json();
    
        return responseData;
        
    } catch (error) {
        console.log("Error Occured! ", error);
        return;
    }

}

const coinsData = async(id) => {
    const url = `/coins/${id}`

    try {
        const response = await fetch(url, {
            method : "GET",
            mode: "cors",
            headers:{
                "Content-Type": "application/json",
            }
        })

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export {coinsSimplePrice, coinsData};