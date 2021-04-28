window.addEventListener('load', async () => {
    const lambdaRes = document.getElementById('lambda-res')
    lambdaRes.innerHTML = 'waiting for response'
    const lambda = await fetchLambda()
    lambdaRes.innerHTML = lambda
})

const fetchLambda = async () => {
    try {
        const res = await fetch(
            'https://vnmfe4gkp3.execute-api.us-east-1.amazonaws.com/Prod/api',
            {
                mode: 'cors',
            }
        )
        return await res.text()
    } catch (error) {
        console.log(error)
        return 'error'
    }
}
