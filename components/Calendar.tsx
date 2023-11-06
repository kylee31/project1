import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import styled from "styled-components";

export default function Calendar() {
  const examData = [
    {
      title: "일정",
      start: "2023-11-07",
      end: "2023-11-11",
      editable: true,
    },
  ];

  //일정추가하는 기능 만들기

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        droppable={true}
        locale={"ko"}
        events={examData}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(70vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  .fc {
    width: 90%;
    height: 90%;
    font-size: ${(props) => props.theme.size.smaller};
  }
  .fc-header-toolbar {
    padding: 0 1rem;
  }
  .fc-button {
    background-color: ${(props) => props.theme.mainColors.blue};
    border: 0;
  }
  .fc-day-sun a {
    color: red;
  }
  .fc-prev-button {
    margin-right: 0.1rem;
  }
  .fc-event {
    background-color: ${(props) => props.theme.mainColors.green};
    border: 0;
  }
`;
