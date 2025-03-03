const filmData = {
    "films": [
        {
            "title": "🎞️ Ilford HP5+ (ISO 400)",
            "overview": "A versatile, high-speed black and white film that has become a staple among photographers of all skill levels.",
            "strengths": [
                "Excellent exposure latitude",
                "Great shadow detail",
                "Pushes well to ISO 1600-3200",
                "Classic grain structure"
            ],
            "weaknesses": [
                "Moderate grain at box speed",
                "Can lack contrast in flat lighting",
                "Not ideal for ultra-fine detail work"
            ],
            "bestPairing": [
                "Ilford ID-11 for balanced results",
                "Microphen for push processing"
            ]
        },
        {
            "title": "🎞️ Kodak Tri-X 400 (ISO 400)",
            "overview": "A legendary film with a rich history, known for its distinctive look and versatility.",
            "strengths": [
                "Strong contrast",
                "Deep, rich blacks",
                "Excellent highlight retention",
                "Forgiving exposure latitude"
            ],
            "weaknesses": [
                "Pronounced grain structure",
                "Can be too contrasty for some subjects",
                "Higher cost compared to some alternatives"
            ],
            "bestPairing": [
                "Kodak D-76 for classic results",
                "Rodinal for enhanced edge sharpness"
            ]
        },
        {
            "title": "🎞️ Ilford FP4+ (ISO 125)",
            "overview": "A medium-speed film with excellent fine-grain detail and beautiful tonal range.",
            "strengths": [
                "Extremely fine grain",
                "Great contrast and tonality",
                "Sharp detail with good latitude",
                "Ideal for landscapes and portraits"
            ],
            "weaknesses": [
                "Not ideal for low-light situations",
                "Limited flexibility in pushing"
            ],
            "bestPairing": [
                "Ilford Perceptol for fine grain",
                "ID-11 for balanced results"
            ]
        },
        {
            "title": "🎞️ Kodak T-Max 100 (ISO 100)",
            "overview": "A modern tabular-grain film offering exceptional sharpness and detail.",
            "strengths": [
                "Extremely fine grain",
                "Outstanding sharpness",
                "Excellent tonal gradation",
                "High resolution"
            ],
            "weaknesses": [
                "Less forgiving of exposure errors",
                "Requires more precise development",
                "Limited low-light capability"
            ],
            "bestPairing": [
                "Kodak T-Max Developer for optimized results",
                "Rodinal for maximum sharpness"
            ]
        },
        {
            "title": "🎞️ Fomapan 100 (ISO 100)",
            "overview": "An affordable classic film with traditional emulsion characteristics.",
            "strengths": [
                "Classic look",
                "Good value for money",
                "Pleasant grain structure",
                "Good contrast control"
            ],
            "weaknesses": [
                "Less consistent between batches",
                "Limited exposure latitude",
                "Can be prone to scratches"
            ],
            "bestPairing": [
                "Rodinal for classic look",
                "XTOL for more consistent results"
            ]
        },
        {
            "title": "🎞️ Ilford Delta 400 (ISO 400)",
            "overview": "A modern T-grain film offering reduced grain and improved sharpness compared to HP5+.",
            "strengths": [
                "Finer grain than traditional 400-speed films",
                "Good sharpness and tonal range",
                "High resolving power"
            ],
            "weaknesses": [
                "Less character compared to classic emulsions",
                "More expensive than HP5+"
            ],
            "bestPairing": [
                "Ilford DDX for optimal sharpness",
                "XTOL for fine grain"
            ]
        }
    ],
    "developers": [
        {
            "title": "🧪 Kodak D-76",
            "overview": "A classic fine-grain developer known for its balance between sharpness and smooth tonality.",
            "strengths": [
                "Excellent all-purpose developer",
                "Good tonal gradation",
                "Works well with most films"
            ],
            "weaknesses": [
                "Slightly reduces acutance",
                "Powder form requires mixing"
            ],
            "bestPairing": [
                "Kodak Tri-X 400",
                "Ilford HP5+",
                "Cinestill BWXX"
            ]
        },
        {
            "title": "🧪 Rodinal",
            "overview": "One of the oldest and most reliable developers, known for its distinctive rendering and edge sharpness.",
            "strengths": [
                "Extremely long shelf life",
                "High acutance",
                "Economical in use",
                "Consistent results"
            ],
            "weaknesses": [
                "Enhances grain",
                "Can be too sharp for some",
                "Less suitable for push processing"
            ],
            "bestPairing": [
                "Kodak Tri-X 400 for a classic look",
                "Ilford FP4+ for fine detail work",
                "Fomapan 100 for traditional contrast"
            ]
        },
        {
            "title": "🧪 Ilford ID-11",
            "overview": "A versatile, fine-grain developer similar to D-76, suitable for most films.",
            "strengths": [
                "Balanced contrast and tonality",
                "Great for general-purpose use",
                "Works well with a wide range of films"
            ],
            "weaknesses": [
                "Slightly reduces edge sharpness",
                "Requires mixing from powder"
            ],
            "bestPairing": [
                "Ilford FP4+",
                "Ilford HP5+",
                "Ilford Ortho Plus"
            ]
        },
        {
            "title": "🧪 Kodak XTOL",
            "overview": "A fine-grain developer with excellent shadow detail and high film speed retention.",
            "strengths": [
                "Excellent sharpness-to-grain ratio",
                "Good for push processing",
                "Better shadow retention"
            ],
            "weaknesses": [
                "Shorter shelf life compared to HC-110",
                "Requires precise mixing"
            ],
            "bestPairing": [
                "Kodak T-Max 100",
                "Ilford Delta 400",
                "Fomapan 100"
            ]
        },
        {
            "title": "🧪 Ilford Perceptol",
            "overview": "A fine-grain developer optimized for low-speed films, enhancing smoothness.",
            "strengths": [
                "Extremely fine grain",
                "Good for enlargements",
                "Smooth tonal gradation"
            ],
            "weaknesses": [
                "Reduces effective film speed",
                "Not ideal for pushing"
            ],
            "bestPairing": [
                "Ilford FP4+",
                "Ilford Delta 100"
            ]
        },
        {
            "title": "🧪 Ilford Microphen",
            "overview": "A speed-enhancing developer designed for push processing while maintaining shadow detail.",
            "strengths": [
                "Increases effective film speed",
                "Good for pushing HP5+ and Tri-X",
                "Retains highlight detail"
            ],
            "weaknesses": [
                "Not as sharp as Rodinal",
                "Can be grainy when over-pushed"
            ],
            "bestPairing": [
                "Ilford HP5+",
                "Kodak Tri-X 400"
            ]
        },
        {
            "title": "🧪 Ilford DDX",
            "overview": "A high-acutance, fine-grain developer well-suited for T-grain films and pushing.",
            "strengths": [
                "Excellent for push processing",
                "Enhances fine detail",
                "Great for T-grain films"
            ],
            "weaknesses": [
                "Expensive compared to others",
                "Limited shelf life"
            ],
            "bestPairing": [
                "Ilford Delta 400",
                "Kodak T-Max 400"
            ]
        }
    ]
}; 