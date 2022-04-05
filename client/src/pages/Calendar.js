import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import NavBar from "../components/NavBar/Navbar.js";
import CalenderHeader from "../components/calenderHeader";
import DateComponent from "../components/dateContainer";
import * as actionCreators from "../store/actions/index";
import FormModal from "../components/FormModal";
import axios from "axios";
import {
  CalenderDateDayContainerActive,
  CalenderDateDayContainerDisable,
  CalenderDateContainer,
  CalenderWeekDayContainer,
  CalenderWeekContainer,
  CalendarContainerBody,
  CalendarContainer,
} from "../assets/styledComponent/index";
import { weekArray, gridArray } from "../constant/index";
import { useParams } from "react-router-dom";

function Calendar() {
  const { values, setState } = useState("");
  const state = {
    posts: [],
  };
  const dispatch = useDispatch();

  const { year, month } = useParams();

  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [modalState, setModalState] = useState(false);

  const { addAppointment } = bindActionCreators(actionCreators, dispatch);

  const startOfDay = moment()
    .year(selectedYear)
    .month(selectedMonth)
    .startOf("month")
    .format("ddd");
  const monthSize = parseInt(
    moment().year(selectedYear).month(selectedMonth).endOf("month").format("DD")
  );

  const startIndex = weekArray.indexOf(startOfDay);
  const endIndex = startIndex + monthSize;

  useEffect(() => {
    const defaultYear = year || moment().format("YYYY");
    const defaultMonth = month || moment().format("MM");

    setSelectedYear(parseInt(defaultYear));
    setSelectedMonth(parseInt(defaultMonth) - 1);
  }, [year, month]);

  const onYearSelect = (year) => {
    const { value } = year;
    setSelectedYear(parseInt(value));
  };

  const onMonthSelect = (month) => {
    const { value } = month;
    setSelectedMonth(parseInt(value - 1));
  };

  const openModal = () => {
    setModalState(!modalState);
  };

  // const getApointments = () => {
  //   axios
  //     // .get(`/api/${user._id}`)
  //     .get(`/api/calender`)
  //     .then((response) => {
  //       const data = response.data;
  //       setState({ posts: data });
  //       console.log("posts" + JSON.stringify(data));
  //       console.log("Data has been received!!");
  //     })
  //     .catch(() => {
  //       // alert("Error retrieving data!!!");
  //     });
  // };

  const onModalSubmit = (data) => {
    const date = data.Date + "-" + (selectedMonth + 1) + "-" + selectedYear;
    const dataByDate = {
      date,
      startTime: data.startTime,
      endTime: data.endTime,
      data: data,
    };
    const payload = {
      startTime: data.startTime,
      endTime: data.endTime,
      date: date,
      // createdBy: user._id,
    };
    // N.B that (startTime > endTime)
    axios({
      url: "/api/calender/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });

    addAppointment(dataByDate);
  };

  // useEffect = () => {
  //   getApointments();
  // };

  return (
    <>
      <NavBar />
      <CalendarContainer>
        <CalenderHeader
          onYearSelect={onYearSelect}
          onMonthSelect={onMonthSelect}
          defaultYear={selectedYear.toString()}
          defaultMonth={(selectedMonth + 1).toString()}
          openModal={openModal}
        />
        <CalendarContainerBody>
          <CalenderWeekContainer>
            {weekArray.map((data, i) => (
              <CalenderWeekDayContainer key={i}>
                {data}
              </CalenderWeekDayContainer>
            ))}
          </CalenderWeekContainer>

          <CalenderDateContainer>
            {gridArray.map((data, i) =>
              i >= startIndex && i < endIndex ? (
                <CalenderDateDayContainerActive key={i}>
                  <DateComponent
                    date={i - startIndex + 1}
                    month={selectedMonth + 1}
                    year={selectedYear}
                  />
                </CalenderDateDayContainerActive>
              ) : (
                <CalenderDateDayContainerDisable
                  key={i}
                ></CalenderDateDayContainerDisable>
              )
            )}
          </CalenderDateContainer>
          
        </CalendarContainerBody>
      </CalendarContainer>

      <FormModal
        modalState={modalState}
        openModal={openModal}
        onModalSubmit={onModalSubmit}
        dateRange={endIndex}
      />
    </>
  );
}

export default Calendar;
