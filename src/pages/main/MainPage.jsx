import Layout from "../../app/layouts/layout.jsx";

export default function MainPage() {
    return (
        <Layout>
            <section className="flex flex-col items-center gap-8 relative">
                <div>
                    <div>
                        <img src="/people.png" alt="People"/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-9">
                    <h1 className="uppercase text-center text-7xl font-bold">Chase the time on ton</h1>
                    <p className="text-3xl text-center font-normal">Powered by smart contracts, entirely
                        decentralized</p>
                    <div>
                        <a className="uppercase font-medium gradient-button px-28">Choose game</a>
                    </div>
                </div>
                <div className="absolute -top-[1060px] -right-[800px] -z-10">
                    <img src="/ray_1.png"/>
                </div>
            </section>
            <section className="relative">
                <h2 className="mb-20">Minutka rooms</h2>
                <div className="flex justify-between gap-7">
                    <div className="rooms-card">
                        <div className="flex items-center gap-5">
                            <div>
                                <img src="/ton_coin.png" alt="Coin"/>
                            </div>
                            <div className="flex flex-col">
                                <h4>Room #1</h4>
                                <p className="font-normal">Fixed Bet: 0.1 TON</p>
                            </div>
                        </div>
                        <a className="self-start uppercase gradient-button font-medium">Win 50 ton</a>
                        <p>Total tx: <span className="font-medium">3458</span></p>
                        <p>
                            Your transaction must be processed by the blockchain exactly at 00 seconds of any minute.
                            If the transaction is processed between 50 and 59 seconds or 01 and 10 seconds, you receive
                            a partial refund
                        </p>
                        <a className="uppercase gradient-button font-semibold mt-auto">Play</a>
                    </div>
                    <div className="rooms-card">
                        <div className="flex items-center gap-5">
                            <div>
                                <img src="/ton_coin_double.png" alt="Coin"/>
                            </div>
                            <div className="flex flex-col">
                                <h4>Room #2</h4>
                                <p className="font-normal">Fixed Bet: 0.1 TON</p>
                            </div>
                        </div>
                        <a className="self-start uppercase gradient-button font-medium">WIN 670 TON</a>
                        <p>Total tx: <span className="font-medium">1234</span></p>
                        <p>
                            Choose one of the available bets: even/odd seconds, a range of seconds, or a specific
                            second.
                            The amount of the jackpot will vary depending on the specific option you select.
                        </p>
                        <a className="uppercase gradient-button font-semibold mt-auto">Play</a>
                    </div>
                    <div className="rooms-card ">
                        <div className={"flex flex-col gap-7 relative blur-md"}>
                            <div className="flex items-center gap-5">
                                <div>
                                    <img src="/ton_coin.png" alt="Coin"/>
                                </div>
                                <div className="flex flex-col">
                                    <h4>Room #3</h4>
                                    <p className="font-normal">Fixed Bet: 0.1 TON</p>
                                </div>
                            </div>
                            <a className="self-start uppercase gradient-button font-medium">Win 50 ton</a>
                            <p>Total tx: <span className="font-medium">3458</span></p>
                            <p>
                                Your transaction must be processed by the blockchain exactly at 00 seconds of any
                                minute.
                                If the transaction is processed between 50 and 59 seconds or 01 and 10 seconds, you
                                receive
                                a partial refund
                            </p>
                            <a className="uppercase gradient-button font-semibold mt-auto">Play</a>
                        </div>
                        <div className={"censor-text absolute"}>
                            <span className={"text-6xl font-bold"}>SOON</span>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-[1200px] -left-[1200px] -z-10">
                    <img src="/ray_2.png"/>
                </div>
            </section>
            <section>
                <div className="flex items-center">
                    <div className="flex flex-col gap-12 w-1/2">
                        <h2 className="text-left mb-14">How to play</h2>
                        <div className="flex items-center">
                            <div className="flex flex-col gap-14">
                                <div className="flex items-center gap-9">
                                    <img className="w-36 h-36 object-cover"
                                         src="/wallet.png" alt="Wallet"/>
                                    <div className="flex flex-col gap-1">
                                        <h3>Connect Wallet</h3>
                                        <p>Create and Сonnect your TON Wallet
                                            (Tonkeeper/MyTonWallet/TonHub/TonSpace)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-9">
                                    <img className="w-36 h-36 object-cover"
                                         src="/cursor.png" alt="Wallet"/>
                                    <div className="flex flex-col gap-1">
                                        <h3>Make your choice</h3>
                                        <p>Choose a room and a bet. For example, even seconds</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-9">
                                    <img className="w-36 h-36 object-cover" src="/cup.png"
                                         alt="Wallet"/>
                                    <div className="flex flex-col gap-1">
                                        <h3>Play and Win</h3>
                                        <p>Do the analysis and send the transaction. Congratulations, you are the
                                            winner!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={"w-1/2"} src="/people_2.png" alt="People"/>
                </div>
            </section>
            <section>
                <div className="flex flex-col items-center gap-5 py-24 rounded-3xl backdrop-blur-3xl bg-white/10">
                    <h2>Try your mind and luck</h2>
                    <p className="text-center mb-12 font-normal">Place a bet and take the jackpot</p>
                    <a className="gradient-button px-44">Play</a>
                </div>
            </section>
        </Layout>
    )
}