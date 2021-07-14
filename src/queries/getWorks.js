const getWorks = async () => {
    const res = await fetch('/works.json')
    const data = await res.json()
    setWorks(data)
}