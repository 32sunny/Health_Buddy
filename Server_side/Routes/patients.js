const express = require('express');
const router = express.Router();
const Patient = require('../Modules/patient');

// Get patient by email
router.get('/patients/email/:email', async (req, res) => {
  try {
    const patient = await Patient.findOne({ email: req.params.email });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching patient', error: err });
  }
});

// Add new patient
router.post('/patients', async (req, res) => {
  const { name, email, age, phone, medicalConditions } = req.body;

  try {
    const newPatient = new Patient({ name, email, age, phone, medicalConditions });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: 'Error creating patient', error: err });
  }
});

// Update patient by ID
router.put('/patients/:id', async (req, res) => {
  const { name, email, age, phone, medicalConditions } = req.body;

  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      { name, email, age, phone, medicalConditions },
      { new: true }
    );
    res.status(200).json(updatedPatient);
  } catch (err) {
    res.status(400).json({ message: 'Error updating patient', error: err });
  }
});

module.exports = router;
