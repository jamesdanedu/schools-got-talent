# SME's Got Talent 🎭

A JavaScript-based judges' feedback screen inspired by Britain's Got Talent. Features dramatic buzzer animations, sound effects, and support for external Microbit controllers.

## Features

- **4 Judge Buzzers**: Large X icons that turn red when activated with dramatic animations
- **Dark/Light Mode**: Toggle with persistence via localStorage (no flash on reload)
- **Contestant Management**: Load contestants from CSV file
- **Judge Names**: Load from CSV with fallback defaults
- **Keyboard Controls**: Number keys (1-4) for buzzers, Space for next contestant
- **Microbit Support**: Connect via Web Serial API for physical buzzers
- **Sound Effects**: Buzzer sound and air horn when all buzzers hit
- **"Time's Up" Overlay**: Appears when all 4 buzzers are activated

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd smes-got-talent
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```
   Or with npm:
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Controls

| Key | Action |
|-----|--------|
| `1` | Activate Judge 1's buzzer |
| `2` | Activate Judge 2's buzzer |
| `3` | Activate Judge 3's buzzer |
| `4` | Activate Judge 4's buzzer |
| `Space` | Next contestant (resets all buzzers) |

You can also click on the X icons to activate buzzers.

## Customization

### Contestants
Edit `public/contestants.csv`:
```csv
name
Alice Thompson
Ben Richardson
Charlotte Davies
```

### Judges
Edit `public/judges.csv`:
```csv
name
Simon
Amanda
Alesha
Bruno
```

## Microbit Integration

The app supports connecting a Microbit via Web Serial API (Chrome/Edge only).

1. Click "Connect Microbit" button
2. Select your Microbit from the port list
3. Send messages in format: `BUZZER:1\n` through `BUZZER:4\n`

### Example Microbit Code (MakeCode)
```python
# Python example for Microbit
from microbit import *
import serial

uart.init(baudrate=115200)

while True:
    if button_a.was_pressed():
        uart.write("BUZZER:1\n")
    if button_b.was_pressed():
        uart.write("BUZZER:2\n")
```

## Browser Requirements

- **Chrome or Edge** recommended (required for Web Serial API)
- Web Audio API support
- Modern JavaScript (ES6+)

## File Structure

```
smes-got-talent/
├── index.html          # Main application (HTML, CSS, JS combined)
├── server.js           # Node.js HTTP server
├── package.json        # Project configuration
├── README.md           # This file
└── public/
    ├── contestants.csv # Contestant names
    └── judges.csv      # Judge names
```

## Theme Customization

The app uses Tailwind CSS with custom configuration. Key colors:
- Buzzer Red: `#dc2626`
- Nameplate Orange: `#f97316`
- Gold accents: `#fbbf24`

## License

MIT
