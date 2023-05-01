import { useEffect, useState } from "react";
import axios from 'axios'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import ReactLoading from 'react-loading'


export default function FrequencyChart({ toolId }) {

    const [bookings, setBookings] = useState(null)
    const [loading, setLoading] = useState(false)
    const [dayOfWeekFrequency, setdayOfWeekFrequency] = useState(null)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:9003/api/bookings/all/${toolId}`)
            .then(res => {
                setBookings(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.warn(err)
            })
    }, [])

    useEffect(() => {
        if(!bookings)
            return

        const bookingDaysOfWeek = bookings.map((booking) => {
            const bookingDate = new Date(booking.booking_date);
            
            console.log(bookingDate )

            return daysOfWeek[bookingDate.getDay()];
        });

        const getDayOfWeekFrequency = bookingDaysOfWeek.reduce((freq, dayOfWeek) => {
            freq[dayOfWeek] = (freq[dayOfWeek] || 0) + 1;
            return freq;
          }, {});

        setdayOfWeekFrequency(getDayOfWeekFrequency)
    }, [bookings])

    const data = {
        labels: daysOfWeek,
        datasets: [
          {
            label: 'Historic frequency of bookings',
            data: dayOfWeekFrequency ? Object.values(dayOfWeekFrequency) : [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };


    return (
        <article className="mx-2 my-12 flex justify-center items-center flex-col">
            {loading 
                ? <ReactLoading type='spin' color='#9C528B'/> 
                : 
                <div className="md:w-[60vw]">
                    <h3 className="font-bold text-2xl">Statistics</h3>
                    <Chart type="bar" data={data} options={options} />
                </div>}
        </article>
    )
}
