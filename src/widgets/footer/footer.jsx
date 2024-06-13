export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center gap-6 pt-10 pb-6">
                <span>Logo</span>
                <a className="gradient-button font-normal">Connect Wallet</a>
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <div>
                            <img src="/telegram.png" alt="Telegram" />
                        </div>
                        <p className="text-xs">Chat</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div>
                            <img src="/telegram.png" alt="Telegram" />
                        </div>
                        <p className="text-xs">Channel</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div>
                            <img src="/telegram.png" alt="Telegram" />
                        </div>
                        <p className="text-xs">Bot</p>
                    </div>
                </div>
            </div>
            <div className="py-3 gradient-footer">
                <p className="text-center text-sm">tonMinute 2024</p>
            </div>
        </footer>
    )
}