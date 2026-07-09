const PRODUCTS = [
    {
        id: 1,
        name: "Environmental Test Chamber",
        image: "/Assets/Environmental Test Chamber.png",
        images: ["/Assets/Environmental Test Chamber.png", "/Assets/Environmental Test Chamber.png", "/Assets/Environmental Test Chamber.png"],
        shortDescription: "Engineered to simulate extreme environmental conditions with precision, our Environmental Test Chambers ensure reliable performance testing across temperature and humidity ranges. Designed for industries where accuracy, consistency, and compliance are critical.",
        description: `<p>Our Environmental Test Chambers are designed to simulate a wide range of climatic conditions including extreme temperatures, humidity variations, and cyclic environmental stress.
         Built using high-grade materials and advanced control systems, these chambers help manufacturers evaluate product durability, reliability, and performance under real-world conditions.
          Whether you are testing electronic components, automotive parts, medical devices, or industrial materials, our chambers deliver consistent, accurate, and repeatable results — ensuring compliance with global testing standards.</p>
        <br>
        <p><strong>Key Features</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Precision temperature and humidity control with high stability</li>
            <li>PLC-based programmable control with touchscreen interface</li>
            <li>Real-time data logging, graphing, and remote monitoring</li>
            <li>Uniform air circulation for consistent test conditions</li>
            <li>Energy-efficient cooling system with cascade compressors</li>
            <li>Advanced safety protections for uninterrupted operation</li>
            <li>Customizable chamber sizes and configurations</li>
        </ul>
        <p><strong>Construction & Build</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Inner Chamber: SUS304 Stainless Steel.</li>
            <li>Outer Body: Powder-Coated Mild Steel.</li>
            <li>Insulation: High-density polyurethane + insulation cotton.</li>
            <li>Viewing Window: Multi-layer vacuum glass with defogging.</li>
            <li>Shelves: Adjustable stainless steel trays.</li>
        </ul>
        <p><strong>System Components</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Cascade refrigeration system (Bitzer / Danfoss compressors).</li>
            <li>External humidification system with auto water supply.</li>
            <li>Centrifugal air circulation for uniform temperature.</li>
            <li>Nichrome heating elements for rapid heating.</li>
        </ul>
        <p><strong>Safety Features</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Over-temperature protection.</li>
            <li>Water shortage protection.</li>
            <li>Refrigerant pressure protection.</li>
            <li>Over-current & leakage protection.</li>
            <li>Humidifier dry-run protection.</li>
        </ul>
        <p><strong>Why Choose Environmental Test Chamber</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Designed for high-precision testing environments.</li>
            <li>Built with globally trusted components.</li>
            <li>Fully customizable based on testing requirements.</li>
            <li>Remote monitoring via mobile & PC.</li>
            <li>Long operational life with low maintenance.</li>
        </ul>
        <p><strong>Applications</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Electronics & Electrical Testing.</li>
            <li> Automotive Components.</li>
            <li>Aerospace & Defense.</li>
            <li> Medical Devices.</li>
            <li>Plastics & Materials Testing.</li>
            <li>Research & Development Labs.</li>
        </ul>`,
        faqs: [
            { q: "What industries use Environmental Test Chambers?", a: "Our Environmental Test Chambers are widely used across industries where product reliability is critical, including electronics, automotive, aerospace, medical devices, plastics, and research laboratories. They help validate product performance under extreme environmental conditions." },
            { q: "What temperature and humidity ranges can the chamber achieve?", a: "Our chambers are capable of operating within a temperature range of -70°C to +200°C and humidity levels from 10% to 98% RH, depending on configuration and customization requirements." },
            { q: "Can the chamber be customized based on our testing requirements?", a: "Yes, all our chambers are fully customizable. We tailor chamber size, temperature range, humidity control, automation level, and additional features based on your specific testing applications." },
            { q: "How accurate and stable are the test conditions?", a: "The chambers are designed for high precision with temperature fluctuation as low as ±0.1°C and excellent uniformity, ensuring consistent and repeatable test results for critical applications." },
            { q: "Do you provide remote monitoring and control?", a: "Yes, our chambers come with a PLC-based touchscreen controller that supports remote monitoring and operation via PC or mobile devices, allowing real-time tracking and control." },
            { q: "What safety features are included in the chamber?", a: "Our chambers are equipped with multiple safety mechanisms including:<ul><li>Over-temperature protection</li><li>Water level protection </li><li>Refrigerant pressure safety </li><li>Over-current and leakage protection</li><li> Humidifier dry-run protection</li></ul>" }
        ],
        specs: [
            { name: "Temperature Range", value: "-70°C to +200°C (Customizable)" },
            { name: "Humidity Range", value: "10% to 98% RH" },
            { name: "Chamber Volume", value: "50L to 1000L" },
            { name: "Standards", value: "IEC 60068, ASTM, MIL-STD" },
            { name: "Power Supply", value: "220V / 50Hz, Single Phase" },
            { name: "Temperature Fluctuation", value: "±0.1°C" },
            { name: "Temperature Deviation", value: "±1.0°C" },
            { name: "Heating Rate", value: "0.5°C to 15°C/min" },
            { name: "Cooling Rate", value: "0.5°C to 15°C/min" },
            { name: "Controller", value: "PLC + Touchscreen (Omron / Delta / Allen Bradley)" },
            { name: "Sensor", value: "PT100 Platinum Sensor" },
            { name: "Humidity Sensor", value: "Rotronic (Switzerland)" },
            { name: "Refrigerant", value: "R404A / R23" },
            { name: "Power Supply", value: "220V / 415V, 50Hz" }


        ]
    },
    {
        id: 2,
        name: "Salt Spray Test Chamber",
        image: "/Assets/Salt Spray Test Chamber.png",
        images: ["/Assets/Salt Spray Test Chamber.png", "/Assets/Salt Spray Test Chamber.png", "/Assets/Salt Spray Test Chamber.png"],
        shortDescription: "Engineered for precise corrosion testing, our Salt Spray Test Chambers simulate aggressive environmental conditions to validate the durability and performance of materials, coatings, and components across industries.",
        description: `<p>Our Salt Spray Test Chambers are designed to simulate real-world corrosive environments, enabling accurate evaluation of material performance under salt fog conditions. Built in compliance with ASTM B117 standards, these chambers are widely used for testing coatings, metals, and surface treatments across industries such as automotive, electronics, and manufacturing.
With robust construction, precision control systems, and advanced automation capabilities, the system ensures consistent testing results, minimal downtime, and long operational life.</p>
        <br>
        <p><strong>Key Features</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>High-precision corrosion testing under controlled salt fog conditions</li>
                <li>Double-walled insulated chamber for durability and stability</li>
                <li>Available in FRP, Stainless Steel, and hybrid constructions</li>
                <li>Advanced PLC & HMI-based control system (optional)</li>
                <li>Real-time monitoring, data logging, and report generation</li>
                <li>Uniform temperature and humidity distribution</li>
                <li>Designed for continuous and long-duration testing cycles</li>
            </ul>
            <p><strong>ADVANCED FEATURES (VERY IMPORTANT – DIFFERENTIATOR):</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Real-time performance graphs (Temperature vs Humidity)</li>
                <li>Data logging with export & report generation</li>
                <li>Remote monitoring via mobile & PC</li>
                <li>Alarm alerts with history tracking</li>
                <li>Programmable test cycles with repeat functions</li>
                <li>User activity and machine performance tracking</li>
            </ul>
            <p><strong>Applications</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Automotive & Auto Components</li>
                <li>Electronics & Electrical Components</li>
                <li>Aerospace & Defense</li>
                <li>Metal Coating & Surface Treatment</li>
                <li>Paint & Chemical Industry</li>
                <li>R&D Laboratories & Testing Facilities</li>
            </ul>
            <p><strong>Customized to Your Testing Requirements</strong></p>
            <p>Every testing requirement is unique. We offer fully customizable Salt Spray Chambers in terms of size, material, automation level, and control systems to align with your operational and compliance needs.</p>
            <p><strong>Key Customization Options</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Custom chamber sizes available</li>
                <li>Multiple material configurations</li>
                <li>Automation and PLC integration options</li>
                <li>Industry-specific modifications</li>
            </ul>
            <p><strong>Why Choose Salt Spray Test Chamber</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Designed for accurate and consistent corrosion testing</li>
                <li>Built with corrosion-resistant and industrial-grade materials</li>
                <li>Compliant with ASTM B117 testing standards</li>
                <li>Smart PLC-based control with optional automation</li>
                <li>Real-time monitoring and data logging capabilities</li>
                <li>Fully customizable based on testing requirements</li>
                <li>Suitable for long-duration continuous testing cycles</li>
                <li>Low maintenance with high operational reliability</li>
            </ul>`,
        faqs: [
            {
                q: "What is the purpose of a Salt Spray Test Chamber?",
                a: "A Salt Spray Test Chamber is used to evaluate the corrosion resistance of materials and coatings under simulated harsh environmental conditions. It helps manufacturers ensure durability and compliance with industry standards such as ASTM B117."
            },
            {
                q: "What standards does your chamber comply with?",
                a: "Our Salt Spray Chambers are designed in accordance with ASTM B117 standards, ensuring accurate and reliable corrosion testing for industrial and research applications."
            },
            {
                q: "What material options are available for the chamber body?",
                a: "We offer multiple construction options based on your application, including full FRP (Fiber Reinforced Polymer) body, full stainless steel construction (SS-316 inner, SS-304 outer), and inner stainless steel with outer mild steel. These options ensure durability, corrosion resistance, and long operational life."
            },
            {
                q: "What is the temperature and humidity capability of the chamber?",
                a: "The chamber operates within a temperature range of ambient to 38°C and humidity levels up to 98% RH. It maintains high accuracy and uniformity for consistent and repeatable testing results."
            },
            {
                q: "Does the chamber support automation and data logging?",
                a: "Yes, the system can be equipped with PLC and HMI-based smart controls, offering real-time data logging, graphical visualization, report generation, and remote monitoring via mobile and PC for complete control and traceability."
            },
            {
                q: "Can the chamber be customized for specific testing needs?",
                a: "Yes, we provide fully customizable solutions including chamber size, configuration, control systems, and automation levels tailored to your specific testing requirements."
            },
            {
                q: "What safety features are included in the system?",
                a: "Our chambers include advanced safety features such as over-temperature protection, air pressure safety valves, water level alarms, leakage and short circuit protection, and an emergency stop system to ensure safe and uninterrupted operation."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "Ambient to 38°C" },
            { name: "Humidity Range", value: "Up to 98% RH" },
            { name: "Control System", value: "PLC / HMI with Touch Interface" },
            { name: "Compliance", value: "ASTM B117 Standard" },
            { name: "Temperature Range", value: "Ambient to 38°C" },
            { name: "Humidity Range", value: "≥ 98% RH" },
            { name: "Temperature Uniformity", value: "±2°C" },
            { name: "Humidity Uniformity", value: "±5%" },
            { name: "Controller", value: "PID / PLC-based control system" },
            { name: "Display", value: "7” Touch Screen HMI" },
            { name: "Power Supply", value: "220V, Single Phase, 50Hz" },
            { name: "Air Regulator", value: "7 to 13 psi" },
            { name: "Timer Range", value: "0–9999 minutes" },
            { name: "Material Options", value: "FRP / Stainless Steel / Hybrid" },
            { name: "Safety Features", value: "Over-temperature protection, water level alarm, pressure safety system" },
            { name: "Operating Modes", value: "Manual & Automatic" }
        ]
    },
    {
        id: 3,
        name: "UV Accelerated Weathering Test Chamber",
        image: "/Assets/UV Weathering Test Chamber.png",
        images: ["/Assets/UV Weathering Test Chamber.png", "/Assets/UV Weathering Test Chamber.png", "/Assets/UV Weathering Test Chamber.png"],
        shortDescription: "Designed to replicate the damaging effects of sunlight, moisture, and temperature, our UV Weathering Test Chamber enables accelerated testing of materials under controlled environmental conditions. It helps manufacturers predict product lifespan, ensure compliance, and improve material performance before real-world exposure.",
        description: `<p> Our UV Accelerated Weathering Test Chamber is engineered to simulate environmental aging conditions caused by UV radiation, moisture, and temperature. Built with high-grade stainless steel and precision control systems, it enables accurate evaluation of material degradation, color fading, cracking, and coating durability.
Ideal for industries requiring long-term reliability testing, this system ensures faster product validation and compliance with global testing standards.</p>
        <br>
        <p><strong>Key Features</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>High-precision UV exposure using UVA & UVB lamps</li>
                <li>Uniform temperature and humidity distribution</li>
                <li>Automated water spray and condensation simulation</li>
                <li>Advanced PLC-based control with HMI interface</li>
                <li>Real-time data logging, graph visualization, and reporting</li>
                <li>Remote monitoring via LAN, PC, and mobile devices</li>
                <li>Programmable test cycles for accelerated aging simulation</li>
                <li>Built-in safety protections for reliable operation</li>
            </ul>
            <p><strong>Why Choose UV Weathering Test Chamber</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Designed for accurate accelerated weathering simulation</li>
                <li>Supports UVA & UVB spectrum-based testing</li>
                <li>Smart PLC automation with real-time monitoring</li>
                <li>Built with high-grade stainless steel construction</li>
                <li>Remote access via mobile, PC, and LAN connectivity</li>
                <li>Advanced data logging with graph visualization</li>
                <li>Fully programmable cyclic testing capabilities</li>
                <li>Reliable performance with built-in safety systems</li>
            </ul>
            <p><strong>Applications</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Automotive coatings & components</li>
                <li>Paints, coatings & surface treatments</li>
                <li>Plastics & polymer testing</li>
                <li>Rubber & elastomer durability</li>
                <li>Textile and fabric testing</li>
                <li>Electronics and outdoor equipment</li>
                <li>Packaging material testing</li>
            </ul>
            <p><strong>Smart Control & Monitoring (Advanced Features)</strong></p>
            <ul style="padding-left:20px; margin-top:8px; line-height:2;">
                <li>Real-time performance graphs (Temp vs Humidity vs Time)</li>
                <li>Automated alarm and fault detection system</li>
                <li>Historical data tracking and event logging</li>
                <li>Remote machine operation via web interface</li>
                <li>User-friendly interface with guided controls</li>
            </ul>`,
        faqs: [
            {
                q: "How does your UV Weathering Test Chamber replicate real outdoor conditions?",
                a: "Our chamber combines controlled UVA/UVB radiation (200–400 nm), condensation cycles, and temperature control up to 70°C to simulate sunlight, dew, and environmental stress. This enables accelerated testing that closely matches real outdoor exposure conditions."
            },
            {
                q: "What level of control do I get over UV intensity and testing cycles?",
                a: "The system offers adjustable irradiance (0.30–1.0 W/m²) along with fully programmable cycles through a PLC-based interface. Users can precisely control exposure duration, temperature, humidity, and condensation cycles to meet specific testing standards."
            },
            {
                q: "Can this chamber simulate both dry UV exposure and moisture conditions?",
                a: "Yes, the chamber is designed to simulate both UV exposure and moisture effects through controlled condensation and optional water spray systems, ensuring accurate replication of real-world weathering conditions."
            },
            {
                q: "What makes your system more reliable than standard UV chambers?",
                a: "Our system ensures uniform UV exposure, stable temperature control (±1°C), and consistent humidity distribution, reducing variability in test results. Combined with industrial-grade components, it delivers long-term accuracy and reliability."
            },
            {
                q: "What kind of materials can be tested using this system?",
                a: "The chamber is suitable for testing coatings, plastics, rubber, textiles, automotive components, and outdoor products. It helps evaluate fading, cracking, discoloration, and material degradation under UV exposure."
            },
            {
                q: "How does the PLC system improve testing efficiency?",
                a: "The integrated PLC with a 7” touchscreen HMI enables real-time monitoring, graphical visualization, automated test cycles, and data logging with report generation. This reduces manual intervention and ensures consistent, repeatable testing."
            },
            {
                q: "Can I monitor the chamber remotely?",
                a: "Yes, the system supports LAN-based connectivity, allowing remote monitoring and control via PC or mobile devices. You can track performance, adjust parameters, and access data without being physically present."
            }
        ],
        specs: [
            { name: "UV Spectrum", value: "200nm – 400nm (UVA & UVB)" },
            { name: "Temperature Range", value: "Ambient to 60°C (Expandable)" },
            { name: "Humidity Range", value: "50% to 95% RH" },
            { name: "Irradiance Control", value: "0.30 to 1.0 W/m²" },
            { name: "Controller", value: "PLC + 7” Touchscreen Interface" },
            { name: "Data Logging", value: "Automatic Data Logging & Reporting" }
        ]
    },
    {
        id: 4,
        name: "Thermal Shock Test Chamber",
        image: "/Assets/Thermal Shock Chamber.png",
        images: ["/Assets/Thermal Shock Chamber.png", "/Assets/Thermal Shock Chamber.png", "/Assets/Thermal Shock Chamber.png"],
        shortDescription: "Simulate rapid temperature changes to test how your products perform under extreme hot and cold conditions. Our Thermal Shock Test Chamber helps identify weaknesses early, ensuring durability, reliability, and consistent performance in real-world environments.",

        description: `<p>Our Thermal Shock Test Chamber is designed to evaluate how products respond to sudden temperature changes between extreme hot and cold conditions. It helps identify material weaknesses, structural failures, and performance issues that may occur in real-world environments.</p>

    <p>By simulating rapid temperature transitions in a controlled setup, the chamber enables manufacturers to ensure product durability, reliability, and long-term performance before deployment.</p>

    <br>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Rapid transition between high and low temperature zones</li>
        <li>Accurate and repeatable testing conditions</li>
        <li>Dual-zone system for efficient thermal cycling</li>
        <li>Advanced PLC & HMI based control system</li>
        <li>Real-time monitoring and automated operation</li>
        <li>Robust construction for long-term industrial use</li>
    </ul>

    <p><strong>Advanced Thermal Shock Mechanism</strong></p>
    <p>The chamber operates using two separate temperature zones, one for high temperatures and one for low temperatures. Instead of moving the product, the system quickly switches airflow between these zones, exposing the sample to sudden temperature changes.</p>
    <p>This method ensures faster, more accurate testing while maintaining stability and consistency throughout the process.</p>

    <p><strong>Construction & Build:</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>High-quality stainless steel inner chamber</li>
        <li>Durable outer body with industrial-grade finish</li>
        <li>Multi-layer insulation for thermal efficiency</li>
        <li>Uniform airflow system for consistent temperature</li>
        <li>Strong and stable structure for long-term use</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Electronics and semiconductor testing</li>
        <li>Automotive component validation</li>
        <li>Aerospace and defense applications</li>
        <li>Plastic and composite material testing</li>
        <li>Research and development laboratories</li>
        <li>Product durability and stress testing</li>
    </ul>

    <p><strong>Customization Options</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Custom chamber sizes and configurations</li>
        <li>Adjustable temperature ranges and cycles</li>
        <li>Integration with automation systems</li>
        <li>Industry-specific testing setups</li>
        <li>Additional monitoring and safety features</li>
    </ul>

    <p><strong>Why Choose Thermal Shock Test Chamber:</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Designed for high-precision testing environments</li>
        <li>Ensures reliable performance under thermal stress</li>
        <li>Built with globally trusted components</li>
        <li>Smart automation for efficient operation</li>
        <li>Long operational life with minimal maintenance</li>
    </ul>`,

        faqs: [
            {
                q: "1. What is a Thermal Shock Test Chamber used for?",
                a: "A Thermal Shock Test Chamber is used to evaluate how materials and components perform when exposed to sudden temperature changes. It helps identify potential weaknesses such as cracking, deformation, or failure, ensuring the product can withstand real-world environmental conditions."
            },
            {
                q: "2. How does the chamber create rapid temperature changes?",
                a: "The chamber operates using separate high-temperature and low-temperature zones. An advanced airflow system rapidly shifts between these zones, exposing the test sample to extreme temperature variations within seconds without requiring manual movement."
            },
            {
                q: "3. Why is thermal shock testing important?",
                a: "Thermal shock testing helps identify hidden material and structural issues that may not appear under normal conditions. It enables manufacturers to improve product reliability, reduce failure risks, and ensure consistent performance over time."
            },
            {
                q: "4. What types of products can be tested in this chamber?",
                a: "This chamber is suitable for testing a wide range of products, including electronic components, automotive parts, plastics, and composite materials, especially those exposed to rapidly changing temperature environments."
            },
            {
                q: "5. Can the chamber perform automated testing cycles?",
                a: "Yes, the system is equipped with a PLC-based control system that supports fully programmable test cycles. This allows automated, repeatable testing with minimal manual intervention and ensures consistent and accurate results."
            },
            {
                q: "6. Is the chamber customizable based on specific requirements?",
                a: "Yes, the chamber can be fully customized in terms of size, temperature range, control features, and configuration to meet specific testing requirements and industry standards."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "Wide range for extreme hot and cold testing" },
            { name: "Transition System", value: "Rapid switching between temperature zones" },
            { name: "Control System", value: "PLC with advanced HMI interface" },
            { name: "Performance", value: "High accuracy with repeatable results" },
            { name: "Temperature Range", value: "-70°C to +200°C" },
            { name: "Cold Zone", value: "Ambient to -70°C" },
            { name: "Hot Zone", value: "Ambient to +200°C" },
            { name: "Temperature Accuracy", value: "±1°C" },
            { name: "Basket Transfer Time", value: "5 to 45 seconds" },
            { name: "Recovery Time", value: "10 to 30 minutes" },
            { name: "Controller", value: "PLC with HMI" },
            { name: "Cooling Type", value: "Air / Water Cooling" },
            { name: "Construction", value: "Stainless Steel" }
        ]
    },
    {
        id: 5,
        name: "Humidity Test Chamber",
        image: "/Assets/Humidity Test Chamber.png",
        images: ["/Assets/Humidity Test Chamber.png", "/Assets/Humidity Test Chamber.png", "/Assets/Humidity Test Chamber.png"],
        shortDescription: "Create controlled humidity and temperature conditions to evaluate how products perform in real-world environments. Our Humidity Chambers simulate moisture exposure with precision, ensuring reliability, performance, and consistent product quality.",

        description: `<p>Our Humidity Test Chamber is designed to create controlled humidity and temperature conditions for accurate environmental testing. It enables manufacturers to evaluate how materials and components respond to varying moisture levels, helping identify performance issues and ensure long-term durability.</p>

    <p>With a stable testing environment and uniform condition distribution, the chamber delivers consistent and repeatable results across a wide range of applications. Ideal for R&D, validation, and quality assurance, it ensures dependable and precise environmental simulation.</p>

    <br>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Accurate control of humidity levels for dependable environmental testing</li>
        <li>Stable temperature conditions for consistent performance evaluation</li>
        <li>Intelligent PLC-based system with touchscreen interface</li>
        <li>Even airflow distribution for uniform chamber conditions</li>
        <li>Integrated humidification and dehumidification systems</li>
        <li>Programmable testing cycles for automated testing</li>
        <li>Real-time monitoring with data tracking and reporting</li>
        <li>Remote access via mobile and desktop devices</li>
        <li>Energy-efficient design for cost-effective operation</li>
        <li>Durable industrial-grade construction for long-term use</li>
    </ul>

    <p><strong>Advanced Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Multi-stage programmable testing cycles</li>
        <li>Continuous monitoring with real-time feedback</li>
        <li>Data logging with report generation</li>
        <li>Remote monitoring via mobile and desktop</li>
        <li>Alarm system with event history tracking</li>
        <li>Graphical performance analysis and visualization</li>
        <li>Automated repeat cycles for long-duration testing</li>
    </ul>

    <p><strong>Construction & Build</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Triple-layer insulated structure for thermal efficiency</li>
        <li>Corrosion-resistant SS304 stainless steel inner chamber</li>
        <li>Durable outer body for industrial environments</li>
        <li>High-performance airflow system for uniform conditions</li>
        <li>Integrated heating and humidity control systems</li>
        <li>Viewing window for inspection during testing</li>
        <li>Heavy-duty base with wheels for mobility</li>
        <li>Designed for long-term reliability and minimal maintenance</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Electronics and electrical component testing</li>
        <li>Pharmaceutical and healthcare product validation</li>
        <li>Automotive and industrial material testing</li>
        <li>Packaging and stability testing</li>
        <li>Research and development environments</li>
        <li>Product reliability and quality assurance testing</li>
    </ul>

    <p><strong>Customization Options</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Multiple chamber sizes for different applications</li>
        <li>Adjustable humidity and temperature configurations</li>
        <li>Integration with advanced automation systems</li>
        <li>Industry-specific testing setups</li>
        <li>Scalable solutions for evolving testing needs</li>
    </ul>

    <p><strong>Why Choose Humidity Test Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Reliable and repeatable environmental testing conditions</li>
        <li>Stable performance during long-duration testing cycles</li>
        <li>Consistent results across varying environmental conditions</li>
        <li>Smart automation for simplified operation</li>
        <li>Accurate results for critical quality validation</li>
        <li>Built for demanding industrial applications</li>
        <li>Flexible configurations for diverse testing needs</li>
        <li>Trusted solution for performance-driven industries</li>
    </ul>`,

        faqs: [
            {
                q: "What is a Humidity Chamber used for?",
                a: "A Humidity Chamber is used to simulate controlled moisture and temperature conditions to evaluate how products perform in humid environments. It helps identify potential issues such as material degradation, corrosion, and performance instability before real-world deployment."
            },
            {
                q: "How stable are the testing conditions inside the chamber?",
                a: "The chamber is designed to maintain highly stable humidity and temperature levels with precision. Uniform airflow and advanced control systems ensure consistent and repeatable conditions throughout the testing process."
            },
            {
                q: "Can the chamber perform cyclic humidity testing?",
                a: "Yes, the system supports programmable cyclic testing, allowing products to be exposed to varying humidity and temperature levels over time. This helps simulate real-world environmental changes more effectively."
            },
            {
                q: "Is the system suitable for long-duration testing?",
                a: "Yes, the chamber is built for continuous operation and long-duration testing cycles, making it ideal for durability testing and product lifecycle evaluation."
            },
            {
                q: "Can the chamber be customized based on requirements?",
                a: "Yes, the chamber can be fully customized in terms of size, configuration, control features, and automation levels to meet specific industry requirements and testing standards."
            }
        ],
        specs: [
            { name: "Humidity Range", value: "30% to 98% RH" },
            { name: "Temperature Range", value: "10°C to 60°C" },
            { name: "Humidity Accuracy", value: "±3% to ±5% RH" },
            { name: "Control System", value: "PLC with Touchscreen Interface" },
            { name: "Temperature Range", value: "10°C to 60°C" },
            { name: "Humidity Range", value: "30% to 98% RH" },
            { name: "Temperature Accuracy", value: "±1°C" },
            { name: "Humidity Accuracy", value: "±3% to ±5% RH" },
            { name: "Control System", value: "PLC with HMI interface" },
            { name: "Humidity System", value: "Direct vapor generation" },
            { name: "Dehumidification", value: "Refrigeration-based system" },
            { name: "Chamber Construction", value: "SS304 Stainless Steel Interior" }
        ]
    },
    {
        id: 8,
        name: "CASS Test Chamber",
        image: "/Assets/Cass Test Chamber.png",
        images: ["/Assets/Cass Test Chamber.png", "/Assets/Cass Test Chamber.png", "/Assets/Cass Test Chamber.png"],
        shortDescription: "Evaluate corrosion resistance under aggressive environments using copper-accelerated salt spray testing. Designed for precise, reliable, and accelerated validation of coatings and material durability.",

        description: `<p>The CASS Test Chamber is engineered to simulate highly corrosive environments using copper-accelerated salt spray (fog) conditions. This accelerated testing method enables manufacturers to evaluate corrosion resistance of coated and plated components in a significantly reduced timeframe.</p>

    <p>With advanced control over temperature, humidity, and fog generation, the chamber ensures consistent exposure conditions for accurate and repeatable testing. It is widely used in industries where corrosion resistance is critical for product performance and long-term reliability.</p>

    <br>


    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Designed as per ASTM B368 and ISO 9227 standards</li>
        <li>Double-walled construction for thermal stability</li>
        <li>Uniform salt fog distribution for consistent testing</li>
        <li>Solid-state programmable temperature controller</li>
        <li>Corrosion-resistant PT-100 sensor for accuracy</li>
        <li>Integrated air regulator, pressure gauge, and timer</li>
        <li>High-precision fog collection system</li>
        <li>User-friendly touchscreen interface</li>
        <li>Suitable for continuous and long-duration testing</li>
        <li>Built with corrosion-resistant materials</li>
    </ul>

    <p><strong>Advanced Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>PLC & HMI-based smart control system</li>
        <li>Real-time data logging with graphical visualization</li>
        <li>Remote monitoring via mobile and PC without additional software</li>
        <li>Programmable cyclic test profiles</li>
        <li>Alarm system with event history tracking</li>
        <li>Performance graph (Time vs Temperature & Humidity)</li>
        <li>User activity and logging reports</li>
        <li>Automated safety features for over-temperature and pressure</li>
        <li>Screenshot and report generation capability</li>
    </ul>

    <p><strong>Construction & Build</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Inner chamber made of SS316 (high corrosion resistance)</li>
        <li>Outer body options: FRP / SS304 / Mild Steel</li>
        <li>Double-walled insulated structure</li>
        <li>Non-corrosive saturator tank with auto water level control</li>
        <li>High-pressure resistant vessel for continuous operation</li>
        <li>Tape heater system for uniform heating (no direct radiation)</li>
        <li>Transparent lid for observation</li>
        <li>Heavy-duty industrial structure</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Automotive components and coatings</li>
        <li>Electroplated and painted surfaces</li>
        <li>Aerospace and defense materials</li>
        <li>Hardware and fasteners testing</li>
        <li>Marine and outdoor equipment</li>
        <li>Industrial coating validation</li>
    </ul>

    <p><strong>Customization Options</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Multiple chamber sizes (500L to 1800L and beyond)</li>
        <li>Choice of material construction (FRP / SS / Hybrid)</li>
        <li>PLC-based advanced automation options</li>
        <li>Custom test cycle programming</li>
        <li>Additional safety and monitoring integrations</li>
        <li>Industry-specific configurations</li>
    </ul>

    <p><strong>Why Choose CASS Test Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Accelerated corrosion testing for faster results</li>
        <li>High accuracy and repeatability in testing</li>
        <li>Compliance with global testing standards</li>
        <li>Advanced automation for efficient operation</li>
        <li>Designed for continuous industrial usage</li>
        <li>Reliable performance in critical environments</li>
        <li>Flexible configurations based on application needs</li>
        <li>Trusted solution for coating and material validation</li>
    </ul>`,

        faqs: [
            {
                q: "What makes CASS testing more aggressive than standard salt spray testing?",
                a: "CASS (Copper Accelerated Acetic Acid Salt Spray) testing uses a combination of copper chloride and acidic conditions to significantly accelerate the corrosion process. This makes it more severe than standard salt spray testing, allowing faster evaluation of coating performance and corrosion resistance."
            },
            {
                q: "When should CASS testing be preferred over NSS testing?",
                a: "CASS testing is preferred when evaluating high-performance coatings such as electroplated parts, decorative finishes, and protective layers that must withstand harsh environments. It is ideal when faster and more stringent corrosion validation is required."
            },
            {
                q: "What types of products are typically tested in a CASS chamber?",
                a: "CASS chambers are widely used for testing automotive components, chrome-plated parts, anodized surfaces, fasteners, and coated metals that require high corrosion resistance in aggressive environmental conditions."
            },
            {
                q: "How does the chamber ensure consistent corrosion conditions?",
                a: "The chamber maintains controlled temperature, humidity, and fog generation using precision sensors and automated systems. Uniform salt fog distribution and stable environmental conditions ensure repeatable and reliable test results."
            },
            {
                q: "Can different corrosion test cycles be programmed?",
                a: "Yes, the system supports programmable test cycles, allowing users to define exposure duration, environmental conditions, and repeat cycles to accurately simulate real-world corrosion patterns."
            },
            {
                q: "Does the system support monitoring and data tracking?",
                a: "Yes, advanced PLC and HMI systems enable real-time monitoring, data logging, and performance tracking. Users can access test data, graphs, and reports for analysis and documentation."
            },
            {
                q: "Is the chamber suitable for long-duration testing?",
                a: "Yes, the chamber is designed for continuous operation with stable environmental control, making it suitable for extended corrosion testing and long-term durability evaluation."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "Ambient to +60°C" },
            { name: "Testing Standards", value: "ASTM B368, ISO 9227" },
            { name: "Humidity Capability", value: "≥ 95% RH" },
            { name: "Control System", value: "PLC / HMI with Data Logging" },
            { name: "Temperature Range", value: "Ambient to 60°C" },
            { name: "Temperature Accuracy", value: "±2°C" },
            { name: "Temperature Uniformity", value: "±2°C" },
            { name: "Humidity Range", value: "≥ 95% RH" },
            { name: "Humidity Uniformity", value: "±5%" },
            { name: "Controller", value: "PLC / HMI (Omron based)" },
            { name: "Display", value: "7” Touchscreen Interface" },
            { name: "Air Regulator", value: "7–13 psi" },
            { name: "Timer", value: "0–9999 minutes adjustable" },
            { name: "Sensor", value: "Corrosion-resistant PT-100" },
            { name: "Power Supply", value: "220V, Single Phase, 50Hz" },
            { name: "Safety Features", value: "Over-temperature, pressure safety valve, alarms" }
        ]
    },
    {
        id: 7,
        name: "Hot & Cold Test Chamber",
        image: "/Assets/Hot Cold Test Chamber.png",
        images: [
            "/Assets/Hot Cold Test Chamber.png",
            "/Assets/Hot Cold Test Chamber.png",
            "/Assets/Hot Cold Test Chamber.png"
        ],
        shortDescription: "Designed to simulate extreme temperature variations, the Hot & Cold Test Chamber enables precise evaluation of product performance, durability, and reliability across rapidly changing environmental conditions.",

        description: `<p>The Hot & Cold Test Chamber is designed to evaluate how materials and products perform under rapidly changing temperature conditions. By simulating both high and low temperature environments within a controlled setup, it helps identify structural weaknesses, performance limitations, and long-term durability challenges.</p>

    <p>Built with precision components and advanced control systems, the chamber ensures accurate, repeatable, and reliable testing outcomes across a wide range of industrial applications.</p>

    <br>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Wide temperature range for extreme hot and cold testing</li>
        <li>High accuracy with stable and consistent performance</li>
        <li>Advanced PLC-based control with touchscreen interface</li>
        <li>Fully programmable testing cycles for automation</li>
        <li>Efficient cascade cooling system for low-temperature stability</li>
        <li>Uniform air circulation for consistent test conditions</li>
        <li>Real-time monitoring with data logging capabilities</li>
        <li>Remote access via PC and mobile devices</li>
        <li>Industrial-grade construction for long-term durability</li>
    </ul>

    <p><strong>Why Choose Hot & Cold Test Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Designed for extreme temperature variation testing</li>
        <li>High accuracy with stable and uniform performance</li>
        <li>Advanced PLC automation with remote monitoring</li>
        <li>Reliable operation for continuous testing cycles</li>
        <li>Built using industrial-grade components</li>
        <li>Optimized airflow for consistent results</li>
        <li>Low maintenance with long operational life</li>
        <li>Fully customizable to meet application-specific needs</li>
    </ul>

    <p><strong>Smart Control & Automation</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Fully programmable test cycles with multi-step control</li>
        <li>Remote monitoring via mobile, PC, and web interface</li>
        <li>Real-time data logging and performance tracking</li>
        <li>Graph-based visualization with historical data</li>
        <li>Alarm system with complete event history logging</li>
        <li>User access control and system usage tracking</li>
        <li>Repeat cycles and automated testing sequences</li>
    </ul>

    <p><strong>Industrial-Grade Engineering</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Inner chamber made of SUS304 stainless steel</li>
        <li>Outer body with durable coated mild steel construction</li>
        <li>Double-walled insulated cabinet for thermal efficiency</li>
        <li>High-performance air circulation system</li>
        <li>Multi-layer viewing window with anti-fog design</li>
        <li>Heavy-duty castor wheels for mobility</li>
        <li>Efficient heating (nichrome heaters) and cooling systems</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Electronics and electrical component testing</li>
        <li>Automotive and industrial validation</li>
        <li>Aerospace and defense testing</li>
        <li>Plastic, metal, and material testing</li>
        <li>Medical and laboratory applications</li>
        <li>Product reliability and quality assurance</li>
    </ul>

    <p><strong>Customized to Your Testing Requirements</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Multiple chamber sizes and capacities available</li>
        <li>Adjustable heating and cooling rates</li>
        <li>Custom automation and control configurations</li>
        <li>Industry-specific testing solutions</li>
        <li>Scalable systems for future expansion</li>
    </ul>`,

        faqs: [
            {
                q: "What is a Hot & Cold Test Chamber used for?",
                a: "A Hot & Cold Test Chamber is used to evaluate how materials, components, and finished products perform when exposed to both high and low temperature conditions. It helps identify potential weaknesses such as expansion, contraction, or material degradation, ensuring reliable performance under real-world environmental variations."
            },
            {
                q: "What temperature range does the chamber support?",
                a: "The chamber typically operates within a wide temperature range of -70°C to +200°C, enabling comprehensive testing under extreme hot and cold conditions for various industrial and research applications."
            },
            {
                q: "How accurate and stable are the testing conditions?",
                a: "The chamber maintains high accuracy with minimal temperature fluctuation and controlled deviation. Advanced air circulation and insulation systems ensure uniform temperature distribution for consistent and repeatable test results."
            },
            {
                q: "Can the chamber perform automated testing cycles?",
                a: "Yes, the system is equipped with a PLC-based control system that allows fully programmable testing cycles. Users can define multiple stages such as heating, cooling, and holding periods for automated and repeatable testing."
            },
            {
                q: "Is remote monitoring and control available?",
                a: "Yes, the chamber supports remote monitoring and operation via PC or mobile devices, enabling real-time tracking, parameter adjustments, and data review for improved efficiency."
            },
            {
                q: "Which industries commonly use this chamber?",
                a: "Hot & Cold Test Chambers are widely used in industries such as electronics, automotive, aerospace, medical devices, and materials testing where products must perform reliably under varying temperature conditions."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "-70°C to +200°C" },
            { name: "Uniformity", value: "±0.5°C" },
            { name: "Control System", value: "PLC + Touchscreen HMI" },
            { name: "Cooling System", value: "Cascade Refrigeration" },
            { name: "Temperature Range", value: "-70°C to +200°C" },
            { name: "Temperature Fluctuation", value: "±0.5°C" },
            { name: "Temperature Deviation", value: "±2.0°C" },
            { name: "Heating Rate", value: "0.5 to 15°C/min" },
            { name: "Cooling Rate", value: "0.5 to 15°C/min" },
            { name: "Refrigerant", value: "R404A / R23" },
            { name: "Controller", value: "PLC with touchscreen interface" },
            { name: "Cooling System", value: "Cascade Refrigeration" },
            { name: "Power Supply", value: "220V / 415V, 50Hz" }
        ]
    },
    {
        id: 6,
        name: "Hot Air Oven",
        image: "/Assets/Hot Air Oven.png",
        images: ["/Assets/Hot Air Oven.png", "/Assets/Hot Air Oven.png", "/Assets/Hot Air Oven.png"],
        shortDescription: "Create a precisely controlled heating environment to evaluate product performance, durability, and material behavior under elevated temperature conditions with uniform heat distribution and stable thermal control.",

        description: `<p>The Hot Air Oven is designed to create a stable and controlled thermal environment for a wide range of heating and drying applications. It enables manufacturers to evaluate product behavior, perform curing processes, and conduct thermal testing with high accuracy.</p>

    <p>With advanced airflow management and precision heating systems, the oven ensures consistent temperature distribution throughout the chamber, minimizing variations and delivering repeatable results for both laboratory and industrial-scale operations.</p>

    <br>

    

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Uniform temperature distribution for consistent results</li>
        <li>Forced air circulation system for efficient heat transfer</li>
        <li>Advanced PLC & HMI-based control system</li>
        <li>Programmable temperature cycles for repeatable testing</li>
        <li>Energy-efficient heating system with optimized elements</li>
        <li>Real-time monitoring with data logging capability</li>
        <li>Transparent viewing window for inspection</li>
        <li>Adjustable shelves for flexible configurations</li>
        <li>Stable performance for long-duration operation</li>
        <li>Low maintenance and user-friendly operation</li>
    </ul>

    <p><strong>Advanced Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>PLC-based smart automation system</li>
        <li>Real-time data logging with graphical visualization</li>
        <li>Remote monitoring via mobile and PC</li>
        <li>Multi-stage programmable profiles (up to 9999 cycles)</li>
        <li>Alarm system with event history tracking</li>
        <li>PID-based temperature control (auto/manual tuning)</li>
        <li>Graph-based performance analysis with history tracking</li>
        <li>Screenshot and report generation capability</li>
        <li>User activity and operation tracking</li>
        <li>Fully automated heating control system</li>
    </ul>

    <p><strong>Construction & Build</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Triple-walled insulated cabinet for thermal efficiency</li>
        <li>Outer body made of powder-coated mild steel</li>
        <li>Inner chamber made of SS304 stainless steel</li>
        <li>Insulated door with magnetic sealing</li>
        <li>Transparent inner glass door for observation</li>
        <li>High-grade glass wool insulation</li>
        <li>Centrifugal blower for uniform air circulation</li>
        <li>Nichrome heating elements for efficient heating</li>
        <li>Heavy-duty castor wheels for mobility</li>
        <li>Industrial-grade construction for durability</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Material drying and curing processes</li>
        <li>Electronics and component testing</li>
        <li>Pharmaceutical and laboratory applications</li>
        <li>Industrial product testing and validation</li>
        <li>Heat treatment and aging tests</li>
        <li>Research and development environments</li>
    </ul>

    <p><strong>Customization Options</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Multiple chamber sizes (bench-top to walk-in)</li>
        <li>Custom temperature ranges and control systems</li>
        <li>PLC-based automation upgrades</li>
        <li>Adjustable shelving and internal configurations</li>
        <li>Industry-specific modifications</li>
        <li>Scalable solutions for large-scale operations</li>
    </ul>

    <p><strong>Why Choose Hot Air Oven</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Ensures uniform and consistent heating performance</li>
        <li>Accurate and repeatable thermal testing</li>
        <li>Advanced automation for efficient operation</li>
        <li>Reliable for continuous industrial usage</li>
        <li>Energy-efficient and cost-effective solution</li>
        <li>Flexible configurations for diverse applications</li>
        <li>Durable industrial-grade construction</li>
        <li>Trusted solution for precision heating processes</li>
    </ul>`,

        faqs: [
            {
                q: "What are the primary applications of a Hot Air Oven?",
                a: "Hot Air Ovens are used for drying, curing, sterilization, and thermal testing across various industries. They help evaluate how materials and products behave under controlled high-temperature conditions, making them essential for quality validation and process consistency."
            },
            {
                q: "How does the oven maintain uniform temperature throughout the chamber?",
                a: "The system uses a forced air circulation mechanism with a centrifugal blower that continuously distributes heated air across the chamber. This ensures minimal temperature variation and consistent conditions for accurate and repeatable testing."
            },
            {
                q: "Can the oven perform programmable temperature cycles?",
                a: "Yes, the oven supports programmable temperature profiles including ramp-up, soaking, and cyclic testing. This allows users to simulate real-world thermal conditions and conduct repeatable testing with precision."
            },
            {
                q: "What makes this oven suitable for industrial use?",
                a: "The oven is built with a robust insulated structure, a high-quality stainless steel chamber, and industrial-grade heating elements. Combined with PLC-based automation, it is designed for continuous operation in demanding environments."
            },
            {
                q: "Is it possible to monitor and control the oven remotely?",
                a: "Yes, with PLC and HMI integration, the system enables remote monitoring, data logging, and control via mobile and PC interfaces, allowing efficient operation without constant manual supervision."
            },
            {
                q: "How energy-efficient is the system?",
                a: "The oven is designed with optimized insulation and efficient heating elements to minimize heat loss and reduce energy consumption, making it cost-effective for long-duration testing and industrial use."
            },
            {
                q: "Can the oven be customized for specific applications?",
                a: "Yes, the system can be customized in terms of chamber size, temperature range, control systems, and internal configurations to meet specific industrial or laboratory requirements."
            },
            {
                q: "Is the oven suitable for continuous and long-duration testing?",
                a: "Yes, it is engineered for stable long-term operation with consistent performance, making it ideal for durability testing and extended thermal processing applications."
            }
        ],
        specs: [
            { name: "Temperature Capability", value: "Up to +250°C (customizable)" },
            { name: "Airflow System", value: "Forced Air Circulation" },
            { name: "Chamber Options", value: "Bench-top to Walk-in Models" },
            { name: "Control System", value: "PLC / HMI with Data Logging" },
            { name: "Temperature Range", value: "Up to 250°C (customizable)" },
            { name: "Temperature Control", value: "PID / PLC-based system" },
            { name: "Air Circulation", value: "Forced convection (blower-based)" },
            { name: "Chamber Material", value: "SS304 inner chamber" },
            { name: "Insulation", value: "High-grade glass wool" },
            { name: "Shelves", value: "Adjustable (SS / Aluminium)" },
            { name: "Control Interface", value: "Touchscreen HMI" },
            { name: "Operation Modes", value: "Auto / Manual" },
            { name: "Power Supply", value: "220V / 415V AC" }
        ]
    },
    {
        id: 9,
        name: "Corrosion Test Chamber",
        image: "/Assets/Corrosion Test Chamber.png",
        images: [
            "/Assets/Corrosion Test Chamber.png",
            "/Assets/Corrosion Test Chamber.png",
            "/Assets/Corrosion Test Chamber.png"
        ],
        shortDescription: "Simulate real-world corrosion conditions with precision to evaluate material durability, coating performance, and product reliability. Designed for salt spray, CASS, and cyclic corrosion testing, this chamber ensures consistent and accelerated corrosion analysis.",

        description: `<p>The Corrosion Test Chamber is engineered to replicate harsh environmental conditions for evaluating corrosion resistance of materials, coatings, and components. It supports salt spray testing, CASS testing, and cyclic corrosion testing, making it a versatile solution for industrial applications.</p>
    <br>
    <p>The system provides precise control over temperature, humidity, and fog generation, ensuring stable and repeatable testing conditions. This allows manufacturers to assess product durability under accelerated corrosion environments and improve product quality and compliance.</p>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Supports Salt Spray, CASS, and cyclic corrosion testing</li>
        <li>Wide temperature and humidity control range</li>
        <li>PLC & HMI-based intelligent control system</li>
        <li>Uniform fog distribution for consistent exposure</li>
        <li>Automated safety systems for reliable operation</li>
        <li>Real-time data logging and monitoring</li>
        <li>Corrosion-resistant construction materials</li>
        <li>Stable performance for long-duration testing</li>
        <li>User-friendly programmable controls</li>
    </ul>

    <p><strong>Advanced Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>PLC automation with touchscreen interface</li>
        <li>Graph-based real-time data visualization</li>
        <li>Wireless / LAN connectivity for remote monitoring</li>
        <li>Programmable cyclic corrosion testing profiles</li>
        <li>Auto and manual operation modes</li>
        <li>Alarm system with indicators and buzzer</li>
        <li>USB data export functionality</li>
        <li>System performance monitoring (Voltage & Current)</li>
    </ul>

    <p><strong>Construction & Build</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>FRP corrosion-resistant internal and external structure</li>
        <li>Double-walled insulated chamber</li>
        <li>Fiber door with acrylic viewing window</li>
        <li>High-quality fog spray nozzle system</li>
        <li>Saturation tower with pressure safety valve</li>
        <li>Dedicated tanks for NaCl solution and DM water</li>
        <li>Uniform heating with tape heater system</li>
        <li>Industrial-grade components for durability</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Automotive components and coatings</li>
        <li>Electroplated and painted surfaces</li>
        <li>Metal finishing industries</li>
        <li>Electronics and electrical components</li>
        <li>Aerospace and defense applications</li>
        <li>Industrial durability testing</li>
    </ul>

    <p><strong>Customization Options</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Multiple chamber capacities (500L and above)</li>
        <li>PLC automation upgrades</li>
        <li>Custom test cycle programming</li>
        <li>Material options (FRP / SS / Hybrid)</li>
        <li>Industry-specific configurations</li>
        <li>Integration with monitoring systems</li>
    </ul>

    <p><strong>Why Choose Corrosion Test Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Designed for accelerated corrosion validation</li>
        <li>Supports multiple testing methods in one system</li>
        <li>Ensures high accuracy and repeatability</li>
        <li>Advanced automation for efficiency</li>
        <li>Reliable performance for continuous testing</li>
        <li>Flexible configurations for various industries</li>
        <li>Built with corrosion-resistant materials</li>
        <li>Ideal for quality assurance and compliance</li>
    </ul>`,

        faqs: [
            {
                q: "What types of corrosion tests can be performed in this chamber?",
                a: "The chamber supports salt spray testing, CASS testing, and cyclic corrosion testing, enabling evaluation of materials and coatings under various environmental conditions."
            },
            {
                q: "What is the advantage of cyclic corrosion testing?",
                a: "Cyclic corrosion testing simulates real-world environmental variations by alternating between humidity, temperature, and salt exposure, providing more realistic results."
            },
            {
                q: "How does the chamber ensure consistent corrosion conditions?",
                a: "It uses controlled fog spray, temperature regulation, and humidity control along with uniform fog distribution to maintain stable testing conditions."
            },
            {
                q: "Can the system be monitored remotely?",
                a: "Yes, it supports wireless and LAN connectivity for real-time monitoring and control via mobile devices and computers."
            },
            {
                q: "Is the chamber suitable for continuous industrial testing?",
                a: "Yes, it is designed for long-duration testing with stable performance and built-in safety systems."
            },
            {
                q: "Can the chamber be customized?",
                a: "Yes, it can be customized in terms of size, materials, control systems, and testing cycles to meet specific requirements."
            }
        ],

        specs: [
            { name: "Temperature Range", value: "10°C to 70°C" },
            { name: "Humidity Range", value: "30% to 100% RH" },
            { name: "Temperature Accuracy", value: "±2°C" },
            { name: "Humidity Accuracy", value: "±3%" },
            { name: "Capacity", value: "500 Liters (Customizable)" },
            { name: "Chamber Size", value: "800 × 800 × 800 mm" },
            { name: "Control System", value: "PLC with 7” Touchscreen (HMI)" },
            { name: "Air Regulator", value: "10–20 PSI" },
            { name: "Timer", value: "0–9999 minutes" },
            { name: "Sensor", value: "PT-100 corrosion-resistant sensor" },
            { name: "Power Supply", value: "220V, Single Phase, 50Hz" },
            { name: "Safety", value: "Over-temperature, pressure valve, alarms" }
        ]
    },
    {
        id: 10,
        name: "Rain Test Chamber",
        image: "/Assets/Rain Test Chamber.png",
        images: ["/Assets/Rain Test Chamber.png", "/Assets/Rain Test Chamber.png", "/Assets/Rain Test Chamber.png"],
        shortDescription: "Engineered to simulate real-world rain exposure conditions, our Rain Test Chambers help evaluate product durability, sealing performance, and protection against water ingress across critical industrial applications.",
        description: `<p>Our Rain Test Chamber is designed to simulate controlled rain conditions to test the ingress protection and sealing performance of products. It is widely used for validating external enclosures, automotive components, lighting systems, and electronic devices exposed to rain environments.
Built with corrosion-resistant stainless steel and equipped with advanced PLC-based automation, the system ensures precise control over spray intensity, rotation, and testing cycles. This enables reliable and repeatable testing aligned with international standards.</p>
        <br>
        <p><strong>Key Features</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Simulates real-world rain and water exposure conditions</li>
            <li>Supports IPX1 to IPX6 testing configurations</li>
            <li>High-precision spray system with adjustable nozzles</li>
            <li>Rotating test platform with variable speed control</li>
            <li>Advanced PLC + HMI-based automation</li>
            <li>Real-time monitoring and data logging</li>
            <li>Durable SS304 stainless steel internal construction</li>
            <li>Uniform spray distribution for accurate testing</li>
        </ul>
        <p><strong>Why Choose Rain Test Chamber</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Designed for accurate water ingress and sealing validation</li>
            <li>Supports multiple IP testing standards (IPX1 to IPX6)</li>
            <li>High-performance spray system with uniform distribution</li>
            <li>Smart PLC automation with real-time monitoring</li>
            <li>Adjustable rotation and spray configurations</li>
            <li>Built with corrosion-resistant industrial materials</li>
            <li>Suitable for long-duration testing cycles</li>
            <li>Fully customizable based on application requirements</li>
        </ul>
        <p><strong>Smart Monitoring & Control</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Real-time data logging with graphical visualization</li>
            <li>Remote operation via mobile and laptop</li>
            <li>Alarm system with history tracking</li>
            <li>Programmable test cycles (0–9999 segments)</li>
            <li>User activity and event logging reports</li>
            <li>Machine performance tracking and working hours</li>
            <li>Screenshot and report export functionality</li>
        </ul>
        <p><strong>Applications</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Automotive and two-wheeler components</li>
            <li>Electrical and electronic enclosures</li>
            <li>LED lighting systems and fixtures</li>
            <li>Batteries and sealed components</li>
            <li>Outdoor equipment and devices</li>
        </ul>
        <p><strong>Customized to Your Testing Requirements</strong></p>
        <p>Every application has unique testing needs. We offer fully customizable Rain Test Chambers in terms of size, spray configuration, automation level, and control systems to meet your operational and compliance requirements.</p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Custom chamber sizes available</li>
            <li>Adjustable spray and nozzle configurations</li>
            <li>Multiple IP testing standards support</li>
            <li>PLC automation and remote monitoring options</li>
        </ul>`,
        faqs: [
            {
                q: "What types of IP testing can this chamber perform?",
                a: "The chamber supports IPX1 to IPX6 testing standards, enabling validation against dripping water, spray, and powerful water jets to assess ingress protection performance."
            },
            {
                q: "How does the system ensure uniform water distribution?",
                a: "The chamber uses a multi-nozzle spray system with controlled spacing and pressure to ensure consistent and uniform water exposure across the test sample."
            },
            {
                q: "Can the rotation and spray settings be adjusted?",
                a: "Yes, the system allows adjustment of turntable rotation speed (1–17 RPM) and spray angles to match specific testing requirements and standards."
            },
            {
                q: "What industries typically use this chamber?",
                a: "This chamber is widely used in automotive, electronics, lighting, battery, and manufacturing industries for testing water ingress and sealing performance."
            },
            {
                q: "Is the chamber customizable for different product sizes?",
                a: "Yes, the chamber is fully customizable in terms of size, spray configuration, and automation level to suit specific application requirements."
            },
            {
                q: "Does the system support automation and remote monitoring?",
                a: "Yes, the PLC-based control system supports automated testing cycles, real-time data logging, and remote monitoring via PC and mobile devices for efficient operation."
            }
        ],
        specs: [
            { name: "Testing Standards", value: "IPX1 to IPX6 Supported" },
            { name: "Control System", value: "PLC + 7” Touch Screen HMI" },
            { name: "Spray System", value: "Adjustable Multi-Nozzle Configuration" },
            { name: "Rotation System", value: "Adjustable Turntable (1–17 RPM)" },
            { name: "Water Pressure", value: "80–200 KPa" },
            { name: "Customization", value: "Custom Sizes Available" },
            { name: "Internal Dimensions", value: "1000 × 1000 × 1000 mm (Customizable)" },
            { name: "Test Bench Diameter", value: "300 mm" },
            { name: "Rotation Speed", value: "1–17 RPM (Adjustable)" },
            { name: "Spray Hole Diameter", value: "0.4 mm / 0.8 mm" },
            { name: "Spray Hole Spacing", value: "50 mm" },
            { name: "Spray Pressure", value: "80–100 KPa (Up to 200 KPa in advanced models)" },
            { name: "Water Flow Rate", value: "2 to 40 L/min" },
            { name: "No. of Spray Nozzles", value: "40" },
            { name: "Water Shower Points", value: "8" },
            { name: "Spray Angle", value: "60° (JSS Standard)" },
            { name: "Rotary Arc", value: "90° / 120° (IPX3, IPX4)" },
            { name: "Controller", value: "PLC (Delta / Omron) with 7” Touch Screen" },
            { name: "Water Supply", value: "Storage Tank with filtration system" },
            { name: "Power Supply", value: "415V AC / 230V AC, 50Hz" }
        ]
    },
    {
        id: 11,
        name: "Dust Test Chamber",
        image: "/Assets/Dust Test Chamber.png",
        images: ["/Assets/Dust Test Chamber.png", "/Assets/Dust Test Chamber.png", "/Assets/Dust Test Chamber.png"],
        shortDescription: "Simulate real-world dust and particulate environments to evaluate product durability, sealing efficiency, and resistance to dust ingress under harsh conditions.",

        description: `<p>Our Dust Test Chamber is designed to simulate real-world dust and particulate environments, enabling manufacturers to evaluate product sealing efficiency, durability, and resistance to dust ingress.</p>

    <p>With precise airflow control and automated dust circulation systems, the chamber ensures uniform dust distribution and consistent, repeatable testing conditions. It is ideal for product validation and quality assurance across industries where dust exposure is a critical factor.</p>

    <br>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Controlled dust circulation for realistic environmental simulation</li>
        <li>Adjustable airflow and dust agitation system</li>
        <li>Advanced PLC-based control with touchscreen interface</li>
        <li>Uniform dust distribution across the test chamber</li>
        <li>Programmable test cycles for repeatability</li>
        <li>Real-time monitoring and data logging</li>
        <li>Remote operation via mobile and PC</li>
        <li>Dust-tight sealing for accurate testing conditions</li>
        <li>Built-in observation window for test monitoring</li>
        <li>Low-noise motor with dust protection system</li>
    </ul>

    <p><strong>Advanced Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Fully automated PLC control with program logic system</li>
        <li>Wi-Fi enabled remote monitoring and operation</li>
        <li>Multi-stage cyclic testing capability</li>
        <li>Real-time data logging with time-based tracking</li>
        <li>Alarm system with event and history tracking</li>
        <li>Graph-based performance monitoring</li>
        <li>Programmable profiles with repeat cycles (0–9999)</li>
        <li>User-defined testing programs and automation flexibility</li>
    </ul>

    <p><strong>Construction & Build</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Exterior built using CRCA, SS304/SS316, or galvanized sheet</li>
        <li>Stainless steel inner chamber with mirror finish</li>
        <li>Dust-tight door with double-lined silicone gasket</li>
        <li>Toughened glass observation window with wiper system</li>
        <li>Removable and adjustable stainless steel trays</li>
        <li>High-efficiency insulation for energy savings</li>
        <li>U-shaped air heaters for controlled temperature</li>
        <li>Ports for cable entry and additional instrumentation</li>
        <li>Heavy-duty castor wheels for easy mobility</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Automotive components and auto parts testing</li>
        <li>Electronic components and enclosures</li>
        <li>LED lighting and outdoor fixtures</li>
        <li>Batteries and electrical equipment</li>
        <li>Two-wheeler and industrial parts</li>
        <li>Product sealing and ingress protection testing</li>
    </ul>

    <p><strong>Customization Options</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Custom chamber sizes and configurations</li>
        <li>Adjustable airflow and dust concentration settings</li>
        <li>Integration with advanced control systems</li>
        <li>Industry-specific testing setups</li>
        <li>Optional accessories like chamber lighting and additional ports</li>
        <li>Scalable solutions based on testing requirements</li>
    </ul>

    <p><strong>Why Choose Dust Test Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Designed for accurate dust ingress and protection testing</li>
        <li>Ensures consistent and repeatable environmental conditions</li>
        <li>Complies with international testing standards</li>
        <li>Advanced automation for efficient operation</li>
        <li>Reliable performance for long-duration testing</li>
        <li>Built with durable industrial-grade materials</li>
        <li>Flexible configurations for different industries</li>
        <li>Trusted solution for critical product validation</li>
    </ul>`,

        faqs: [
            {
                q: "What is a Dust Test Chamber used for?",
                a: "A Dust Test Chamber is used to simulate dusty environments to evaluate how well products resist dust ingress. It helps manufacturers test sealing effectiveness and ensure product durability under harsh environmental conditions."
            },
            {
                q: "Which standards does the chamber comply with?",
                a: "The chamber is designed to meet international testing standards such as IEC 60529, IS 9000, JIS, and MIL, ensuring reliable and globally accepted testing results."
            },
            {
                q: "How is dust circulation controlled inside the chamber?",
                a: "The system uses controlled airflow, dust agitation mechanisms, and calibrated circulation to ensure uniform dust distribution throughout the chamber for accurate and repeatable testing conditions."
            },
            {
                q: "Can the chamber be operated remotely?",
                a: "Yes, the system supports remote monitoring and operation via mobile and PC, allowing users to control and track testing processes without being physically present."
            },
            {
                q: "Is the chamber customizable?",
                a: "Yes, the chamber can be customized in terms of size, configuration, airflow, and control systems to meet specific industry requirements and applications."
            },
            {
                q: "What type of products can be tested?",
                a: "The chamber is suitable for testing automotive parts, electronic devices, LED lighting systems, batteries, and other products that require dust resistance and ingress protection validation."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "Ambient to +80°C" },
            { name: "Testing Standards", value: "IEC 60529, IS 9000, JIS, MIL" },
            { name: "Chamber Capacity", value: "170L to 2000L" },
            { name: "Control System", value: "PLC with 7” Touchscreen HMI" },
            { name: "Temperature Range", value: "Ambient to +80°C" },
            { name: "Temperature Accuracy", value: "±1°C" },
            { name: "Capacity", value: "170L to 2000L" },
            { name: "Airflow Timer", value: "0 to 9999 minutes adjustable" },
            { name: "Dust Agitation", value: "Controlled as per test standards" },
            { name: "Dust Collection", value: "25 gm ±5 gm within defined time" },
            { name: "Testing Type", value: "Dry powder, silicate cement, flue dust" },
            { name: "Controller", value: "DELTA / OMRON PLC with 7” touchscreen" },
            { name: "Motor", value: "Low-noise motor with dust seal" },
            { name: "Power Supply", value: "415V / 230V AC, 50Hz" }
        ]
    },
    {
        id: 12,
        name: "Walk-In Test Chamber",
        image: "/Assets/Walk In Chamber.png",
        images: ["/Assets/Walk In Chamber.png", "/Assets/Walk In Chamber.png", "/Assets/Walk In Chamber.png"],
        shortDescription: "Designed for large-scale environmental testing, our Walk-In Test Chambers simulate controlled temperature and humidity conditions to evaluate product performance, durability, and lifecycle reliability under real-world environments.",

        description: `<p>Our Walk-In Test Chambers are engineered for high-capacity environmental testing, enabling precise simulation of temperature and humidity conditions for large products or bulk testing. These chambers replicate real-world environmental stresses such as heat, cold, and humidity to evaluate product durability, performance, and lifespan.</p>

    <p>Ideal for R&D, quality control, and compliance testing, the system provides stable and uniform environmental conditions across the entire chamber. With advanced PLC-based automation and robust construction, it ensures consistent and repeatable test results even under long-duration testing cycles.</p>

    <br>

    <p><strong>Key Highlights</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Temperature Range: -30°C to +80°C</li>
        <li>Humidity Range: 20% to 95% RH</li>
        <li>Capacity: 6000L to 18000L (Custom Sizes Available)</li>
        <li>Control System: PLC + HMI Automation</li>
        <li>Uniformity: ±1°C / ±3% RH</li>
        <li>Industrial-grade construction</li>
    </ul>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Large capacity chambers for bulk and full-product testing</li>
        <li>Accurate temperature and humidity control</li>
        <li>Uniform airflow distribution across entire chamber</li>
        <li>PLC + HMI based automation system</li>
        <li>Programmable test cycles and profiles</li>
        <li>Energy-efficient insulated design</li>
        <li>Heavy-duty industrial construction</li>
        <li>Real-time monitoring and control</li>
    </ul>

    <p><strong>Smart Control & Monitoring</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>PLC-based automation with touch interface</li>
        <li>Remote monitoring via mobile & laptop</li>
        <li>Data logging and test history tracking</li>
        <li>Alarm system with event logging</li>
        <li>Multi-program test cycles with repeat options</li>
        <li>Real-time graphical data visualization</li>
        <li>User activity tracking and reporting</li>
        <li>Screenshot and report export features</li>
    </ul>

    <p><strong>Robust Industrial Construction</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Inner Chamber: SS304 stainless steel (corrosion resistant)</li>
        <li>Outer Body: Powder-coated mild steel</li>
        <li>Insulation: High-density glass wool (75mm thick)</li>
        <li>Air Circulation: Fan-forced uniform airflow system</li>
        <li>Cooling System: High-performance compressor (CFC-free)</li>
        <li>Heating System: High-quality nichrome heating elements</li>
        <li>Humidity System: Steam-based humidity generation</li>
        <li>Mobility: Heavy-duty castor wheels</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Electronics and telecommunications equipment testing</li>
        <li>Pharmaceutical product stability testing</li>
        <li>Automotive and industrial component testing</li>
        <li>Solar panel and outdoor equipment testing</li>
        <li>Product lifecycle and durability analysis</li>
        <li>Environmental simulation for R&D</li>
        <li>Accelerated aging and conditioning</li>
    </ul>

    <p><strong>Customized for Your Testing Environment</strong></p>
    <p>Every testing requirement is unique. Our Walk-In Chambers are fully customizable to match your product size, testing conditions, and operational requirements.</p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Custom chamber sizes and layouts</li>
        <li>Adjustable racks, trays, and configurations</li>
        <li>Custom temperature and humidity ranges</li>
        <li>Advanced automation and control integration</li>
        <li>Industry-specific testing setups</li>
    </ul>

    <p><strong>Why Choose Walk-In Test Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Designed for large-scale product and batch testing</li>
        <li>Precise control of temperature and humidity conditions</li>
        <li>Uniform airflow ensures consistent testing results</li>
        <li>Advanced PLC automation with programmable cycles</li>
        <li>Robust construction for long-term industrial use</li>
        <li>Energy-efficient insulated chamber design</li>
        <li>Supports accelerated aging and lifecycle testing</li>
        <li>Fully customizable in size and configuration</li>
    </ul>`,

        faqs: [
            {
                q: "What makes a walk-in chamber different from standard chambers?",
                a: "Walk-in chambers are designed for large-scale testing, allowing full products or bulk samples to be tested simultaneously under controlled environmental conditions, unlike standard chambers with limited capacity."
            },
            {
                q: "What industries typically use walk-in test chambers?",
                a: "Walk-in test chambers are widely used in automotive, electronics, pharmaceuticals, solar, and manufacturing industries where large-scale or batch testing is required."
            },
            {
                q: "How uniform are the temperature and humidity conditions inside the chamber?",
                a: "The chamber maintains high uniformity using fan-forced airflow systems, ensuring consistent temperature and humidity conditions across all test samples."
            },
            {
                q: "Can the chamber be customized for specific applications?",
                a: "Yes, the system is fully customizable in terms of size, capacity, rack configuration, temperature range, and automation features to meet specific testing requirements."
            },
            {
                q: "Does the chamber support long-duration testing cycles?",
                a: "Yes, it is designed for continuous operation and long-duration testing cycles, making it ideal for lifecycle, endurance, and stability testing."
            },
            {
                q: "How is humidity controlled inside the chamber?",
                a: "Humidity is controlled using a steam-based generation system with automatic water level management, ensuring precise and stable relative humidity (RH) levels."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "-30°C to +80°C" },
            { name: "Humidity Range", value: "20% RH to 95% RH" },
            { name: "Accuracy", value: "±0.5°C / ±3% RH" },
            { name: "Uniformity", value: "±1°C / ±3% RH" },
            { name: "Heating Rate", value: "2–3°C per minute" },
            { name: "Cooling Rate", value: "0.4–2°C per minute" },
            { name: "Capacity Range", value: "6000L to 18000L" },
            { name: "Control System", value: "PLC + HMI" },
            { name: "Construction", value: "SS304 Inner, Powder-Coated Outer Body" },
            { name: "Insulation", value: "75mm High-Density Glass Wool" },
            { name: "Cooling System", value: "High-performance compressor (CFC-free)" },
            { name: "Heating System", value: "Nichrome heating elements" },
            { name: "Humidity System", value: "Steam-based humidity generation" },
            { name: "Power Supply", value: "3 Phase, 440V, 50Hz" },
            { name: "Power Rating", value: "7KW to 15KW" }
        ]
    },
     {
        id: 13,
        name: "Stability Chamber",
        image: "/Assets/Stability Chamber.png",
        images: ["/Assets/Stability Chamber.png", "/Assets/Stability Chamber.png", "/Assets/Stability Chamber.png"],
        shortDescription: "Designed for precise, long-term environmental testing of pharmaceutical drugs, healthcare products, and packaging. Our Stability Chambers offer exceptional control over temperature and humidity to meet ICH guidelines and regulatory standards.",

        description: `<p>Our Stability Chambers are engineered for high-precision, long-duration testing of pharmaceutical, cosmetic, and food products. Fully compliant with ICH guidelines (Q1A), these chambers provide stable, uniform, and repeatable temperature and relative humidity conditions to determine shelf life, product efficacy, and packaging durability.</p>

    <p>Equipped with state-of-the-art PLC automation and 21 CFR Part 11 compliant data acquisition systems, our stability chambers ensure complete validation, security, and traceability for regulatory inspections. With robust insulation and high-efficiency circulation, they offer the industry-leading stability required for critical research and quality control laboratories.</p>

    <br>

    <p><strong>Key Highlights</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Temperature Range: 10°C to 70°C (Accuracy: ±0.2°C)</li>
        <li>Humidity Range: 40% to 90% RH (Accuracy: ±2% RH)</li>
        <li>Control System: PLC with touchscreen interface (21 CFR Part 11 compliant)</li>
        <li>ICH Compliance: Meets Q1A guidelines for stability testing</li>
        <li>Uniformity: ±1°C / ±3% RH</li>
        <li>Construction: Premium SS304 Inner and Outer body option</li>
    </ul>

    <p><strong>Key Features</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Precise temperature & humidity control for long-term study validation</li>
        <li>21 CFR Part 11 compliant control system for electronic records & signatures</li>
        <li>Forced air circulation ensuring excellent temperature/humidity uniformity</li>
        <li>Automated standby cooling & heating switchover for safety</li>
        <li>Intelligent PLC automation with touch HMI</li>
        <li>Real-time graphs and multi-level user access control</li>
        <li>Comprehensive data logging, audit trails, and PDF report exports</li>
        <li>High-quality PT-100 temperature sensors and Rotronic humidity sensors</li>
    </ul>

    <p><strong>Smart Control & Monitoring</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>PLC-based automation with intuitive touchscreen interface</li>
        <li>Ethernet connectivity for remote PC monitoring & control</li>
        <li>SMS/Email alert systems for out-of-spec notifications</li>
        <li>Audit trail tracking for user actions and machine parameters</li>
        <li>Automatic power failure recovery with data protection</li>
        <li>Password-protected Calibration mode for sensors</li>
        <li>Multi-level password security to prevent unauthorized changes</li>
    </ul>

    <p><strong>Robust Industrial Construction</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Inner Chamber: SS304 stainless steel with mirror finish</li>
        <li>Outer Body: Powder-coated GI or SS304 (optional)</li>
        <li>Insulation: 80mm thick high-density PUF insulation</li>
        <li>Glass Door: Double-paned tempered glass for viewing without opening</li>
        <li>Air Circulation: Statically balanced blower motors</li>
        <li>Cooling System: Hermetic compressor with environment-friendly refrigerant</li>
        <li>Heating System: U-shaped stainless steel heaters</li>
        <li>Humidity System: Steam-generator with auto water intake</li>
    </ul>

    <p><strong>Applications</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>ICH stability testing for pharmaceuticals and APIs</li>
        <li>Accelerated aging studies on cosmetics and drugs</li>
        <li>Shelf-life evaluation of food and beverages</li>
        <li>Conditioning and storage of electronic components</li>
        <li>Packaging material stress testing</li>
        <li>Culture growth and sample conditioning</li>
    </ul>

    <p><strong>Customized for Your Requirements</strong></p>
    <p>Our Stability Chambers are customizable to meet specific laboratory space and workflow requirements, ensuring complete compliance and optimal utility.</p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Custom volume capacities from 100L to 3000L</li>
        <li>Additional validation ports and entry holes</li>
        <li>Ultra-low humidity control configurations</li>
        <li>Multi-chamber or double-door designs</li>
        <li>Customizable rack arrangements and shelving options</li>
    </ul>

    <p><strong>Why Choose Stability Chamber</strong></p>
    <ul style="padding-left:20px; margin-top:8px; line-height:2;">
        <li>Fully compliant with global ICH guidelines and FDA requirements</li>
        <li>21 CFR Part 11 compliant data management</li>
        <li>Unmatched temperature and humidity stability</li>
        <li>Excellent uniformity for reliable multi-shelf testing</li>
        <li>Energy-efficient cooling and heating systems</li>
        <li>Robust construction ensures decades of continuous operation</li>
        <li>Full IQ/OQ/PQ validation documentation support</li>
    </ul>`,

        faqs: [
            {
                q: "Are your stability chambers compliant with ICH guidelines?",
                a: "Yes, our stability chambers are fully compliant with ICH Q1A guidelines for stability testing of new drug substances and products, maintaining precise temperature and humidity conditions over extended periods."
            },
            {
                q: "Does the chamber support 21 CFR Part 11 compliance?",
                a: "Yes, our control system offers full 21 CFR Part 11 compliance, including audit trails, electronic signatures, multi-level user permissions, and secure data logging that cannot be altered."
            },
            {
                q: "What sensors are used for temperature and humidity measurements?",
                a: "We use high-accuracy PT-100 platinum sensors for temperature and premium Rotronic capacitive humidity sensors from Switzerland to ensure the highest reliability and precision."
            },
            {
                q: "What happens during a power failure?",
                a: "The chamber features automatic power failure recovery. Once power is restored, the chamber resumes operation at the set parameters, and the data logging system records the power event and recovers the logged data without loss."
            },
            {
                q: "Is validation documentation provided?",
                a: "Yes, we provide complete Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) documentation and protocols to support your regulatory validation requirements."
            }
        ],
        specs: [
            { name: "Temperature Range", value: "10°C to 70°C (Customizable)" },
            { name: "Humidity Range", value: "40% to 90% RH" },
            { name: "Chamber Volume", value: "100L to 2000L" },
            { name: "ICH Guidelines", value: "ICH Q1A Compliant" },
            { name: "Compliance", value: "21 CFR Part 11 Compliant Software" },
            { name: "Sensor Type", value: "PT-100 & Rotronic Humidity Sensor" },
            { name: "Controller", value: "PLC with 7-inch Touchscreen HMI" },
            { name: "Temperature Accuracy", value: "±0.2°C" },
            { name: "Temperature Uniformity", value: "±1.0°C" },
            { name: "Humidity Fluctuation", value: "±2% RH" },
            { name: "Construction", value: "SS304 Inner, SS304/GI Outer with PUF Insulation" },
            { name: "Validation", value: "IQ / OQ / PQ Protocol Provided" },
            { name: "Power Supply", value: "230V AC, Single Phase, 50Hz" }
        ]
    }
];
