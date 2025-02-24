import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import SmHeader from '../components/Header'; // Adjust the import path as needed
import LoadingSpinner from '../components/LoadingSpinner';

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

const EventListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const EventItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const EventTitle = styled.h2`
  font-size: 1.3rem;
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
  const [Loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false)
      }
    };

    fetchEvents();
  }, []);

  if (Loading) {
    return (
      <PageContainer>
        <TitleRow title="Upcoming Shows" />
        <TextContainer center="true" >
          <h2>Come Through!</h2>
        </TextContainer>
        <LoadingSpinner />
      </PageContainer>
    )
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <PageContainer>
      <TitleRow title="Upcoming Shows" />
      <TextContainer center="true" >
        <h2>Come Through!</h2>
      </TextContainer>
      <EventListContainer>
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
              <EventItem key={event.id}>
                <EventTitle>{event.summary}</EventTitle>
                <EventDetails><strong>Date:</strong> {startDateStr}</EventDetails>
                <EventDetails><strong>Time:</strong> {startTimeStr} - {endTimeStr}</EventDetails>
                <EventDetails><strong>Location:</strong> {event.location}</EventDetails>
                <EventDetails><strong>Description:</strong> {event.description}</EventDetails>
              </EventItem>
            );
          })}
      </EventListContainer>
    </PageContainer>
  );
}

export default EventList;
