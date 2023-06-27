import React, {useEffect, useState} from 'react'
import AppHeader from '../../widgets/Header/AppHeader.jsx'

import Filter from '../../feauters/filter/Filter.jsx'
import Search from '../../feauters/search/Search.jsx'

import './AuctionsPage.scss'
import {useQuery} from "@apollo/client";
import {GET_AUCTIONS} from "../../shared/schemas/auctions/auctions";
import AuctionsPageContent from "../../widgets/auction-page-content/AuctionsPageContent.jsx";

const MyAuctionsPage = ({ title }) => {
  // эмитация данных с бэка


  const [auctData, setAuctData] = React.useState(null)

  const {data, loading} = useQuery(GET_AUCTIONS)
  console.log(auctData)

  useEffect(() => {
    if (!loading) {
      setAuctData(data.getAuctions)
    }
  }, [data]);

  return (
    <>
      <AppHeader title={title} />

      <div className='auctions__components'>
        <div className='auctions__search--card'>
          <Search />

          {<AuctionsPageContent data={auctData}/>}
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
