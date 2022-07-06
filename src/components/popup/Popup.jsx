import "./Popup.css";


const Popup = ({active, setActive}) => {

    return <>
        <div className={active ? "popup active" : "popup"} onClick={()=> setActive(false)}>
            <div className={active ? "popup__content active" : "popup__content"} onClick={e => e.stopPropagation()}>
                Заявка успешно отправлена!
            </div>
        </div>
    </>
}

export default Popup;