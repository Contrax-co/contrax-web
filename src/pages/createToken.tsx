import React from 'react'
import Navigationbar from '../components/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { PageTitle, PageSubTitle, Title, Desc } from "../components/text/Text";

export default function createToken() {
    return (
        <>
            <Navigationbar />
            <div className="container h-100">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-auto">
                        <PageTitle value={'No coding required. '} variant={'dark'} />
                        <PageTitle value={'Create your own tokens with one click!'} variant={'dark'} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <form className="px-4 py-4 my-5 formBackgroundDesign">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                                    <Title variant={'dark'} value={'Enter Token Parameters:'}></Title>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                    <Desc value={'Token Symbol'} variant={'dark'} />
                                    <input type="text" placeholder="1-16 Characters" className="form-control" id="tokenSymbol" name="tokenSymbol" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                    <Desc value={'Token Supply'} variant={'dark'} />
                                    <input type="text" placeholder="0-99,999,999,999,999,999" className="form-control" id="tokenSypply" name="tokenSypply" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                    <Desc value={'Token Name'} variant={'dark'} />
                                    <input type="text" placeholder="1-64 Characters" className="form-control" id="tokenName" name="tokenName" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                    <Desc value={'Decimals'} variant={'dark'} />
                                    <input type="text" placeholder="0-18" className="form-control" id="decimals" name="decimals" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 mt-3 mb-2">
                                    <Title variant={'dark'} value={'Special Features:'}></Title>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 my-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <Title variant={'dark'} value={'Burn'} className="inlineDisplay mx-2"></Title>
                                    <Desc className="form-check-label" value={'A percentage of tokens will be sent to the burn address for each on-chain transfer'} variant={'dark'} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 my-2">
                                    <input type="text" placeholder="0.1%" className="form-control" id="burnPercent" name="burnPercent" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 my-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <Title variant={'dark'} value={'Trading Fees'} className="inlineDisplay mx-2"></Title>
                                    <Desc className="form-check-label" value={'A percentage of tokens will be sent to the creators address for each on-chain transfer'} variant={'dark'} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 my-2">
                                    <input type="text" placeholder="0.1%" className="form-control" id="tradingFeePercent" name="tradingFeePercent" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <Title variant={'dark'} value={'Supports Supply Increase'} className="inlineDisplay mx-2"></Title>
                                    <Desc className="form-check-label" value={'Allows the creator to issue additional tokens after the token creation'} variant={'dark'} />
                                </div>
                            </div>
                            <div className="row justify-content-center  mx-5 mt-3">
                                <button type="submit" className="btn btn-primary">Create a token</button>
                            </div>
                        </form>
                    </div>
                    <Title className="mt-5" value={'My Token List'} variant={'dark'} />
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>#</th>
                                <th>Token Symbol</th>
                                <th>Token Name</th>
                                <th>Total Supply</th>
                                <th>Holders</th>
                                <th>Balance</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>SOL</td>
                                <td>Solana</td>
                                <td>1,000,000,000,000</td>
                                <td>7,000</td>
                                <td>678,987</td>
                                <td>
                                    <button className="btn btn-primary">Manage</button>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Rune</td>
                                <td>Thor coin</td>
                                <td>1,000,000,000</td>
                                <td>15,000</td>
                                <td>788,334</td>
                                <td>
                                    <button className="btn btn-primary">Manage</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <BottomBar />
        </>
    )
}
