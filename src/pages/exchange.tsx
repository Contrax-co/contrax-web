import { useState } from 'react';
import BottomBar from '../components/bottomBar/BottomBar';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import LineChart from '../components/chart/LineChart';
import CoinSwap from '../components/coinSwap/CoinSwap';
import { Col, Container, Row } from '../components/blocks/Blocks';
import { B1, H2 } from '../components/text/Text';
import { Button } from '../components/button/Button';
import ethIcon from '../images/eth-round-icon.png';
import usdcIcon from '../images/USDC-round-icon.png';
import { Image } from '../components/image/Image';
import * as colors from '../theme/colors';

export default function Exchange() {
  const [day, setDay] = useState(true);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [ChartData, setChartData] = useState([
    ['Date / Time', 'Price'],
    ['09:40 AM', 22.4],
    ['09:45 AM', 13.5],
    ['09:49 AM', 19.9],
    ['10:14 AM', 25],
    ['10:44 AM', 21],
    ['10:59 AM', 28],
    ['11:36 AM', 14],
  ]);

  function changeState(state: any) {
    if (state === 'day') {
      setDay(true);
      setWeek(false);
      setMonth(false);
      setChartData([
        ['Date / Time', 'Price'],
        ['09:40 AM', 22.4],
        ['09:45 AM', 13.5],
        ['09:49 AM', 19.9],
        ['10:14 AM', 25],
        ['10:44 AM', 21],
        ['10:59 AM', 28],
        ['11:36 AM', 14],
      ]);
    }
    if (state === 'week') {
      setDay(false);
      setWeek(true);
      setMonth(false);
      setChartData([
        ['Date / Time', 'Price'],
        ['9/11/21 10:23 AM', 12.4],
        ['10/11/21 12:45 PM', 33.5],
        ['11/11/21 09:49 AM', 23.9],
        ['12/11/21 10:14 AM', 18],
        ['13/11/21 10:44 AM', 24],
        ['14/11/21 10:59 AM', 28],
        ['15/11/21 11:36 AM', 15],
      ]);
    }
    if (state === 'month') {
      setDay(false);
      setWeek(false);
      setMonth(true);
      setChartData([
        ['Date / Time', 'Price'],
        ['1/11/21 10:23 AM', 12.4],
        ['2/11/21 12:45 PM', 33.5],
        ['4/11/21 09:49 AM', 23.9],
        ['6/11/21 10:14 AM', 18],
        ['10/11/21 10:44 AM', 24],
        ['11/11/21 10:59 AM', 28],
        ['14/11/21 11:36 PM', 15],
        ['16/11/21 12:36 AM', 24],
        ['17/11/21 01:36 AM', 13],
        ['19/11/21 03:36 PM', 27],
        ['21/11/21 11:33 PM', 35],
        ['23/11/21 08:36 PM', 38],
        ['24/11/21 10:36 AM', 24],
        ['26/11/21 05:36 PM', 42],
        ['27/11/21 09:36 PM', 41],
      ]);
    }
  }

  return (
    <div>
      <Navigationbar />
      <Container>
        <Row className="mt-4">
          <Col size="8">
            <Row className="mb-3">
              <Col size="6">
                <Col className="align-items-center">
                  <Image height="34" alt="ethIcon" src={ethIcon} />
                  <Image height="34" alt="usdcIcon" src={usdcIcon} />
                  &nbsp; &nbsp;{' '}
                  <B1 color={colors.secondaryMideum}> ETH / USDC</B1>
                </Col>
                <Row>
                  <H2>ETH / USDC</H2>
                </Row>
                <Row>
                  <B1 color={colors.accentDark}>
                    +63.77 USDC (+1.47%){' '}
                    <B1 color={colors.secondaryMideum}>Past 24 Hours</B1>
                  </B1>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <ul className="nav nav-pills float-lg-end mt-4">
                  <li className="nav-item">
                    <Button
                      size="sm"
                      primary={day}
                      onClick={() => changeState('day')}
                    >
                      24H
                    </Button>
                  </li>
                  <li className="nav-item">
                    &nbsp; &nbsp;{' '}
                    <Button
                      size="sm"
                      primary={week}
                      onClick={() => changeState('week')}
                    >
                      1W
                    </Button>
                  </li>
                  <li className="nav-item">
                    &nbsp; &nbsp;{' '}
                    <Button
                      size="sm"
                      className={month}
                      onClick={() => changeState('month')}
                    >
                      1M
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
            <LineChart chartData={ChartData} />
          </Col>
          <Col size="4" className="pt-2">
            <CoinSwap />
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}
