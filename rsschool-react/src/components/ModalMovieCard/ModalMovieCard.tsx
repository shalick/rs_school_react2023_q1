import { MouseEvent } from 'react'
import { ICharacter } from '../../api/rickandmortyapi'
import './ModalMovieCard.css'

interface IProps {
    show: boolean
    data?: ICharacter
    handleClose: () => void
}

const ModalMovieCard = (props: IProps) => {
    const handleOverlayClose = ({ currentTarget, target }: MouseEvent) => {
        if (currentTarget === target) props.handleClose()
    }

    console.log(props.data?.name)

    return (
        <div
            className={`modal-card_overlay ${props.show ? '' : 'hide'}`}
            onClick={handleOverlayClose}
            data-testid="modal-window"
        >
            <section
                className={`modal-card ${props.show ? '' : 'hide'}`}
                data-testid="modal-container"
            >
                <article className="modal-card_container">
                    <img src={props.data?.image} data-testid="modal-image" />
                </article>
                <article className="modal-card_container">
                    <h2 className="modal-card_title">{props.data?.name}</h2>
                    <ul className="modal-card_list">
                        <li className="modal-card_item">
                            Created:{' '}
                            <span>{props.data?.created.slice(0, 10)}</span>
                        </li>
                        <li className="modal-card_item">
                            Species: <span>{props.data?.species}</span>
                        </li>
                        <li className="modal-card_item">
                            Gender: <span>{props.data?.gender}</span>
                        </li>
                        <li className="modal-card_item">
                            Origin: <span>{props.data?.origin.name}</span>
                        </li>
                        <li className="modal-card_item">
                            Location: <span>{props.data?.location.name}</span>
                        </li>
                        <li className="modal-card_item">
                            Status: <span>{props.data?.status}</span>
                        </li>
                        {props.data?.type ? (
                            <li className="modal-card_item">
                                Type: <span>{props.data?.type}</span>
                            </li>
                        ) : null}
                    </ul>
                </article>
                <button
                    className="modal-card_close"
                    type="button"
                    onClick={props.handleClose}
                    data-testid="modal-close"
                />
            </section>
        </div>
    )
}

export default ModalMovieCard
