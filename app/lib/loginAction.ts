export const loginAction = async(formData: FormData) => {
    type ParamsObj = {
        id: string,
        password: string
    }

    const paramsObj:ParamsObj = {
        id: '',
        password: ''
    }

    const paramsKeysArr = Object.keys(paramsObj) as (keyof ParamsObj)[];
    for(const key of paramsKeysArr){
        const value = formData.get(key)
        if(typeof value === 'string') {
            paramsObj[key] = value;
        }
    }

    const response = await fetch('/api/auth/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paramsObj),
    })
    console.log(response);
}