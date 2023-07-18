# Jiggawatt

Jiggawatt is a time machine that lets you explore the impact of your career choices over time.

## How it works

You start with `STATS` and `INVENTORY`.

Based on your stats and inventory, You will be dropped into one of three pre-determined `tracks` (Engineer, Manager, Entrepreneur) along with three roles each, for a total of nine possible roles. Your stats will primarily affect your track, and your inventory will affect which role you fall into.

Stats include:
- Skill (Desire to solve technical problems)
- Connection (Desire to connect existing solutions to problems)
- Vision (Desire to discover entirely new problems)

Inventory includes:
- Leverage (Understanding of value)
- Self-valuation (Ambition)
- Challenge (Education)
- Dedication (Work ethic)
- Principle flexibility (Sense of community)

The combination of your stats and inventory will create an `outcome`. Your outcome is a set of results including:
- Income
- Stress
- Free time
- Satisfaction
- Impact

An outcome is fluid; it changes over time. As you adjust `time`, it will change your stats for the currently-selected year. You'll see different results at 2, 5, 10, and 30 years.

## How to use it

### Start screen

Visit Fluxy's home screen. You'll be greeted with a fancy welcome screen to make you feel like this is a video game experience.

### Character Select

Click start, and you'll be taken to the Character select screen. Choose your hero and give them a name.

### Stats screen

Now, you'll pick your hero's stats. You have 15 points to allocate to 3 stats.

Keep in mind that these are not the starting values of skill, connection, or vision, but they will affect the maximum you can attain.

On a scale of 1-10, choose the values for:
- Tech. Skill
- Connection
- Vision 

Click "Choose Inventory" to move on.

### Inventory screen

Now, it's time to equip your hero. You have unlimited points, but be careful! Overusing them can have adverse effects.

On a scale of 1-10, choose the values for:
- Leverage
- Ambition
- Education
- Work ethic
- Sense of community

Click "See my track" to proceed.

### My Track

This screen shows you your role and its associated track. For example:
- Role: Badass CTO
- Track: Management Track
- Description: This is the boss person 

Click "Time Travel" to continue.

### Time travel screen

Here, you can adjust the time settings:
- 2 years
- 5 years
- 10 years
- 30 years

The screen will display the outcomes and adjust the description accordingly.
- Role: Badass CTO
- Track: Management Track
- Description: This is the boss person 

You can either type in or turn the knob to adjust the date to the four preset dates in the future.

From there, you can switch to another character select and start again.

### SECRET SHAME ###

_For presentation purposes, the app needs to be built to flow naturally._

Also, this app probably won't be able to solve this stuff mathematically, at least in its first implementation. So we'll have to group them into scenarios and route each one using a pre-rigged dataset to map to a desired result.

#### Routes 

- `/welcome`
- `/scenarios/1/character-select`
- `/scenarios/1/stats`
- `/scenarios/1/inventory`
- `/scenarios/1/view-track`
- `~~~ Time Travel Gif ~~~`
- `/scenarios/1/results`
- `/scenarios/1/results?years=2`

Scenario 1's results page needs a link to scenario 2, and so on.

Scenario 1 will load a specific dataset as its model, including stats, inventory, and results, in one dataset. CHEAT TO WIN.

Here's a sample dataset of one scenario. There are a total of 9 scenarios.

```javascript
{
  scenarios: [{
    id: 1,
    name: "Visionary CEO",
    stats: {
      skill: 2,
      connection: 3,
      vision: 10
    },
    inventory: {
      leverage: 9,
      ambition: 9,
      education: 8,
      workEthic: 9,
      community: 9
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    },
    {
      years: 5,
      title: "Founder",
      income: 4,
      stress: 8,
      freeTime: 1,
      satisfaction: 7,
      impact: 5
    },
    {
      years: 10,
      title: "Founder of third company",
      income: 7,
      stress: 9,
      freeTime: 2,
      satisfaction: 8,
      impact: 7
    },
    {
      years: 30,
      title: "Chairperson",
      income: 10,
      stress: 9,
      freeTime: 3,
      satisfaction: 9,
      impact: 10
    }]
  }]
}
```

