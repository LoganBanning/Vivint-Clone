const addLeadInfo = async (req, res) => {
  const {fullName, phoneNumber, email} = req.body;
  const db = req.app.get('db');
  const lead = await db.add_lead([
    fullName,
    email,
    phoneNumber,
  ]);
  return res.sendStatus(200).send(lead);
}

module.exports = {
  addLeadInfo
}