const recyclingFacts = [
  "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
  "Glass can be recycled endlessly without losing quality or purity.",
  "Recycling one ton of paper saves 17 trees and over 7,000 gallons of water.",
  "Plastic bottles can take up to 450 years to decompose in landfills.",
  "Recycling one ton of aluminum saves 14,000 kWh of energy.",
  "Recycling helps reduce greenhouse gas emissions by lowering demand for raw materials.",
  "The energy saved from recycling one glass bottle can power a light bulb for 4 hours.",
  "About 75% of aluminum ever produced is still in use today.",
  "Every ton of recycled plastic saves nearly 2,000 gallons of gasoline.",
  "Producing recycled paper uses 60% less energy than making paper from new materials.",
  "One recycled tin can saves enough energy to run a computer for 25 minutes.",
  "Every plastic bag you recycle saves valuable landfill space and reduces pollution.",
  "Americans throw away enough office paper each year to build a 12-foot-high wall from New York to California.",
  "The average person generates over 4 pounds of trash every single day.",
  "Recycling one glass bottle saves enough energy to charge a smartphone for an entire week.",
  "Recycling reduces the need for mining, logging, and drilling — preserving natural habitats.",
  "Composting food waste can reduce landfill methane emissions by up to 50%.",
  "Steel is the most recycled material in the world, with a recycling rate of over 85%.",
  "Recycling just one plastic bottle saves enough energy to power a 60-watt light bulb for 6 hours.",
  "E-waste recycling helps recover valuable metals like gold, silver, and copper.",
  "Paper can be recycled up to 7 times before the fibers become too weak.",
  "Recycling one ton of steel saves 2,500 pounds of iron ore and 1,400 pounds of coal.",
  "Organic waste makes up about 30% of what we throw away and could be composted instead.",
  "Recycling reduces ocean pollution by keeping plastics out of waterways.",
  "Every ton of recycled cardboard saves 46 gallons of oil.",
  "If every American recycled just one-tenth of their newspapers, 25 million trees could be saved each year.",
  "Recycling saves money, creates jobs, and conserves natural resources.",
];

export default recyclingFacts;

// export const wasteCat = [
//   {
//     name: "Paper",
//     color: "#3B82F6",
//     description: "Includes newspapers, cardboard, magazines, and office paper.",
//     tips: "Recycle clean paper only. Avoid paper with food residue, as it can contaminate the batch. Shredded paper should be placed in a bag to prevent it from flying out of the sorting machines.",
//     disposal: "Curbside recycling bin or local drop-off center.",
//   },
//   {
//     name: "Plastic",
//     color: "#10B981",
//     description: "Includes plastic bottles, containers, and bags.",
//     tips: "Check for the recycling symbol (1-7). Rinse containers before recycling. Do not recycle plastic bags in curbside bins; take them to designated store drop-off locations.",
//     disposal: "Curbside recycling bin or special collection points.",
//   },
//   {
//     name: "Glass",
//     color: "#EF4444",
//     description: "Includes glass bottles and jars.",
//     tips: "Rinse out glass containers. Labels can usually stay on. Lids and caps should be removed and recycled separately. Broken glass should be disposed of in regular trash for safety.",
//     disposal: "Curbside recycling bin or public recycling containers.",
//   },
//   {
//     name: "E-waste",
//     color: "#F59E0B",
//     description: "Includes electronics, batteries, and cords.",
//     tips: "Never put e-waste in regular trash. Electronics contain hazardous materials that must be handled properly. Many retailers offer take-back programs for old devices.",
//     disposal: "Specialized e-waste recycling centers or collection events.",
//   },
//   {
//     name: "Organic",
//     color: "#14B8A6",
//     description: "Includes food scraps and yard waste.",
//     tips: "Compostable materials can be turned into nutrient-rich soil. This reduces methane emissions from landfills. Do not compost meat, dairy, or oils.",
//     disposal: "Compost bin or municipal composting program.",
//   },
//   {
//     name: "Other",
//     color: "#6B7280",
//     description: "Non-recyclable waste.",
//     tips: "This category includes items that cannot be recycled, such as certain types of plastic, foam, and contaminated materials.",
//     disposal: "Regular garbage.",
//   },
// ];

export const wasteCat = [
  {
    id: "plastic",
    name: "Plastic",
    icon: "♻️",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tips: [
      "Clean containers before recycling to remove food residue",
      "Remove caps and lids as they may be made of different plastic types",
      "Look for recycling numbers 1-7 on the bottom of containers",
      "Avoid putting plastic bags in curbside recycling - take them to store drop-off locations",
    ],
    disposal:
      "Most plastic containers can be recycled curbside. Check your local recycling guidelines for specific accepted types. Plastic bags should be taken to grocery store collection points.",
    examples: [
      "Water bottles",
      "Food containers",
      "Shampoo bottles",
      "Yogurt cups",
    ],
  },
  {
    id: "organic",
    name: "Organic",
    icon: "🌱",
    color: "text-green-600",
    bgColor: "bg-green-50",
    tips: [
      "Compost fruit and vegetable scraps in your backyard or community garden",
      "Include coffee grounds, tea bags, and eggshells",
      "Avoid composting meat, dairy, and oily foods at home",
      "Turn compost regularly to speed decomposition",
    ],
    disposal:
      "Compost organic waste at home or use municipal organic waste collection programs. Some areas offer food waste pickup or drop-off locations.",
    examples: [
      "Food scraps",
      "Yard trimmings",
      "Coffee grounds",
      "Paper towels",
    ],
  },
  {
    id: "ewaste",
    name: "E-Waste",
    icon: "💻",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    tips: [
      "Never throw electronics in regular trash due to toxic materials",
      "Wipe all personal data before disposing of devices",
      "Check if manufacturers offer take-back programs",
      "Consider donating working electronics to extend their life",
    ],
    disposal:
      "Take to certified e-waste recycling centers, manufacturer take-back programs, or special collection events. Many retailers also accept old electronics.",
    examples: ["Computers", "Smartphones", "Batteries", "TV monitors"],
  },
  {
    id: "paper",
    name: "Paper",
    icon: "📄",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    tips: [
      "Remove tape, staples, and plastic windows from envelopes",
      "Flatten cardboard boxes to save space",
      "Keep paper dry - wet paper can contaminate other recyclables",
      "Shred sensitive documents but check if your recycler accepts shredded paper",
    ],
    disposal:
      "Most paper and cardboard can be recycled curbside. Keep materials clean and dry. Some glossy papers and wax-coated boxes may not be accepted.",
    examples: ["Newspapers", "Magazines", "Cardboard boxes", "Office paper"],
  },
  {
    id: "glass",
    name: "Glass",
    icon: "🍶",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    tips: [
      "Rinse containers but labels can stay on",
      "Separate by color if your program requires it",
      "Remove metal caps and lids",
      "Never include window glass, mirrors, or light bulbs with container glass",
    ],
    disposal:
      "Glass containers can typically be recycled curbside or at drop-off centers. Some areas have separate collection for different glass colors.",
    examples: ["Bottles", "Jars", "Food containers", "Beverage containers"],
  },
];

export const pledgeMatters = [
  {
    title: "Personal Accountability",
    text: "Making a public commitment increases your likelihood of following through on environmental goals.",
  },
  {
    title: "Community Impact",
    text: "Your pledge inspires others and creates a ripple effect of positive environmental action.",
  },
  {
    title: "Collective Change",
    text: "When we act together, small individual actions add up to significant environmental improvements.",
  },
];
