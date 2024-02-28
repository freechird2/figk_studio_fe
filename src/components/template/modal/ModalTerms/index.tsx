import { Modal } from 'components/common/Modal'
interface ModalTermsProps {
    termsContents: React.ReactNode
    title: string
}

const ModalTerms = ({ termsContents, title }: ModalTermsProps) => {
    return (
        <Modal.Container>
            <Modal.Header title={title} />
            <Modal.Contents>{termsContents}</Modal.Contents>
        </Modal.Container>
    )
}

export default ModalTerms
