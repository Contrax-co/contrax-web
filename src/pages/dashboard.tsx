import Navigationbar from '../components/Navigationbar/Navigationbar';
import Header from '../components/header/Header';
import StatsCard from '../components/statsCard/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import { Title } from '../components/text/Text';
import { Col, Container, Row } from '../components/blocks/Blocks';

export default function dashboard() {
    return (
        <>
            <Navigationbar />
            <Header />
            <Container className="mb-5">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Key Metrics</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <Title className="mt-4 mb-3">Account Overview</Title>
                        <Row>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fas fa-wallet'} cardTitle={'Wallet'} cardValue={'$3,345.74'} />        
                            </Col>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fas fa-lock'} cardTitle={'Staked'} cardValue={'$4,145.45'} />        
                            </Col>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fas fa-tractor'} cardTitle={'Yield Farming'} cardValue={'$182.19'} />        
                            </Col>
                        </Row>
                        <Title className="mt-4 mb-3">Networks</Title>
                        <Row>
                            <Col size='4' className="my-2">
                                <StatsCard cardIcon={'fab fa-ethereum'} cardTitle={'Ethereum'} cardValue={'$5,134.12'} />        
                            </Col>
                        </Row>
                        <Title variant="dark" className="mt-4 mb-3">Actions</Title>
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
