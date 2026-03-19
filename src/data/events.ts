export interface EventImage {
  url: string;
  caption: string;
  credit: string;
}

export interface EventVideo {
  youtubeId: string;
  title: string;
}

export interface EventAudio {
  url: string;
  title: string;
  description: string;
}

export interface EventSource {
  title: string;
  url: string;
  organization: string;
}

export interface EventLocation {
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  shortDescription: string;
  longDescription: string;
  category: string;
  tags: string[];
  images: EventImage[];
  videos: EventVideo[];
  audio: EventAudio[];
  sources: EventSource[];
  location: EventLocation;
  color: string;
}

export const events: HistoricalEvent[] = [
  {
    id: "hiroshima-bombing",
    title: "Atomic Bombing of Hiroshima",
    date: "1945-08-06",
    year: 1945,
    shortDescription:
      "On August 6, 1945, the United States dropped an atomic bomb on the Japanese city of Hiroshima. The explosion instantly killed an estimated 70,000–80,000 people and destroyed five square miles of the city.",
    longDescription: `In the final months of World War II, the United States Army Air Forces dropped a uranium-based atomic bomb, codenamed "Little Boy," on the Japanese city of Hiroshima at 8:15 a.m. local time on August 6, 1945. The bomb detonated approximately 600 meters above the city center, creating a massive blast wave, intense heat, and lethal radiation.\n\nThe Manhattan Project, a secret research and development program led by the United States with contributions from the United Kingdom and Canada, had produced the bomb over the preceding three years. Scientists including J. Robert Oppenheimer led the technical effort at Los Alamos Laboratory in New Mexico.\n\nThe immediate destruction was catastrophic. An estimated 70,000 to 80,000 people were killed instantly, with another 70,000 injured. Approximately 90% of the city's buildings were destroyed or damaged. The intense heat from the blast caused widespread fires across the city.\n\nIn the weeks and months that followed, thousands more died from radiation sickness, burns, and other injuries related to the blast. Estimates of total deaths by the end of 1945 range from 90,000 to 166,000 people.\n\nThree days later, on August 9, 1945, the United States dropped a second atomic bomb — a plutonium device called "Fat Man" — on the city of Nagasaki, killing an estimated 40,000 people immediately.\n\nOn August 15, 1945, Emperor Hirohito announced Japan's unconditional surrender in a radio broadcast to the Japanese people. The formal surrender was signed on September 2, 1945, aboard the USS Missouri in Tokyo Bay, marking the end of World War II.\n\nThe long-term health effects on survivors, known as hibakusha, included elevated rates of cancer, particularly leukemia, as well as other radiation-related illnesses. The bombings of Hiroshima and Nagasaki remain the only wartime use of nuclear weapons in history.`,
    category: "War",
    tags: ["World War II", "Nuclear Weapon", "Japan", "United States"],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Atomic_bombing_of_Japan.jpg/1280px-Atomic_bombing_of_Japan.jpg",
        caption: "Atomic cloud over Hiroshima",
        credit: "U.S. Army / Public Domain",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hiroshima_aftermath.jpg/1280px-Hiroshima_aftermath.jpg",
        caption: "Hiroshima aftermath",
        credit: "U.S. Army / Public Domain",
      },
    ],
    videos: [
      {
        youtubeId: "eI3pCT3HcMM",
        title: "Hiroshima: The Real History (BBC Documentary Clip)",
      },
    ],
    audio: [],
    sources: [
      {
        title: "Hiroshima - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        organization: "Wikipedia",
      },
      {
        title: "The Atomic Bombings of Hiroshima and Nagasaki",
        url: "https://www.atomicheritage.org/history/atomic-bombing-hiroshima-and-nagasaki",
        organization: "Atomic Heritage Foundation",
      },
      {
        title: "Hiroshima and Nagasaki Bombings",
        url: "https://www.nationalww2museum.org/war/articles/hiroshima-and-nagasaki",
        organization: "National WWII Museum",
      },
    ],
    location: {
      city: "Hiroshima",
      country: "Japan",
      lat: 34.3853,
      lng: 132.4553,
    },
    color: "#FF6B35",
  },
  {
    id: "september-11",
    title: "September 11 Attacks",
    date: "2001-09-11",
    year: 2001,
    shortDescription:
      "On September 11, 2001, 19 terrorists hijacked four commercial airplanes. Two planes struck the World Trade Center in New York City, one hit the Pentagon near Washington D.C., and one crashed in a Pennsylvania field after passengers fought back.",
    longDescription: `On the morning of September 11, 2001, 19 members of the Islamist extremist group al-Qaeda hijacked four commercial passenger jets departing from airports in Boston, Washington, D.C., and Newark, New Jersey.\n\nAt 8:46 a.m., American Airlines Flight 11 was flown into the North Tower of the World Trade Center in New York City. Seventeen minutes later, at 9:03 a.m., United Airlines Flight 175 struck the South Tower. The impact and subsequent fires caused both towers to collapse — the South Tower at 9:59 a.m. and the North Tower at 10:28 a.m.\n\nAt 9:37 a.m., American Airlines Flight 77 crashed into the Pentagon in Arlington, Virginia, causing a partial collapse of the building's western side. A fourth hijacked plane, United Airlines Flight 93, was directed toward Washington D.C., but passengers who had learned of the other attacks through phone calls attempted to overpower the hijackers. The plane crashed into a field near Shanksville, Pennsylvania at 10:03 a.m.\n\nNearly 3,000 people were killed in the attacks, including all passengers and crew aboard the four aircraft, workers in the Twin Towers and the Pentagon, and first responders including 343 firefighters and 72 law enforcement officers. Thousands more were injured, and many have since developed illnesses related to toxic dust and debris exposure.\n\nThe 9/11 Commission, formally the National Commission on Terrorist Attacks Upon the United States, conducted an extensive investigation. Their 2004 report documented that al-Qaeda, led by Osama bin Laden, planned and executed the attacks. Bin Laden was located and killed by U.S. special operations forces in Abbottabad, Pakistan, on May 2, 2011.\n\nIn the aftermath, the United States and its allies launched the War in Afghanistan to dismantle al-Qaeda and remove the Taliban government that had sheltered them. The attacks led to sweeping changes in global security policy, intelligence sharing, airport security, and surveillance practices. The USA PATRIOT Act was signed into law in October 2001, and the Department of Homeland Security was established in 2002.`,
    category: "Terrorism",
    tags: ["Terrorism", "United States", "al-Qaeda", "New York City"],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/FEMA_-_4056_-_Photograph_by_Michael_Rieger_taken_on_09-11-2001_in_New_York.jpg/1280px-FEMA_-_4056_-_Photograph_by_Michael_Rieger_taken_on_09-11-2001_in_New_York.jpg",
        caption: "World Trade Center on fire",
        credit: "FEMA / Public Domain",
      },
    ],
    videos: [
      {
        youtubeId: "qvPXyElZsSk",
        title: "September 11 - As It Happened (The Day That Changed America)",
      },
    ],
    audio: [],
    sources: [
      {
        title: "The 9/11 Commission Report",
        url: "https://www.9-11commission.gov/report/",
        organization: "National Commission on Terrorist Attacks",
      },
      {
        title: "September 11 attacks - Wikipedia",
        url: "https://en.wikipedia.org/wiki/September_11_attacks",
        organization: "Wikipedia",
      },
    ],
    location: {
      city: "New York City",
      country: "United States",
      lat: 40.7115,
      lng: -74.0134,
    },
    color: "#4ECDC4",
  },
  {
    id: "berlin-wall-fall",
    title: "Fall of the Berlin Wall",
    date: "1989-11-09",
    year: 1989,
    shortDescription:
      "On November 9, 1989, the Berlin Wall — which had divided East and West Berlin since 1961 — was opened by East German authorities. Thousands of people flooded the checkpoints and began dismantling the wall, marking the symbolic end of the Cold War.",
    longDescription: `The Berlin Wall was constructed beginning on August 13, 1961, by the German Democratic Republic (East Germany), ostensibly to prevent the mass emigration of East Germans to the West that had been occurring since the end of World War II. By the time of its construction, an estimated 3.5 million East Germans had already left through Berlin.\n\nThe wall stretched approximately 155 kilometers (96 miles) around West Berlin, with a heavily fortified "death strip" — a no-man's land of guard towers, searchlights, and tripwires — running alongside it. Between 1961 and 1989, an estimated 140 people died attempting to cross the wall, though some estimates are higher.\n\nFor nearly three decades, the wall stood as the most potent physical symbol of the Iron Curtain dividing communist Eastern Europe from the democratic West. Families were separated, and East Berliners lived under strict government surveillance and control by the Stasi (secret police).\n\nBy 1989, political and economic pressures had been building across the Eastern Bloc. Mass protests swept East Germany throughout the fall of 1989, with hundreds of thousands taking to the streets in cities like Leipzig in what became known as the "Peaceful Revolution" or Montagsdemonstrationen (Monday demonstrations).\n\nOn the evening of November 9, 1989, East German spokesman Günter Schabowski mistakenly announced at a press conference that new travel regulations allowing East Germans to visit the West would take effect "immediately, without delay." As the announcement was broadcast live on television, crowds gathered at checkpoints across Berlin. Overwhelmed border guards, without orders to stop the crowds, eventually opened the gates.\n\nThousands of jubilant Berliners poured through the checkpoints, embraced their long-separated neighbors, and began physically dismantling sections of the wall. The scenes were broadcast around the world and celebrated as a defining moment of the late 20th century.\n\nGerman reunification followed on October 3, 1990, when East Germany was formally incorporated into the Federal Republic of Germany. The fall of the Berlin Wall is widely regarded as the symbolic end of the Cold War, which formally concluded with the dissolution of the Soviet Union in December 1991.`,
    category: "Political",
    tags: ["Cold War", "Germany", "Berlin", "Communism", "Reunification"],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BerlinWall-BrandenburgGate.jpg/1280px-BerlinWall-BrandenburgGate.jpg",
        caption: "People atop the Berlin Wall near Brandenburg Gate",
        credit: "Sue Ream / CC BY 3.0",
      },
    ],
    videos: [
      {
        youtubeId: "zmRPP2WXX0U",
        title: "The Fall of the Berlin Wall - 1989",
      },
    ],
    audio: [],
    sources: [
      {
        title: "The Berlin Wall",
        url: "https://www.dhm.de/en/lemo/chapters/deutsche-einheit/mauerfall-und-wiedervereinigung/",
        organization: "German Historical Museum",
      },
      {
        title: "Berlin Wall - BBC History",
        url: "https://www.bbc.co.uk/history/places/berlin_wall",
        organization: "BBC History",
      },
      {
        title: "Fall of the Berlin Wall - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall",
        organization: "Wikipedia",
      },
    ],
    location: {
      city: "Berlin",
      country: "Germany",
      lat: 52.5163,
      lng: 13.3777,
    },
    color: "#45B7D1",
  },
  {
    id: "moon-landing",
    title: "Apollo 11 Moon Landing",
    date: "1969-07-20",
    year: 1969,
    shortDescription:
      "On July 20, 1969, NASA astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon. Armstrong's words — 'one small step for man, one giant leap for mankind' — were heard by millions around the world.",
    longDescription: `The Apollo 11 mission was the culmination of a decade of intense effort by NASA and thousands of engineers, scientists, and support personnel. It emerged from the Space Race — a competition between the United States and the Soviet Union to achieve superiority in space exploration that began with the Soviet launch of Sputnik, the first artificial satellite, in October 1957.\n\nIn May 1961, President John F. Kennedy challenged the nation to land a human on the Moon before the end of the decade. NASA's Apollo program, building on earlier Mercury and Gemini missions, worked to develop the technology and procedures necessary for a lunar landing.\n\nApollo 11 launched from Kennedy Space Center on July 16, 1969, carrying Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin "Buzz" Aldrin. After a three-day journey, the spacecraft entered lunar orbit on July 19.\n\nOn July 20, 1969, Armstrong and Aldrin descended to the lunar surface in the Lunar Module, named Eagle, while Collins orbited above in the Command Module. At 4:17 p.m. EDT, Armstrong announced: "Houston, Tranquility Base here. The Eagle has landed." Mission Control responded: "Roger, Tranquility. We copy you on the ground. You've got a bunch of guys about to turn blue. We're breathing again."\n\nAt 10:56 p.m. EDT, Armstrong descended the ladder of the Lunar Module and stepped onto the lunar surface, saying: "That's one small step for [a] man, one giant leap for mankind." Aldrin joined him approximately 20 minutes later. The two astronauts spent about two and a half hours outside the spacecraft, collecting 47.5 pounds (21.5 kg) of lunar material, deploying scientific instruments, and planting an American flag.\n\nArmstrong and Aldrin rejoined Collins in lunar orbit, and the crew returned to Earth, splashing down in the Pacific Ocean on July 24, 1969. They were recovered by the USS Hornet and underwent three weeks of quarantine as a precaution against potential lunar pathogens.\n\nThe Apollo 11 mission was watched live on television by an estimated 600 million people worldwide — roughly one-fifth of the world's population at the time. It stands as one of the greatest technological achievements in human history.`,
    category: "Science & Technology",
    tags: ["Space", "NASA", "United States", "Cold War", "Science"],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/1016px-Aldrin_Apollo_11_original.jpg",
        caption: "Buzz Aldrin on the lunar surface",
        credit: "NASA / Public Domain",
      },
    ],
    videos: [
      {
        youtubeId: "cwZb2mqId0A",
        title: "Apollo 11: The Moon Landing (NASA)",
      },
    ],
    audio: [],
    sources: [
      {
        title: "Apollo 11 Mission Overview",
        url: "https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html",
        organization: "NASA",
      },
      {
        title: "Apollo 11 - Smithsonian National Air and Space Museum",
        url: "https://airandspace.si.edu/topics/apollo-11",
        organization: "Smithsonian National Air and Space Museum",
      },
      {
        title: "Apollo 11 - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Apollo_11",
        organization: "Wikipedia",
      },
    ],
    location: {
      city: "Sea of Tranquility",
      country: "Moon",
      lat: 0.6741,
      lng: 23.4733,
    },
    color: "#96CEB4",
  },
  {
    id: "chernobyl-disaster",
    title: "Chernobyl Nuclear Disaster",
    date: "1986-04-26",
    year: 1986,
    shortDescription:
      "On April 26, 1986, reactor number 4 of the Chernobyl Nuclear Power Plant in Soviet Ukraine exploded during a safety test. It became the worst nuclear accident in history, releasing radioactive material across Europe.",
    longDescription: `At 1:23 a.m. on April 26, 1986, reactor number 4 of the Chernobyl Nuclear Power Plant — located near the city of Pripyat in the Ukrainian Soviet Socialist Republic — underwent a catastrophic meltdown and explosion during a planned safety test.\n\nThe test was intended to simulate a power outage and determine how long the plant's turbines could generate electricity to power safety systems in the event of a shutdown. Due to a combination of reactor design flaws and operator actions that violated safety procedures, the reactor entered an unstable state. A sudden power surge caused a steam explosion, which destroyed the reactor core and caused a second, more powerful explosion that blew off the reactor's 1,000-ton steel and concrete lid.\n\nThe explosion and subsequent fires released an estimated 400 times more radiation than the atomic bomb dropped on Hiroshima. Radioactive particles were carried by wind across much of Europe, with particularly high contamination in parts of Ukraine, Belarus, and Russia.\n\nFirefighters and plant workers responded within minutes. Many of the first responders — unaware of the extreme radiation levels — received fatal doses of radiation. Thirty-one people died in the immediate aftermath, including plant workers and firefighters. Two plant workers died immediately from the explosion itself.\n\nOn April 27, 1986 — roughly 36 hours after the explosion — Soviet authorities ordered the evacuation of Pripyat, a city of approximately 49,000 people. Residents were told to bring only essential items and that they would be returning in three days. Most never returned. An exclusion zone of 30 kilometers (18.6 miles) was eventually established around the plant.\n\nIn the weeks following the accident, a massive cleanup and containment operation involved an estimated 600,000 workers, known as "liquidators." They worked to control the fires, clean up radioactive debris, and construct a concrete and steel "sarcophagus" around the destroyed reactor to contain further radiation releases.\n\nThe long-term health consequences include thousands of cases of thyroid cancer among people who were children at the time of the accident and were exposed to radioactive iodine. The World Health Organization has also documented elevated rates of leukemia and other cancers among cleanup workers.\n\nThe Chernobyl disaster is widely regarded as a significant factor in the decline of the Soviet Union, exposing the secretive Soviet system to intense international scrutiny and contributing to the reform policies of glasnost (openness) and perestroika (restructuring) under Mikhail Gorbachev.`,
    category: "Disaster",
    tags: ["Nuclear", "Soviet Union", "Ukraine", "Environmental Disaster"],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Chernobylreactor.jpg/1280px-Chernobylreactor.jpg",
        caption: "Aerial view of the Chernobyl nuclear plant after the explosion",
        credit: "U.S. Department of Energy / Public Domain",
      },
    ],
    videos: [
      {
        youtubeId: "VSkDeTFknS0",
        title: "Chernobyl Disaster: The True Story (Documentary)",
      },
    ],
    audio: [],
    sources: [
      {
        title: "Chernobyl Accident 1986",
        url: "https://world-nuclear.org/information-library/safety-and-security/safety-of-plants/chernobyl-accident.aspx",
        organization: "World Nuclear Association",
      },
      {
        title: "The Chernobyl Accident",
        url: "https://www.iaea.org/newscenter/focus/chernobyl",
        organization: "International Atomic Energy Agency (IAEA)",
      },
      {
        title: "Chernobyl disaster - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Chernobyl_disaster",
        organization: "Wikipedia",
      },
    ],
    location: {
      city: "Pripyat",
      country: "Ukraine",
      lat: 51.389,
      lng: 30.099,
    },
    color: "#FFEAA7",
  },
];

export function getEventById(id: string): HistoricalEvent | undefined {
  return events.find((event) => event.id === id);
}

export function getEventsSortedByYear(): HistoricalEvent[] {
  return [...events].sort((a, b) => a.year - b.year);
}
