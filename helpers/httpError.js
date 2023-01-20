export const httpError = (res, err) => {
    res.status(500)
    res.send({ Error: "Algo salio mal" })
}