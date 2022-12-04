import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowId='1' title='Top Rated' fetchURL={requests.requsetToprated} />
            <Row rowId='2' title='Upcoming' fetchURL={requests.requestUpcoming} />
            <Row rowId='3' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowId='4' title='Now Playing' fetchURL={requests.requseLatest} />
            <Row rowId='5' title='Latest' fetchURL={requests.requsetToprated} />
        </>
    )
}

export default Home