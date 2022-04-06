import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  TagInput,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../assets/styledComponent/index";

function EditInfosForm2(props) {
  const { register, handleSubmit } = useForm();
  const [langues, setLangues] = useState([]);
  const [formations, setFormations] = useState([]);

  const handleOnChangeEnligne = () => {
    console.log("test");
    document.getElementById("enligneprice").disabled =
      !document.getElementById("enligneprice").disabled;
  };
  const handleOnChangeCabinet = () => {
    console.log("test");
    document.getElementById("cabinetprice").disabled =
      !document.getElementById("cabinetprice").disabled;
  };

  const onSubmit = (data) => {
    console.log(langues);
    console.log(formations);
    props.onModalSubmit(data);
    props.openModal();
  };

  const addLangue = (e) => {
    if (e.key === "Shift") {
      if (e.target.value.length > 0) {
        setLangues([...langues, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeLangue = (removedLangue) => {
    const newLangues = langues.filter((langue) => langue !== removedLangue);
    setLangues(newLangues);
  };

  const addFormation = (e) => {
    if (e.key === "Shift") {
      if (e.target.value.length > 0) {
        setFormations([...formations, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeFormation = (removedFormation) => {
    const newFormations = formations.filter(
      (formation) => formation !== removedFormation
    );
    setFormations(newFormations);
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier vos informations</ModalHeader>
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
          Domaines
          <TagInput className="App">
            <div className="tag-container">
              {langues.map((langue, index) => {
                return (
                  <div key={index} className="tag">
                    {langue}{" "}
                    <span onClick={() => removeLangue(langue)}>
                      <i className="fas fa-times-circle"></i>
                    </span>
                  </div>
                );
              })}

              <input
                placeholder="Enter text and click shift to add"
                onKeyDown={addLangue}
              />
            </div>
          </TagInput>
          Types de rendez-vous
          <div className="form-row">
            <input
              id="enligne"
              value="enligne"
              type="checkbox"
              onClick={handleOnChangeEnligne}
              name="enligne"
              {...register("enligne")}
            />
            <label for="enligne"> Rendez-vous en ligne</label>
            <br />
            <input
              id="cabinet"
              value="cabinet"
              type="checkbox"
              onClick={handleOnChangeCabinet}
              name="cabinet"
              {...register("cabinetprice")}
            />
            <label for="cabinet"> Rendez-vous au cabinet</label>
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

export default EditInfosForm2;
