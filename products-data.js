const PRODUCTS = [
    {
        id: 1,
        name: "Environmental Test Chamber",
        image: "/Assets/product.png",
        images: ["/Assets/product.png", "/Assets/product1.png", "/Assets/product-img-1.png"],
        shortDescription: "Simulate a wide range of environmental conditions including temperature and humidity. Available in benchtop and floor models for comprehensive product testing.",
        description: `<p>Our Environmental Test Chambers are engineered to simulate extreme environmental conditions for product reliability testing. Designed with precision temperature and humidity control, these chambers are trusted by industries worldwide for compliance testing and R&D.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Precise temperature and humidity control</li>
            <li>PLC-based controller with 7-inch touch screen</li>
            <li>Data logging and PC connectivity</li>
            <li>Available in benchtop and floor models</li>
            <li>Compliant with IEC 60068, ASTM, and MIL-STD standards</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "-70°C to +180°C" },
            { name: "Humidity Range", value: "10% to 98% RH" },
            { name: "Interior Volume", value: "50L to 1000L" },
            { name: "Controller", value: "PLC with 7\" touch screen" },
            { name: "Standards", value: "IEC 60068, ASTM, MIL-STD" },
            { name: "Power Supply", value: "220V / 50Hz, Single Phase" }
        ]
    },
    {
        id: 2,
        name: "Salt Spray Test Chamber",
        image: "/Assets/product1.png",
        images: ["/Assets/product1.png", "/Assets/product.png", "/Assets/product-img-1.png"],
        shortDescription: "Evaluate the corrosion resistance of materials and surface coatings with highly controlled salt fog environments per ASTM B117 and ISO 9227.",
        description: `<p>The Salt Spray Test Chamber creates a controlled, corrosive environment to evaluate the corrosion resistance of materials, coatings, and finishes. Widely used in automotive, aerospace, and coating industries for accelerated corrosion testing.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Uniform salt fog distribution</li>
            <li>Transparent lid for easy observation</li>
            <li>Automatic brine replenishment</li>
            <li>Digital temperature controller</li>
            <li>Compliant with ASTM B117, ISO 9227, JIS Z 2371</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "+35°C to +50°C" },
            { name: "NaCl Concentration", value: "5% (±1%)" },
            { name: "Interior Volume", value: "30L to 1000L" },
            { name: "pH Range", value: "6.5 to 7.2" },
            { name: "Standards", value: "ASTM B117, ISO 9227, JIS Z 2371" },
            { name: "Power Supply", value: "220V / 50Hz" }
        ]
    },
    {
        id: 3,
        name: "UV Weathering Test Chamber",
        image: "/Assets/product-img-1.png",
        images: ["/Assets/product-img-1.png", "/Assets/product.png", "/Assets/product1.png"],
        shortDescription: "Simulate years of outdoor weathering in days with UV radiation, moisture, and temperature cycling to evaluate material durability and resistance.",
        description: `<p>The UV Weathering Test Chamber accelerates outdoor weathering effects to predict long-term material and coating performance. Using UV fluorescent lamps, it simulates sunlight, rain, and dew to evaluate degradation, fading, chalking, and cracking.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>UV-A 340nm or UV-B 313nm lamp options</li>
            <li>Condensation and spray moisture cycle</li>
            <li>Programmable irradiance control</li>
            <li>Stainless steel interior</li>
            <li>Compliant with ASTM G154, ISO 4892-3</li>
        </ul>`,
        specs: [
            { name: "Lamp Type", value: "UV-A 340nm / UV-B 313nm" },
            { name: "Temperature Range", value: "+40°C to +70°C" },
            { name: "Interior Volume", value: "200L to 600L" },
            { name: "Irradiance", value: "0.68 W/m² at 340nm" },
            { name: "Standards", value: "ASTM G154, ISO 4892-3" },
            { name: "Power Supply", value: "220V / 50Hz" }
        ]
    },
    {
        id: 4,
        name: "Thermal Shock Test Chamber",
        image: "/Assets/product.png",
        images: ["/Assets/product.png", "/Assets/product1.png", "/Assets/product-img-1.png"],
        shortDescription: "Expose products to rapid temperature transitions between extreme hot and cold zones to test structural integrity and material fatigue.",
        description: `<p>Thermal Shock Test Chambers subject specimens to sudden and extreme temperature changes to evaluate how materials respond to thermal stress. Used extensively in electronics, automotive, and aerospace industries for reliability testing.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Two-zone and three-zone configurations</li>
            <li>Transfer time under 10 seconds</li>
            <li>Independent hot and cold chamber control</li>
            <li>Programmable cycle controller</li>
            <li>Compliant with IEC 60068-2-14, MIL-STD-202</li>
        </ul>`,
        specs: [
            { name: "High Temp Zone", value: "+60°C to +220°C" },
            { name: "Low Temp Zone", value: "-65°C to +0°C" },
            { name: "Transfer Time", value: "< 10 seconds" },
            { name: "Interior Volume", value: "18L to 408L" },
            { name: "Standards", value: "IEC 60068-2-14, MIL-STD-202" },
            { name: "Configuration", value: "Two-zone / Three-zone" }
        ]
    },
    {
        id: 5,
        name: "Humidity Test Chamber",
        image: "/Assets/product1.png",
        images: ["/Assets/product1.png", "/Assets/product-img-1.png", "/Assets/product.png"],
        shortDescription: "Maintain precise humidity and temperature conditions for testing product performance and durability under tropical and condensing moisture environments.",
        description: `<p>Our Humidity Test Chambers provide precise control of both temperature and relative humidity to simulate tropical, subtropical, and condensing moisture environments. Essential for testing electronics, plastics, metals, and packaged goods.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Precise humidity and temperature control</li>
            <li>Stainless steel interior with rounded corners</li>
            <li>Digital PID controller with data logging</li>
            <li>Safety over-temperature protection</li>
            <li>Compliant with IEC 60068-2-78, ASTM D2247</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "+10°C to +95°C" },
            { name: "Humidity Range", value: "20% to 98% RH" },
            { name: "Interior Volume", value: "80L to 1000L" },
            { name: "Uniformity", value: "±2°C / ±3% RH" },
            { name: "Standards", value: "IEC 60068-2-78, ASTM D2247" },
            { name: "Power Supply", value: "220V / 50Hz" }
        ]
    },
    {
        id: 6,
        name: "Hot Air Oven",
        image: "/Assets/product-img-1.png",
        images: ["/Assets/product-img-1.png", "/Assets/product.png", "/Assets/product1.png"],
        shortDescription: "Uniform forced-air circulation oven for drying, aging, curing, and heat treatment of materials and components up to 300°C.",
        description: `<p>Provert's Hot Air Ovens use forced-air convection to deliver uniform heat distribution for drying, sterilization, curing, annealing, and aging applications. Built with stainless steel interiors for durability and easy cleaning.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Forced-air convection for uniform heating</li>
            <li>Double-wall stainless steel construction</li>
            <li>Digital PID temperature controller</li>
            <li>Multiple shelf positions</li>
            <li>Safety over-temperature cut-off</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "Ambient +10°C to +300°C" },
            { name: "Uniformity", value: "±2°C" },
            { name: "Interior Volume", value: "28L to 1000L" },
            { name: "Controller", value: "Digital PID" },
            { name: "Interior Material", value: "Stainless Steel (SS304)" },
            { name: "Power Supply", value: "220V / 50Hz" }
        ]
    },
    {
        id: 7,
        name: "Deep Cold Chamber",
        image: "/Assets/product.png",
        images: ["/Assets/product.png", "/Assets/product-img-1.png", "/Assets/product1.png"],
        shortDescription: "Achieve ultra-low temperatures down to -86°C for cold storage, material testing, and biological sample preservation applications.",
        description: `<p>Deep Cold Chambers from Provert Systems provide reliable and stable ultra-low temperature environments for cold storage, material testing under extreme cold, and preservation of biological samples. Equipped with environmentally friendly refrigerants.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Ultra-low temperatures to -86°C</li>
            <li>Cascade refrigeration system</li>
            <li>Microprocessor-based controller</li>
            <li>Alarm system for temperature deviation</li>
            <li>Eco-friendly refrigerant (R404A / R23)</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "-40°C to -86°C" },
            { name: "Uniformity", value: "±1°C" },
            { name: "Interior Volume", value: "100L to 800L" },
            { name: "Refrigeration", value: "Cascade system (R404A + R23)" },
            { name: "Controller", value: "Microprocessor with LCD display" },
            { name: "Power Supply", value: "220V / 50Hz" }
        ]
    },
    {
        id: 8,
        name: "High Temperature Convection Oven",
        image: "/Assets/product1.png",
        images: ["/Assets/product1.png", "/Assets/product.png", "/Assets/product-img-1.png"],
        shortDescription: "Industrial-grade high-temperature ovens for heat treatment, sintering, annealing, and material stress testing up to 500°C.",
        description: `<p>Provert's High Temperature Convection Ovens are designed for industrial heat treatment processes including sintering, annealing, hardening, and stress relief. Built with heavy-duty insulation and advanced temperature controllers for consistent, repeatable results.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>High temperature up to 500°C</li>
            <li>Heavy-duty ceramic fiber insulation</li>
            <li>Programmable ramp/soak profiles</li>
            <li>Multiple thermocouple zones</li>
            <li>Stainless steel interior with nickel-chrome heating elements</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "Ambient to +500°C" },
            { name: "Uniformity", value: "±5°C at 300°C" },
            { name: "Interior Volume", value: "50L to 500L" },
            { name: "Heating Elements", value: "Nickel-Chrome alloy" },
            { name: "Controller", value: "Programmable PID with ramp/soak" },
            { name: "Power Supply", value: "415V / 50Hz, Three Phase" }
        ]
    },
    {
        id: 9,
        name: "Altitude Test Chamber",
        image: "/Assets/product-img-1.png",
        images: ["/Assets/product-img-1.png", "/Assets/product1.png", "/Assets/product.png"],
        shortDescription: "Simulate high-altitude low-pressure conditions to test product performance and sealing integrity for aerospace, defence, and avionics applications.",
        description: `<p>The Altitude Test Chamber simulates the low-pressure environment experienced at high altitudes to evaluate product performance, sealing, and structural integrity. Used extensively in aerospace, defence, and avionics industries.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Simulate altitudes up to 30,000 m (98,000 ft)</li>
            <li>Combined temperature and altitude simulation</li>
            <li>High-vacuum pump system</li>
            <li>Safety interlock system</li>
            <li>Compliant with MIL-STD-810, DO-160, IEC 60068-2-13</li>
        </ul>`,
        specs: [
            { name: "Altitude Simulation", value: "Up to 30,000 m" },
            { name: "Pressure Range", value: "1013 hPa to 1.2 hPa" },
            { name: "Temperature Range", value: "-55°C to +85°C" },
            { name: "Interior Volume", value: "100L to 500L" },
            { name: "Standards", value: "MIL-STD-810, DO-160, IEC 60068-2-13" },
            { name: "Power Supply", value: "415V / 50Hz, Three Phase" }
        ]
    },
    {
        id: 10,
        name: "Rain & Spray Test Chamber",
        image: "/Assets/product.png",
        images: ["/Assets/product.png", "/Assets/product-img-1.png", "/Assets/product1.png"],
        shortDescription: "Test water ingress protection ratings (IP ratings) of enclosures and equipment with controlled rain simulation and water spray tests.",
        description: `<p>The Rain & Spray Test Chamber evaluates the water resistance of products and enclosures by simulating rain, drip, and spray conditions. Used to verify IP ratings (Ingress Protection) as per IEC 60529 and IPX standards.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Multiple nozzle configurations for drip, spray, and rain</li>
            <li>Adjustable water flow rate and pressure</li>
            <li>Stainless steel cabinet construction</li>
            <li>Programmable test cycles</li>
            <li>Compliant with IEC 60529 (IP Ratings), MIL-STD-810</li>
        </ul>`,
        specs: [
            { name: "Test Types", value: "Drip (IPX1/2), Spray (IPX3/4), Rain (IPX5/6)" },
            { name: "Water Flow Rate", value: "Adjustable 1–3 L/min" },
            { name: "Nozzle Pressure", value: "80 kPa ± 10 kPa" },
            { name: "Interior Dimensions", value: "Custom sizes available" },
            { name: "Standards", value: "IEC 60529, MIL-STD-810" },
            { name: "Construction", value: "SS304 Stainless Steel" }
        ]
    },
    {
        id: 11,
        name: "Dust Test Chamber",
        image: "/Assets/product1.png",
        images: ["/Assets/product1.png", "/Assets/product.png", "/Assets/product-img-1.png"],
        shortDescription: "Evaluate the resistance of products against fine dust and sand ingress as per IEC 60529 IP5X/IP6X and MIL-STD-810 standards.",
        description: `<p>Provert's Dust Test Chambers are designed to evaluate the resistance of enclosures and equipment against the ingress of dust and fine particulates. The chamber circulates dust in a controlled manner to simulate real-world dusty environments.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Circulating dust environment (talcum powder / silica sand)</li>
            <li>Adjustable air velocity and dust concentration</li>
            <li>Transparent observation window</li>
            <li>Automatic dust recirculation system</li>
            <li>Compliant with IEC 60529 (IP5X/IP6X), MIL-STD-810</li>
        </ul>`,
        specs: [
            { name: "Test Type", value: "Dust-protected (IP5X) / Dust-tight (IP6X)" },
            { name: "Dust Medium", value: "Talcum powder / Silica sand" },
            { name: "Air Velocity", value: "2 m/s (adjustable)" },
            { name: "Interior Volume", value: "250L to 1000L" },
            { name: "Standards", value: "IEC 60529, MIL-STD-810" },
            { name: "Construction", value: "Mild Steel with powder coating" }
        ]
    },
    {
        id: 12,
        name: "Walk-in Test Chamber",
        image: "/Assets/product-img-1.png",
        images: ["/Assets/product-img-1.png", "/Assets/product.png", "/Assets/product1.png"],
        shortDescription: "Large walk-in environmental chambers for testing oversized products, vehicles, and assemblies under controlled temperature and humidity conditions.",
        description: `<p>Walk-in Test Chambers from Provert Systems offer large-scale environmental testing space for bulky and oversized products, vehicle components, and large assemblies. Custom-built to your specifications with precise climate control throughout the chamber volume.</p>
        <br>
        <p><strong>Key Features:</strong></p>
        <ul style="padding-left:20px; margin-top:8px; line-height:2;">
            <li>Custom sizes from 5 m³ to 100+ m³</li>
            <li>Precise temperature and humidity control throughout</li>
            <li>Insulated modular panel construction</li>
            <li>Heavy-duty access doors with safety features</li>
            <li>Remote monitoring and control via SCADA</li>
        </ul>`,
        specs: [
            { name: "Temperature Range", value: "-40°C to +100°C" },
            { name: "Humidity Range", value: "20% to 98% RH" },
            { name: "Chamber Volume", value: "5 m³ to 100+ m³ (custom)" },
            { name: "Uniformity", value: "±2°C / ±3% RH" },
            { name: "Control System", value: "SCADA with remote monitoring" },
            { name: "Standards", value: "Custom per client requirement" }
        ]
    }
];
