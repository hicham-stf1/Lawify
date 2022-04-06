import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormRow from "./FormRow";
import axios from "axios";
import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../assets/styledComponent/index";

const theData = localStorage.getItem("appointMentData");
const initialState = {
  email: "",
  password: "",
  isMember: true,
};
function EditCoordonneesForm(props) {
  const { register, handleSubmit } = useForm();

  const state = {
    startTime: "",
    endTime: "",
    day: "",
    month: "",
    year: "",
    // date: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (data) => {
    console.log(data);
    props.onModalSubmit(data);
    props.openModal();
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier vos coordonnees</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="adresse"
            className="form-label"
          >
            Adresse
          </label>
          <div className="form-row">
            <input
              name="adresse"
              {...register("adresse")}
              className="form-input"
            />
          </div>

          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="site-web"
            className="form-label"
          >
            Site Web
          </label>
          <div className="form-row">
            <input
              name="site-web"
              {...register("site-web")}
              className="form-input"
            />
          </div>

          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="tele"
            className="form-label"
          >
            Numero de telephone
          </label>
          <div className="form-row">
            <input name="tele" {...register("tele")} className="form-input" />
          </div>

          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="email"
            className="form-label"
          >
            E-mail
          </label>
          <div className="form-row">
            <input name="email" {...register("email")} className="form-input" />
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default EditCoordonneesForm;
