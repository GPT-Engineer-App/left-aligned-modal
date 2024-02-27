import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Divider } from "@chakra-ui/react";

const NewDatasetModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent minWidth="560px" borderRadius="md">
        <ModalHeader textAlign="left" fontSize="lg" bg="blue.100" p={4} borderTopRadius="md">
          New Dataset
        </ModalHeader>
        <ModalCloseButton position="absolute" right="4" top="4" />
        <ModalBody>
          <VStack divider={<Divider borderColor="gray.200" />} spacing={4}>
            <div style={{ border: "1px solid", borderColor: "gray.200", padding: "20px", width: "100%" }}>Content Section 1</div>
            <div style={{ border: "1px solid", borderColor: "gray.200", padding: "20px", width: "100%" }}>Content Section 2</div>
            <div style={{ border: "1px solid", borderColor: "gray.200", padding: "20px", width: "100%" }}>Content Section 3</div>
            <div style={{ border: "1px solid", borderColor: "gray.200", padding: "20px", width: "100%" }}>Content Section 4</div>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewDatasetModal;
