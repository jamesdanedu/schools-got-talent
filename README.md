# SME's Got Talent 🎭

A JavaScript-based judges' feedback screen inspired by Britain's Got Talent. Features dramatic buzzer animations, sound effects, and support for external Microbit controllers.

## Features

- **Dynamic Judge Support**: Automatically adapts to any number of judges (2-9) based on CSV file
- **Dark/Light Mode**: Toggle with persistence via localStorage (no flash on reload)
- **Contestant Management**: Load contestants from CSV file
- **Judge Names**: Load from CSV with automatic UI generation
- **Keyboard Controls**: Number keys (1-9) for buzzers based on judge count, Space for next contestant
- **Microbit Support**: Connect via Web Serial API for physical buzzers
- **Sound Effects**: Buzzer sound and air horn when all buzzers hit
- **"Time's Up" Overlay**: Appears when all buzzers are activated

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
| `1` - `9` | Activate corresponding judge's buzzer (based on judge count) |
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

### Judges (Dynamic!)
Edit `public/judges.csv` to set the number of judges. The UI automatically adjusts:

**4 Judges:**
```csv
name
Simon
Amanda
Alesha
Bruno
```

**3 Judges:**
```csv
name
Judge A
Judge B
Judge C
```

**6 Judges:**
```csv
name
Judge 1
Judge 2
Judge 3
Judge 4
Judge 5
Judge 6
```

The application automatically:
- Generates the correct number of buzzer UI elements
- Updates keyboard controls to match judge count
- Adjusts the "Time's Up" trigger for all buzzers
- Updates the instructions footer

## Microbit Integration

The app supports connecting a Microbit via Web Serial API (Chrome/Edge only).

1. Click "Connect" button
2. Select your Microbit from the port list
3. Send messages in format: `BUZZER:1\n` through `BUZZER:N\n` (where N = judge count)

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
    ├── judges.csv      # Judge names (determines judge count!)
    └── smecrest.png    # School logo (optional)
```

## Theme Customization

The app uses Tailwind CSS with custom configuration. Key colors:
- Buzzer Red: `#dc2626`
- Nameplate Orange: `#f97316`
- Gold accents: `#fbbf24`

Dark mode uses CSS classes rather than Tailwind's `dark:` prefix for buzzer states, ensuring reliable theme switching.

## Technical Notes

### Dark Mode Implementation
The buzzer inactive/active states use CSS classes (`.inactive` and `.active`) with explicit `.dark` parent selectors to ensure proper color switching in both light and dark modes.

### Dynamic Judge System
The judge count is determined at runtime by parsing `judges.csv`. The application:
1. Loads the CSV file
2. Counts valid judge entries
3. Dynamically generates HTML elements for each judge
4. Initializes buzzer state array to match judge count
5. Updates keyboard event handlers and instructions

## License

MIT
