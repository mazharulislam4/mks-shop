import {
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Modal as NextModal,
} from "@nextui-org/react";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size,
  placement = "bottom-center",
  ...props
}) {
  return (
    <NextModal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="opaque"
      size={size}
      placement={placement}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      classNames={{
        backdrop: "bg-overlay",
      }}
      {...props}
    >
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </NextModal>
  );
}

export default Modal;
