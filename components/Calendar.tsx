import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { EventClickArg } from "@fullcalendar/core/index.js";

type Inputs = {
  id?: string;
  title: string;
  start: string;
  end: string;
  editable?: boolean;
};

const defaultData = {
  title: "",
  start: "",
  end: "",
  // editable: true,
};

export default function Calendar() {
  const [isModal, setIsModal] = useState(false);
  const [inputs, setInputs] = useState<Inputs>(defaultData);
  const [eventData, setEventData] = useState<Inputs[]>([]);
  //삭제하기 위해 고유 id 부여하기
  //좋은 코드는 아니라고 생각.
  //string을 다시 number로 바꾸는 등 비효율적이다
  const [id, setId] = useState("0");

  const { title, start, end } = inputs;

  //일정추가하는 기능 만들기
  const handleClick = () => {
    // console.log("일정추가");
    isModal ? setIsModal(false) : setIsModal(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleEvent = () => {
    const newEvent = { ...inputs, id: id };
    setInputs({
      title: "",
      start: "",
      end: "",
      // editable: true,
    });
    setEventData([newEvent, ...eventData]);
    setId((Number(id) + 1).toString());
    handleClick();
  };

  const handelDelete = (info: EventClickArg) => {
    if (window.confirm("일정을 삭제할까요?")) {
      //TODO: 클릭한 이벤트 삭제하기(eventData에서도 삭제하기)
      info.event.remove();
      const restData = eventData.filter((item) => item.id !== info.event.id);
      setEventData(restData);
    }
  };

  return (
    <Container>
      <Button onClick={handleClick}>일정추가</Button>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={"ko"}
        events={eventData}
        eventClick={handelDelete}
      />
      {isModal && (
        <ModalBox>
          <Modal>
            <Bar>
              <XButton onClick={handleClick}>❌</XButton>
            </Bar>
            <Box>
              <label htmlFor="title">일정 내용</label>
              <InputBox
                name="title"
                id="title"
                onChange={handleChange}
                value={title}
              ></InputBox>
              <label htmlFor="start">시작일</label>
              <InputBox
                name="start"
                id="start"
                onChange={handleChange}
                placeholder={"2023-11-06"}
                value={start}
              ></InputBox>
              <label htmlFor="end">종료일</label>
              <InputBox
                name="end"
                id="end"
                onChange={handleChange}
                placeholder={"2023-11-09"}
                value={end}
              ></InputBox>
              <AddButton onClick={handleEvent}>추가</AddButton>
            </Box>
          </Modal>
        </ModalBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(70vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  width: 3rem;
  height: 1.3rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: ${(props) => props.theme.size.smaller};
  position: absolute;
  top: 1.2rem;
  left: 8.3rem;
  &:hover {
    cursor: pointer;
  }
`;

const ModalBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  z-index: 10;
  width: 60%;
  height: 50%;
  background-color: white;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const XButton = styled.div`
  width: 1rem;
  height: 1rem;
  font-size: ${(props) => props.theme.size.small};
  &:hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.size.small};
`;

const InputBox = styled.input`
  border: 2px solid lightgray;
  margin-bottom: 0.3rem;
  border-radius: 0.3rem;
`;

const AddButton = styled.button`
  // height: 1rem;
  margin: 0 3rem;
  border: 0;
  background-color: black;
  border-radius: 1rem;
  margin-top: 0.4rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
