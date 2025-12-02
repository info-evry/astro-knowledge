# @info-evry/astro-knowledge

Shared content and data for all Asso Info Evry web properties. Provides centralized information about the association, events, and computed values.

## Features

- Centralized association information (contacts, social links, membership)
- Nuit de l'Info event data (dates, deadlines, stats)
- Info Evry specific NDI content (location, pricing, amenities)
- Helper functions for date formatting
- Computed values (auto-generated at build time)

## Installation

Add as a git submodule:

```bash
git submodule add https://github.com/info-evry/astro-knowledge.git knowledge
```

## Structure

```
src/
├── association/
│   └── info.json         # Association details & contacts
├── ndi/
│   ├── event.json        # Official NDI event information
│   └── info-evry.json    # Info Evry NDI site specifics
├── computed.json         # Auto-generated computed values
└── index.js              # Main export with helpers
```

## Usage

### Direct JSON Imports

```javascript
// Association information
import associationInfo from './knowledge/src/association/info.json';

console.log(associationInfo.name);           // "Asso Info Evry"
console.log(associationInfo.contact.email);  // "contact@info-evry.fr"
console.log(associationInfo.sites.asso.url); // "https://asso.info-evry.fr"

// NDI event data
import ndiEvent from './knowledge/src/ndi/event.json';

console.log(ndiEvent.name);           // "Nuit de l'Info"
console.log(ndiEvent.year);           // 2025
console.log(ndiEvent.dates.start);    // "2025-12-04T15:34:00"
console.log(ndiEvent.stats.participants2024); // 6027

// Info Evry NDI specifics
import ndiInfoEvry from './knowledge/src/ndi/info-evry.json';

console.log(ndiInfoEvry.location.venue);  // Venue details
console.log(ndiInfoEvry.pricing);         // Registration prices
```

### In Astro Components

```astro
---
import ndiEvent from '../knowledge/src/ndi/event.json';
import associationInfo from '../knowledge/src/association/info.json';
---

<h1>{ndiEvent.name} {ndiEvent.year}</h1>
<p>{ndiEvent.edition}</p>
<p>Organisé par {associationInfo.fullName}</p>
<a href={associationInfo.sites.ndi.url}>Inscriptions</a>
```

### Helper Functions

```javascript
import { formatDate, formatDateTime } from './knowledge/src/index.js';

// Format dates in French locale
formatDate('2025-12-04');           // "4 décembre 2025"
formatDateTime('2025-12-04T16:34'); // "4 décembre 2025 à 16h34"
```

## Data Reference

### Association (`association/info.json`)

| Field | Description |
|-------|-------------|
| `name` | Short name ("Asso Info Evry") |
| `fullName` | Full name ("Association Info Evry") |
| `description` | Association description |
| `mission` | Mission statement |
| `university` | University details (name, city, department) |
| `sites` | URLs for asso, ndi, and join websites |
| `contact` | Email addresses |
| `social` | Social media links (Discord, Telegram, Instagram, GitHub) |
| `resources` | Resource links (drive, eCampus) |
| `membership` | Membership benefits list |

### NDI Event (`ndi/event.json`)

| Field | Description |
|-------|-------------|
| `name` | Event name ("Nuit de l'Info") |
| `year` | Event year |
| `edition` | Edition label |
| `tagline` | Short description |
| `description` | Full description |
| `dates` | Start/end times, duration |
| `deadlines` | Registration deadlines |
| `stats` | Previous year statistics |
| `structure` | Team size limits, max challenges |
| `links` | Official website links |

### NDI Info Evry (`ndi/info-evry.json`)

| Field | Description |
|-------|-------------|
| `location` | Venue, room, address |
| `pricing` | Registration prices |
| `amenities` | Food, drinks, networking info |
| `challenges` | Association-specific challenges |
| `participant` | Max participants, requirements |

### Computed Values (`computed.json`)

Auto-generated at build time:
- `ndi.registrationOpen` - Whether NDI registration is open
- `ndi.daysUntilEvent` - Days until NDI starts
- `ndi.daysUntilDeadline` - Days until registration closes

## Updating Content

1. Edit the relevant JSON file in `src/`
2. Commit and push to trigger updates in consuming projects
3. Run `git submodule update --remote knowledge` in each project

## Related Repositories

- [astro-design](https://github.com/info-evry/astro-design) - Shared design system
- [astro-asso](https://github.com/info-evry/astro-asso) - Main association website
- [astro-ndi](https://github.com/info-evry/astro-ndi) - NDI registration platform
- [astro-join](https://github.com/info-evry/astro-join) - Membership portal

## License

AGPL-3.0 - Asso Info Evry
