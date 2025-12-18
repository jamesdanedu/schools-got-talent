# SME's Got Talent 🎭

A JavaScript-based judges' feedback screen inspired by Britain's Got Talent. Features dramatic buzzer animations, sound effects, multiple color themes, and support for external Microbit controllers.

## Features

- **Dynamic Judge Count**: Supports 2-9 judges, automatically configured from CSV
- **Large Buzzers**: X icons that turn red when activated with dramatic animations
- **7 Color Themes**: Including dark themes for projection and light themes for various environments
- **Contestant Management**: Load contestants from CSV file
- **Judge Names**: Load from CSV - number of judges determines UI layout
- **Keyboard Controls**: Number keys (1-9) for buzzers, Space for next contestant, T for theme
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
| `1`-`9` | Activate buzzer for Judge 1-9 (based on judge count) |
| `Space` | Next contestant (resets all buzzers) |
| `T` | Cycle through color themes |

You can also click on the X icons to activate buzzers, or click the sun icon to cycle themes.

## Color Themes

The app includes 7 color themes optimized for different environments:

### Dark Themes (for projection)
| Theme | Description |
|-------|-------------|
| **Stage Dark** | Default dark blue-gray theme, good for most projection setups |
| **Pure Black** | Maximum contrast with true black background, best for dark rooms |

### Light Themes
| Theme | Description |
|-------|-------------|
| **Classic Light** | Clean white background with dark slate text |
| **Warm Cream** | Soft cream/amber tones, warm and inviting |
| **Cool Slate** | Light blue-gray with cool blue accents |
| **Soft Lavender** | Light purple tones with purple nameplates |
| **Mint Fresh** | Light green tones with green nameplates |

Theme selection persists across sessions via localStorage.

## Customization

### Contestants
Edit `public/contestants.csv`:
```csv
name
Alice Thompson
Ben Richardson
Charlotte Davies
```

### Judges (2-9 supported)
Edit `public/judges.csv`:
```csv
name
Simon
Amanda
Alesha
Bruno
David
```

The number of judges in the CSV determines how many buzzers appear. The UI automatically adjusts.

## Microbit Integration

The app supports connecting a Microbit via Web Serial API (Chrome/Edge only).

1. Click "Connect" button
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
    ├── judges.csv      # Judge names
    └── smecrest.png    # School logo (optional)
```

## Adding Custom Themes

Themes are defined using CSS custom properties. To add a new theme, add a new `[data-theme="your-theme-name"]` block in the `<style>` section and add it to the `themes` array in JavaScript.

Key CSS variables:
- `--bg-primary`, `--bg-secondary`: Main background colors
- `--bg-gradient-*`: Background gradient colors
- `--text-primary`, `--text-secondary`, `--text-muted`: Text colors
- `--buzzer-inactive`: Inactive buzzer X color
- `--nameplate-bg`: Judge nameplate gradient
- `--control-bg`, `--control-hover`: Button colors

## License

MIT
