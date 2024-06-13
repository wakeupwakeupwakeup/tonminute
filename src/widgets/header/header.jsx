export default function Header() {
    return (
        <header className="flex justify-between items-center pt-7 mb-16 max-w-[1420px] mx-auto">
            <span>Logo</span>
            <div className="flex items-center gap-12">
                <div className="toggle-container language-switch">
                    <input type="checkbox" id="language-toggle" className="language-toggle"/>
                    <label htmlFor="language-toggle" className="toggle-label">
                        <div className="toggle-circle left-[5px]"></div>
                        <span className="lang en ml-3.5">EN</span>
                        <span className="lang ru mr-3.5">RU</span>
                    </label>
                </div>
                <a className="gradient-button-stroke relative">Leaderboard</a>
                <a className="gradient-button">Connect Wallet</a>
            </div>
        </header>
    )
}