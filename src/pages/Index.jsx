import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Divider } from "@chakra-ui/react";

const NewDatasetModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent minWidth="560px">
        <ModalHeader textAlign="left">New Dataset</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack divider={<Divider borderColor="gray.200" />} spacing={-2}>
            <div>Content Section 1</div>
            <div>Content Section 2</div>
            <div>Content Section 3</div>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewDatasetModal;
