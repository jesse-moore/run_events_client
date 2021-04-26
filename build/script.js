window.addEventListener('load', async () => {
    const lambdaRes = document.getElementById('lambda-res')
    lambdaRes.innerHTML = 'waiting for response'
    const rdsRes = document.getElementById('rds-res')
    rdsRes.innerHTML = 'waiting for response'
    const lambda = await fetchLambda()
    const rds = await fetchRDS()
    lambdaRes.innerHTML = lambda
    rdsRes.innerHTML = rds[0].message
})

const fetchLambda = async () => {
    try {
        const res = await fetch(
            'https://sweq06ov4b.execute-api.us-east-1.amazonaws.com/default/testFunction',
            {
                mode: 'cors',
            }
        )
        const { body } = await res.json()
        return body
    } catch (error) {
        console.log(error)
        return 'error'
    }
}

const fetchRDS = async () => {
    try {
        const res = await fetch(
            'https://sweq06ov4b.execute-api.us-east-1.amazonaws.com/default/graphql-api-dev-hello',
            {
                mode: 'cors',
            }
        )
        const body = await res.json()
        return body
    } catch (error) {
        console.log(error)
        return 'error'
    }
}
