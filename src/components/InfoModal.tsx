import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface InfoModalProps {
	title?: string;
	infoText: ReactNode;
}

const InfoModal: FC<InfoModalProps> = ({ title, infoText }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div className='info-modal'>
			<InfoOutlineIcon
				w={6}
				h={6}
				onClick={() => onOpen()}
				_hover={{ color: "#2B6CB0", cursor: "pointer" }}
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent className='open-modal'>
					{title && (
						<ModalHeader>
							<h4 className='modal-title'>{title}</h4>
						</ModalHeader>
					)}
					<ModalBody>{infoText}</ModalBody>
					<ModalCloseButton />
					<ModalFooter>
						<Button colorScheme='blue' as='h4' p='10' onClick={onClose}>
							Got it!
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default InfoModal;
