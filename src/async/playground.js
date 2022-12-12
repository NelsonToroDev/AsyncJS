// handle error for a API which doesn't exists
// using Try/catch
export async function runCode(){
    const url = "http:any-domain.com/api/v10";
    const response = await fetch(url);
    return response;
}

try{
    await runCode();
}catch(error){
    throw new Error("API Not found");
}


