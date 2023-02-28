export const testingService = async () => {
    const url = `${process.env.REACT_APP_SERVERURL}`
    const res = await fetch(url)
    return res.json()
}