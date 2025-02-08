import React, { useState, useEffect } from "react";
import "../styling/Adoption.css"; 
import { toast } from 'react-toastify';

const Adoption = () => {
    const URL = "https://project-6617325155113103718-default-rtdb.firebaseio.com/.json";
    const [meds, setMeds] = useState([]);

    const [reminders, setReminders] = useState({});

    useEffect(() => {
        const fetchMeds = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setMeds(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMeds();
    }, []);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();

    const setReminder = async (medId) => {
        const reminderTime = prompt("Set reminder time (HH:MM):");
        if (reminderTime) {
            const [hours, minutes] = reminderTime.split(":").map(Number);
            const now = new Date();
            const reminderDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);
            if (reminderDate < now) {
                reminderDate.setDate(reminderDate.getDate() + 1);
            }
            const timeUntilReminder = reminderDate - now;

            // Send reminder to backend
            try {
                await fetch(`${URL}/${medId}/reminders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ reminderTime }),
                });
            } catch (error) {
                console.log("Error sending reminder to backend:", error);
            }

            const reminderTimeout = setTimeout(() => {
                (`Time to take your medicine: ${medId}`);
                const reminderInterval = setInterval(() => {
                    toast(`Time to take your medicine: ${medId}`);
                }, 24 * 60 * 60 * 1000);
                setReminders((prevReminders) => ({
                    ...prevReminders,
                    [medId]: { interval: reminderInterval, time: reminderTime },
                }));
            }, timeUntilReminder);
            setReminders((prevReminders) => ({
                ...prevReminders,
                [medId]: { timeout: reminderTimeout, time: reminderTime },
            }));
        }
    };

    const markAsCompleted = (medId) => {
        if (reminders[medId]) {
            clearTimeout(reminders[medId].timeout);
            clearInterval(reminders[medId].interval);
            setReminders((prevReminders) => {
                const newReminders = { ...prevReminders };
                delete newReminders[medId];
                return newReminders;
            });
            toast(`Reminder for medicine ${medId} has been reset.`);
        }
    };




    return (
        <div className="carousel-container">
            <h1>Meds as Prescription</h1>
            {daysOfWeek.map((day, index) => (
                <div key={index} className={`carousel-day ${index === today ? "highlight" : ""}`}>
                    <h2>{day}</h2>
                    <div className="carousel-wrapper">
                        <ul className="carousel">
                            {meds
                                .filter((_, i) => i % 7 === index)
                              
                                .map((med) => (
                                    <li key={med.id} className="carousel-item">
                                        <h3>{med.name}</h3>
                                        <p>{med.dosage}</p>
                                        <p>{med.description}</p>
                                        {reminders[med.id] && <p>Reminder set for: {reminders[med.id].time}</p>}
                                        <button onClick={() => setReminder(med.id)}>Set Reminder</button>
                                        <button onClick={() => markAsCompleted(med.id)}>Mark as Completed</button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        
        </div>
    );
};

export default Adoption;