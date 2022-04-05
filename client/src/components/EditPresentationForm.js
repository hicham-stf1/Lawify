import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ModalCancel2,
  ModalSubmit2,
  ModalFooter,
  TextArea,
  InputSpan,
  InputContainer,
  presentationCustomStyles,
  ModalBody,
  ModalHeader,
} from "../assets/styledComponent/index";


function EditPresentationForm(props) {
  const { register, handleSubmit } = useForm();

  const state = {
    startTime: "",
    endTime: "",
    day: "",
    month: "",
    year: "",
    // date: "",
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
      style={presentationCustomStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier votre presentation</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <InputContainer>
            <InputSpan>Presentation :</InputSpan>
            <TextArea
              {...register("presentation")}
              type="textarea"
              placeholder="Saisir votre nouvelle presentation"
            ></TextArea>
          </InputContainer>

        </ModalBody>
        <ModalFooter>
          <ModalSubmit2>Submit</ModalSubmit2>
          <ModalCancel2 onClick={props.openModal}>Cancel</ModalCancel2>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default EditPresentationForm;
