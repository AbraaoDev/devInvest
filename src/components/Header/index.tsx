
import logoImg from '../../assets/teste-logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;

}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

    return(
        <Container>
            <Content>

                <img className="resolutionImg" src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
              
            </Content>
        </Container>
    )
}