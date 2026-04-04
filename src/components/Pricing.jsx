export default function Pricing() {
    return (
        <div className="pricing" id="pricings">
            <h1><b>My Pricing</b></h1>
            <div className="pricing-table">
                <div className="pricing-option">
                    <h2><b>Basic</b></h2>
                    <p>Perfect for small businesses</p>
                    <ul>
                        <li>Static Website</li>
                        <li>Up to 5 Pages</li>
                        <li>Basic SEO</li>
                        <li>Responsive Design</li>
                    </ul>
                    <button>$500</button>
                </div>
                <div className="pricing-option">
                    <h2><b>Standard</b></h2>
                    <p>Ideal for growing businesses</p>
                    <ul>
                        <li>Custom Website</li>
                        <li>Up to 10 Pages</li>
                        <li>Advanced SEO</li>
                        <li>API Integration</li>
                        <li>Basic Backend</li>
                    </ul>
                    <button>$1000</button>
                </div>
                <div className="pricing-option">
                    <h2><b>Premium</b></h2>
                    <p>Full-featured Web Apps</p>
                    <ul>
                        <li>Full Custom Website</li>
                        <li>Authentication System</li>
                        <li>Database Integration</li>
                        <li>Advanced Backend</li>
                        <li>Unlimited Pages</li>
                        <li>Comprehensive SEO</li>
                    </ul>
                    <button>$2000</button>
                </div>
            </div>
        </div>
    );
}