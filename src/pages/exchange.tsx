import { useState } from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar'
import LineChart from '../components/chart/LineChart';
import CoinSwap from '../components/coinSwap/CoinSwap';
import { Col, Container, Row } from '../components/blocks/Blocks';
import { Desc, Title } from '../components/text/Text';
import { Button } from "../components/button/Button";

export default function Exchange() {
    // State of Day, Week and Month - Only One State Will Be Active At a time
    const [day, setDay] = useState('active')
    const [week, setWeek] = useState('')
    const [month, setMonth] = useState('')
    // Initial Chart Data
    const [ChartData, setChartData] = useState([
        ["Date / Time", "Price"],
        ["09:40 AM", 22.4],
        ["09:45 AM", 13.5],
        ["09:49 AM", 19.9],
        ["10:14 AM", 25],
        ["10:44 AM", 21],
        ["10:59 AM", 28],
        ["11:36 AM", 14],
    ])
    // Method To Change Chart Data Duration (24 Hours, 1 Week, 1 Month)
    function changeState(state: any) {
        if (state === 'day') {
            setDay('active');
            setWeek('');
            setMonth('');
            setChartData([
                ["Date / Time", "Price"],
                ["09:40 AM", 22.4],
                ["09:45 AM", 13.5],
                ["09:49 AM", 19.9],
                ["10:14 AM", 25],
                ["10:44 AM", 21],
                ["10:59 AM", 28],
                ["11:36 AM", 14],
            ])
        }
        if (state === 'week') {
            setDay('');
            setWeek('active');
            setMonth('');
            setChartData([
                ["Date / Time", "Price"],
                ["9/11/21 10:23 AM", 12.4],
                ["10/11/21 12:45 PM", 33.5],
                ["11/11/21 09:49 AM", 23.9],
                ["12/11/21 10:14 AM", 18],
                ["13/11/21 10:44 AM", 24],
                ["14/11/21 10:59 AM", 28],
                ["15/11/21 11:36 AM", 15],
            ])
        }
        if (state === 'month') {
            setDay('');
            setWeek('');
            setMonth('active');
            setChartData([
                ["Date / Time", "Price"],
                ["1/11/21 10:23 AM", 12.4],
                ["2/11/21 12:45 PM", 33.5],
                ["4/11/21 09:49 AM", 23.9],
                ["6/11/21 10:14 AM", 18],
                ["10/11/21 10:44 AM", 24],
                ["11/11/21 10:59 AM", 28],
                ["14/11/21 11:36 PM", 15],
                ["16/11/21 12:36 AM", 24],
                ["17/11/21 01:36 AM", 13],
                ["19/11/21 03:36 PM", 27],
                ["21/11/21 11:33 PM", 35],
                ["23/11/21 08:36 PM", 38],
                ["24/11/21 10:36 AM", 24],
                ["26/11/21 05:36 PM", 42],
                ["27/11/21 09:36 PM", 41],
            ])
        }
    }

    return (
        <div>
            <Navigationbar />
            <Container>
                <Row className="mt-4">
                    <Col size="8">
                        <Row className="mb-3">
                            <Col size="6" >
                                <Desc> <b>ETH</b> / USDC</Desc>
                                <Title> USDC: 14.362 </Title>
                                <Desc className="priceDecreaseDisplay mb-4"> -63.77 USDC (-1.47%) <Desc className="timeSpan">Past 24 Hours </Desc> </Desc>
                            </Col>
                            <Col size="6">
                                {/* Nav Buttons To Switch Chart Data Between 24 Hours, 1 Weel and 1 Month - Start */}
                                <ul className="nav nav-pills float-lg-end mt-4">
                                    <li className="nav-item">
                                        <Button className={`nav-link ${day}`} onClick={() => changeState("day")}>24H</Button>
                                    </li>
                                    <li className="nav-item">
                                        <Button className={`nav-link ${week}`} onClick={() => changeState("week")}>1W</Button>
                                    </li>
                                    <li className="nav-item">
                                        <Button className={`nav-link ${month}`} onClick={() => changeState("month")}>1M</Button>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                                {/* Nav Buttons To Switch Chart Data Between 24 Hours, 1 Weel and 1 Month - End */}
                        <LineChart chartData={ChartData} />
                    </Col>
                    <Col size="4">
                      <CoinSwap />
                    </Col>
                </Row>
            </Container>
            <BottomBar />
        </div>
    )
}

