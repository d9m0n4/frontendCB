import * as React from 'react';
import user from '@/assets/cabinet/icons/sms.svg'

export const UserEmail = ({field, handleUpdate}) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [value, setValue] = React.useState(field)

    const changeState = () => {
        setIsEditable(!isEditable)
    }

    const update = (data) => {
        handleUpdate(data)
        setIsEditable(false)
    }

    return (
        <div className="cabinet-block user-info__item">
            <div className="item-top">
                <div className="item-top__image">
                    <img src={user} alt=""/>
                </div>
                <div className="item-top__info">
                    <div className="item-top__content">
                        <p className="item-top__content-title">E-mail</p>
                        {isEditable ?
                            <input autoFocus type="text" className="item-top__input" defaultValue={field} onChange={(e) => setValue( e.target.value)}/> :
                            <span className="item-top__content-subtitle">{field}</span>}
                    </div>
                    <div className="item-top__status">Not Confirmed</div>
                </div>
            </div>
            <div className="item-bottom">
                {isEditable ? <button className="user-info__button" disabled={!value} onClick={() => update({email: value})}>Change</button> :
                    <button className="user-info__button" onClick={changeState}>Set</button>}
                {/*<div className="item-bottom__content">*/}
                {/*    <p>The confirmation letter was sent to the post office</p>*/}
                {/*    <i>*/}
                {/*        <img src={info} alt=""/>*/}
                {/*    </i>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}