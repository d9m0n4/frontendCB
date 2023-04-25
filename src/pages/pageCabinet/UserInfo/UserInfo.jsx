import React, {useState} from 'react';
import './UserInfo.scss'
import name from '../../../assets/cabinet/name.svg'

const UserInfo = () => {

    return (
        <article className="user-info">
           <div className="cabinet-block user-info__item">1</div>
           <div className="cabinet-block user-info__item">2</div>
           <div className="cabinet-block user-info__item">
               <div className="item-top">
                   <div className="item-top__image">
                       <img src={name} alt=""/>
                   </div>
                   <div className="item-top__info">
                       <div className="item-top__content">
                           <p className="item-top__content-title">Name</p>
                           <span className="item-top__content-subtitle"></span>
                       </div>
                       <div className="item-top__status">
                           <span>Enter a name</span>
                       </div>
                   </div>
               </div>
               <div className="item-bottom">
                    <button className="user-info__button">Set</button>
               </div>
           </div>
           <div className="cabinet-block user-info__item">
               <div className="item-top">
                   <div className="item-top__image">
                       <img src={name} alt=""/>
                   </div>
                   <div className="item-top__info">
                       <div className="item-top__content">
                           <p className="item-top__content-title">E-mail</p>
                           <span className="item-top__content-subtitle">viktory.mrs@icloud.com</span>
                       </div>
                       <div className="item-top__status">
                           <span>Not Confirmed</span>
                       </div>
                   </div>
               </div>
               <div className="item-bottom">
                   <div className="item-bottom__content">
                       <p>The confirmation letter was sent to the post office</p>
                       <i>
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <circle cx="8" cy="8" r="8" fill="white" fill-opacity="0.07"/>
                               <path d="M8.28516 9.20508H7.37695C7.38021 8.89258 7.40788 8.63704 7.45996 8.43848C7.5153 8.23665 7.60482 8.05273 7.72852 7.88672C7.85221 7.7207 8.0166 7.5319 8.22168 7.32031C8.37142 7.16732 8.50814 7.02409 8.63184 6.89062C8.75879 6.75391 8.86133 6.60742 8.93945 6.45117C9.01758 6.29167 9.05664 6.10124 9.05664 5.87988C9.05664 5.65527 9.01595 5.46159 8.93457 5.29883C8.85645 5.13607 8.73926 5.01074 8.58301 4.92285C8.43001 4.83496 8.23958 4.79102 8.01172 4.79102C7.82292 4.79102 7.64388 4.8252 7.47461 4.89355C7.30534 4.96191 7.16862 5.06771 7.06445 5.21094C6.96029 5.35091 6.90658 5.53483 6.90332 5.7627H6C6.00651 5.39486 6.09766 5.0791 6.27344 4.81543C6.45247 4.55176 6.69336 4.34993 6.99609 4.20996C7.29883 4.06999 7.63737 4 8.01172 4C8.42513 4 8.77669 4.07487 9.06641 4.22461C9.35938 4.37435 9.58236 4.58919 9.73535 4.86914C9.88835 5.14583 9.96484 5.47461 9.96484 5.85547C9.96484 6.14844 9.90462 6.41862 9.78418 6.66602C9.66699 6.91016 9.51562 7.13965 9.33008 7.35449C9.14453 7.56934 8.94759 7.77441 8.73926 7.96973C8.56022 8.13574 8.43978 8.32292 8.37793 8.53125C8.31608 8.73958 8.28516 8.96419 8.28516 9.20508ZM7.33789 10.7529C7.33789 10.6064 7.38346 10.4827 7.47461 10.3818C7.56576 10.2809 7.69759 10.2305 7.87012 10.2305C8.0459 10.2305 8.17936 10.2809 8.27051 10.3818C8.36165 10.4827 8.40723 10.6064 8.40723 10.7529C8.40723 10.8929 8.36165 11.0133 8.27051 11.1143C8.17936 11.2152 8.0459 11.2656 7.87012 11.2656C7.69759 11.2656 7.56576 11.2152 7.47461 11.1143C7.38346 11.0133 7.33789 10.8929 7.33789 10.7529Z" fill="white" fill-opacity="0.2"/>
                           </svg>
                       </i>
                   </div>
               </div>
           </div>

           <div className="cabinet-block user-info__item">5</div>
           <div className="cabinet-block user-info__item">6</div>
           <div className="cabinet-block user-info__item">7</div>
           <div className="cabinet-block user-info__item">8</div>
        </article>
    );
};

export default UserInfo;