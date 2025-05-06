const addCustomer = async (_req, _res) => {
    const body = _req.body
    return _res.json({ name: "Customer Service call" })
}
module.exports = { addCustomer }