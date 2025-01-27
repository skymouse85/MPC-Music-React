import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer'; // Adjust the import path as needed
import SmHeader from '../components/Header'; // Adjust the import path as needed

const PageContainer = styled.div`
  margin: 2rem;
`;

const HeaderContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const EventCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const EventTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const EventDetails = styled.p`
  margin: 0.3rem 0;
  font-size: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin: 2rem 0;
`;

function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 6);

      const startDay = startDate.toISOString().split('T')[0];
      const endDay = endDate.toISOString().split('T')[0];

      try {
        const response = await fetch(
          `https://app-n7mlmljuba-uc.a.run.app/events/${startDay}/${endDay}`
        );
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setEvents(data);
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events.');
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <SmHeader />
      </HeaderContainer>
      <Title>Upcoming Shows</Title>
      <EventContainer>
        {events
          .sort((a, b) =>
            new Date(a.start?.dateTime || 0) - new Date(b.start?.dateTime || 0)
          )
          .map((event) => {
            if (!event.start?.dateTime || !event.end?.dateTime) return null;

            const startDate = new Date(event.start.dateTime);
            const endDate = new Date(event.end.dateTime);

            const startDateStr = startDate.toLocaleDateString('en-US');
            const startTimeStr = startDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            });
            const endTimeStr = endDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <EventCard key={event.id}>
                <EventTitle>{event.summary}</EventTitle>
                <EventDetails>Date: {startDateStr}</EventDetails>
                <EventDetails>Time: {startTimeStr} - {endTimeStr}</EventDetails>
                <EventDetails>Location: {event.location}</EventDetails>
                <EventDetails>Description: {event.description}</EventDetails>
              </EventCard>
            );
          })}
      </EventContainer>
      
    </PageContainer>
  );
}

export default EventList;
