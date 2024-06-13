import Layout from "../../app/layouts/layout.jsx";
import {useEffect, useState} from "react";

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}



export default function PlayPage() {
    const [time, setTime] = useState(30);
    const [radius, setRadius] = useState(90);

    const calculateDashOffset = () => {
        const circleLength = 2 * Math.PI * 260;
        return circleLength + (time / 60) * circleLength;
    };

    const calculateDashArray = () => {
        const circleLength = 2 * Math.PI * 260;
        return [circleLength, circleLength];
    };

    useEffect(() => {
        if (time > 0) {
            const interval = setInterval(() => {
                setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);

            return () => clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setRadius(prevRadius => {
                const decreaseRate = 90 / time;
                return prevRadius - decreaseRate;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);


    return (
        <Layout>
            <section className="mt-96 relative">
                <div className="relative flex flex-col gap-10 glass p-12 rounded-xl">
                    <div className="px-16 py-11 gradient rounded-2xl">
                        <h1 className="flex justify-between text-8xl font-semibold"><span
                            className="uppercase">Bet</span><span className="uppercase">Ton</span></h1>
                    </div>
                    <div className="flex justify-between gap-20">
                        <div className="flex flex-col gap-14 w-full">
                            <div className="flex flex-col gap-5">
                                <h4 className="z-10">Make your choice</h4>
                                <div className="grid grid-cols-2 gap-5">
                                    <button className="border border-gray-500 rounded-xl py-7">Even sec</button>
                                    <button className="border border-gray-500 rounded-xl py-7">Odd sec</button>
                                    <button className="border border-gray-500 rounded-xl py-7">00 sec</button>
                                    <button className="border border-gray-500 rounded-xl py-7">30 sec</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h4>Bet Amount</h4>
                                <div
                                    className="flex justify-between items-center p-2.5 pl-7 border border-gray-500 rounded-xl">
                                    <label className="w-1/3" htmlFor="bet">
                                        <input
                                            className="bg-transparent w-1/2"
                                            id="bet" name="bet" type="number" placeholder="0"/>
                                    </label>
                                    <div className={"flex gap-2"}>
                                        <button className="gradient-button px-10">50</button>
                                        <button className="gradient-button px-10">75</button>
                                        <button className="gradient-button px-10">Max</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-5">
                                <h4 className="z-10">Custom bet <span
                                    className="font-thin">(the range of seconds)</span></h4>
                                <div
                                    className="flex justify-between items-center p-2.5 pl-7 border border-gray-500 rounded-xl">
                                    <label className="w-1/3" htmlFor="from">
                                        <input
                                            className="bg-transparent w-1/2"
                                            id="from" name="from" type="number" placeholder="From"/>
                                    </label>
                                    <div className={"flex gap-2"}>
                                        <button className="gradient-button px-5">0 sec</button>
                                        <button className="gradient-button px-5">15 sec</button>
                                        <button className="gradient-button px-5">Max</button>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between items-center p-2.5 pl-7 border border-gray-500 rounded-xl">
                                    <label className="w-1/3" htmlFor="before">
                                        <input
                                            className="bg-transparent w-1/2"
                                            id="before" name="before" type="number" placeholder="Before"/>
                                    </label>
                                    <div className={"flex gap-2"}>
                                        <button className="gradient-button px-5">0 sec</button>
                                        <button className="gradient-button px-5">15 sec</button>
                                        <button className="gradient-button px-5">Max</button>
                                    </div>
                                </div>
                                <button className="gradient-button">Apply</button>
                            </div>
                        </div>
                    </div>
                    <button className="gradient-button w-full">Make bet</button>
                    <div className="absolute flex flex-col items-center justify-center p-28 timer aspect-square">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="uppercase text-4xl">Timer</span>
                            <span className="font-mono text-7xl">{formatTime(time)}</span>
                        </div>
                        <div className={"absolute"}>
                            <svg width={600} height={600}>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{stopColor: '#8143BF', stopOpacity: 1}}/>
                                        <stop offset="100%" style={{stopColor: '#8282FA', stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="-100" cy="300" r="260" fill="none" stroke="url(#gradient)" strokeWidth="40"
                                        strokeDasharray={calculateDashArray().join(' ')}
                                        strokeDashoffset={calculateDashOffset()}
                                        transform="rotate(-90 100 100)"
                                />
                            </svg>
                        </div>
                        <div className={"absolute -z-10"}>
                            <svg width={600} height={600}>
                                <circle cx="-100" cy="300" r="270" fill="none" stroke="#70C1FA" strokeWidth="20"
                                        transform="rotate(-90 100 100)" // начальный поворот для старта с верхней точки
                                />
                            </svg>
                        </div>
                        <div className={"absolute -z-20"}>
                            <svg width={600} height={600}>
                                <circle cx="-100" cy="300" r="260" fill="none" stroke="#232336" strokeWidth="40"
                                        transform="rotate(-90 100 100)" // начальный поворот для старта с верхней точки
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute timer-edge"></div>
                </div>
                <div className="absolute -top-[1060px] -right-[800px] -z-10">
                    <img src="/ray_1.png"/>
                </div>
            </section>
            <section className="flex flex-col gap-16 relative">
                <div className="flex flex-col gap-2 items-center self-center w-1/2">
                    <h2 className="uppercase">Rules</h2>
                    <p className="text-center font-light">You have the opportunity to choose<br/> one of the following
                        bets:</p>
                </div>
                <div className={"flex flex-col gap-16 glass rounded-2xl p-12"}>
                    <div>
                        <div className="flex flex-col gap-10 w-2/3 ">
                            <div className="flex items-center gap-8 ">
                                <img src="/list_1.png" alt="1"/>
                                <div className="flex flex-col gap-4">
                                    <div className="self-start pb-5 border-b border-purple-400">
                                        <h3 className="text-purple-400">Even Second:</h3>
                                    </div>
                                    <ul className="list-disc list-inside font-light">
                                        <li>Payout Multiplier: <span className="text-purple-400">x1.9</span></li>
                                        <li>Winning Condition: You win if your transaction reaches the contract at an
                                            even
                                            second of any minute.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 ">
                                <img src="/list_2.png" alt="1"/>
                                <div className="flex flex-col gap-4">
                                    <div className="self-start pb-5 border-b border-purple-400">
                                        <h3 className="text-purple-400">Odd Second:</h3>
                                    </div>
                                    <ul className="list-disc list-inside font-light">
                                        <li>Payout Multiplier: <span className="text-purple-400">x1.9</span></li>
                                        <li>Winning Condition: You win if your transaction reaches the contract at an
                                            odd
                                            second of any minute.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 ">
                                <img src="/list_3.png" alt="1"/>
                                <div className="flex flex-col gap-4">
                                    <div className="self-start pb-5 border-b border-purple-400">
                                        <h3 className="text-purple-400">00 Second:</h3>
                                    </div>
                                    <ul className="list-disc list-inside font-light">
                                        <li>Payout Multiplier: <span className="text-purple-400">x51</span></li>
                                        <li>Winning Condition: You win if your transaction reaches the contract at the
                                            00
                                            second of any minute.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 ">
                                <img src="/list_4.png" alt="1"/>
                                <div className="flex flex-col gap-4">
                                    <div className="self-start pb-5 border-b border-purple-400">
                                        <h3 className="text-purple-400">30 Second:</h3>
                                    </div>
                                    <ul className="list-disc list-inside font-light">
                                        <li>Payout Multiplier: <span className="text-purple-400">x50</span></li>
                                        <li>Winning Condition: You win if your transaction reaches the contract at the
                                            30
                                            second of any minute.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 self-start pb-3">
                        <div className="self-start pb-3 border-b border-purple-400">
                            <h3 className="text-purple-400">Range of Seconds:</h3>
                        </div>
                        <div className={"font-light"}>
                            <p>Maximum range: 8 seconds</p>
                            <p>Minimum range: 2 seconds</p>
                            <p>Payout Multipliers:</p>
                            <ul className={"list-disc list-inside"}>
                                <li>2-second range: <span>x20</span></li>
                                <li>2-second range: <span>x20</span></li>
                                <li>2-second range: <span>x20</span></li>
                                <li>2-second range: <span>x20</span></li>
                                <li>2-second range: <span>x20</span></li>
                                <li>2-second range: <span>x20</span></li>
                                <li>2-second range: <span>x20</span></li>
                            </ul>
                            <p>
                                Winning Condition: You win if your transaction reaches <br/> the contract at any second
                                within the selected range.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <div className="self-start pb-3 border-b border-purple-400">
                            <h3 className="text-purple-400">How to Check Your Transaction Time?</h3>
                        </div>
                        <p className={"font-light pr-80"}>
                            To check the time of your transaction, you can use the transaction explorer, TonViewer.
                            Simply find your transaction and click on it. On the page that opens, a chain consisting of
                            three links
                            (A -> B -> C) will be displayed. Clicking on A will open a block with information where you
                            can
                            view the
                            "Time" parameter, indicating when your transaction was sent (entered the blockchain).
                            Clicking on B will open a block with information where you can view the "Time" parameter,
                            indicating when the
                            contract received your message.
                        </p>
                    </div>
                </div>
                <div className="absolute -top-[1200px] -left-[1200px] -z-10">
                    <img src="/ray_2.png"/>
                </div>
            </section>
        </Layout>
    )
}