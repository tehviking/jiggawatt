# Jiggawatt

Jiggawatt is a time machine that lets you explore the impact of your career choices over time.


## How it works

You start with `STATS` and `INVENTORY`.

Based on your stats and inventory, You will drop you into one of three pre-determined `tracks` (Engineer, Manager, Entrepreneur) along three roles each, for a total of nine possible roles. Your stats will primarily affect your track, and your inventory will affect which role you fall into.

Stats include:
  - Skill (Desire to solve technical problems)
  - Synthesis (Desire to connect existing solutions to problems)
  - Vision (Desire to discover entirely new problems)

Inventory includes:
  - Leverage (understanding of value)
  - Self-valuation (ambition)
  - Challenge (education)
  - Dedication (work ethic)
  - Principle flexibility (sense of community)

The combination of your stats and inventory will create an `outcome`. Your outcome is a set of results 

Outcomes include:
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

Click start, and you're taken to the Character select screen. Choose your hero, and give them a name.

### Stats screen

Now, we'll pick our hero's stats. You have 15 points to allocate to 3 stats.

Keep in mind these are not the amount of skill, synthesis, or vision you start with, but will affect the maximum you can attain.

On a 1-10 scale, choose:

  - Tech. Skill
  - Synthesis
  - Vision 

Click Choose Inventory to move on.

### Inventory screen

Now we'll equip our hero. You have unlimited points, but beware! Overusing them can have adverse effects.

On a 1-10 scale, choose:
  - Leverage
  - Ambition
  - Education
  - Work ethic
  - Sense of community

Now click "See my track"

### My Track

This screen shows you your role and its associated track. For example:
[Picture] 
Click Time Travel

### Time travel screen

This has 4 settings: 
  - 2 years
  - 5 years
  - 10 years
  - 30 years

It lists the outcomes and adjusts the description to match.
[Role] Badass CTO
[Track] Management Track
[Description] This is the boss person 

Either type in or turn the knob to adjust the date to the 4 preset dates in the future.

From there you can switch to another character select and start again.

==============

### SECRET SHAME ###

_For presentation purposes, the app needs to be built to flow naturally._

Also, this app probably isn't going to be able to solve this stuff mathematically, at least in its first implementation. So we'll have to group them into scenarios and route each one using a pre-rigged dataset to map to a desired result.

##### Routes 

`/welcome`

`/scenarios/1/character-select`

`/scenarios/1/stats`

`/scenarios/1/inventory`

`/scenarios/1/view-track`

`~~~ Time Travel Gif ~~~`

`/scenarios/1/results`

`/scenarios/1/results?years=2`

Scenario 1's results page needs a link to scenario 2, and so on.

Scenario 1 will load in a specific dataset as its model, including stats, inventory, and results, in one dataset. CHEAT TO WIN.

Here's a sample dataset of one scenario. There are 9 total scenarios.

```javascript
{
  scenarios: [{
    id: 1,
    name: "Visionary CEO",
    stats: {
      skill: 2,
      synthesis: 3,
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
