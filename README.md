# Info Evry Knowledge Base

Shared content and information for all Info Evry web properties.

## Structure

```
src/
├── ndi/
│   ├── event.json       # Official NDI event information
│   └── info-evry.json   # Info Evry specific NDI content
├── association/
│   └── info.json        # Association information
└── index.js             # Main export with helpers
```

## Usage

### As a Git Submodule

```bash
git submodule add git@github.com:info-evry/astro-knowledge.git knowledge
```

### Import in Your Project

```javascript
// Import everything
import knowledge from './knowledge/src/index.js';

// Or import specific data
import ndiEvent from './knowledge/src/ndi/event.json';
import ndiInfoEvry from './knowledge/src/ndi/info-evry.json';

// Use helpers
import { formatDate, formatDateTime } from './knowledge/src/index.js';
```

### In Astro Components

```astro
---
import ndiEvent from '../knowledge/src/ndi/event.json';
import ndiInfoEvry from '../knowledge/src/ndi/info-evry.json';
---

<h1>{ndiEvent.name} {ndiEvent.year}</h1>
<p>{ndiEvent.dates.startLabel}</p>
```

## Content

### NDI Event (`ndi/event.json`)
- Event name, year, edition
- Official dates and times
- Registration deadlines
- Statistics from previous years
- Official links

### NDI Info Evry (`ndi/info-evry.json`)
- Site location
- Registration prices
- Amenities (food, networking)
- Challenges (official + association)
- Participant information

### Association (`association/info.json`)
- Association details
- University information
- Contact information
- Membership benefits
