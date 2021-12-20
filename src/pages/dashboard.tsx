import Navigationbar from '../components/Navigationbar/Navigationbar';
import Header from '../components/header/Header';
import StatsCard from '../components/statsCard/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import { B1, H3 } from '../components/text/Text';
import { Col, Container, Row } from '../components/blocks/Blocks';
import * as colors from '../theme/colors';

export default function dashboard() {
    return (
        <>
            <Navigationbar />
            <Header />
            <Container className="mb-5">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                          <B1 color={colors.primary}>Key Metrics</B1>
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <Row className="mt-4 mb-3"><H3>Account Overview</H3></Row>
                        <Row>
                            <Col size='4' className="my-2">
                              {/* Account Overview Section - Start  */}
                              <StatsCard cardIcon={'fas fa-wallet'} cardTitle={'Wallet'} cardValue={'$3,345.74'} />        
                            </Col>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fas fa-lock'} cardTitle={'Staked'} cardValue={'$4,145.45'} />        
                            </Col>
                            <Col size='4' className="my-2">
                              <StatsCard cardIcon={'fas fa-tractor'} cardTitle={'Yield Farming'} cardValue={'$182.19'} />        
                            </Col>
                        </Row>
                        <Row className="mt-4 mb-3"><H3>Networks</H3></Row>
                        <Row>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fab fa-ethereum'} cardTitle={'Ethereum'} cardValue={'$5,134.12'} />        
                            </Col>
                        </Row>
                        <Row className="mt-4 mb-3"><H3>Actions</H3></Row>
                        <Row>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fab fa-connectdevelop'} cardTitle={'Create a token'} cardValue={'→'} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <BottomBar />
        </>
    )
}
