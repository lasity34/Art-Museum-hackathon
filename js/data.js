function data(){

  const louvre_items = [
    {
      id: 1,
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      description:
        "Completed in the 16th century, this oil on poplar panel painting is arguably the most famous artwork in the world. The portrait depicts Lisa Gherardini, wife of Florentine merchant Francesco del Giocondo, with an enigmatic expression which has intrigued viewers for centuries.",
      img: "images/mona_lisa.jpg",
      rating: 10,
      category: "Renaissance",
      location: "Exhibhition room A",
    },
    {
      id: 2,
      title: "Venus de Milo",
      artist: "Unknown",
      description:
        "This ancient Greek statue, believed to represent Aphrodite, the Greek goddess of love and beauty, dates from between 130 and 100 BC. It was discovered on the island of Milos. It's one of the most famous ancient Greek statues, notable for its missing arms.",
      img: "images/venus_de_milo.jpg",
      rating: 9,
      category: "Ancient Greece",
      location: "Exhibhition room B",
    },
    {
      id: 3,
      title: "The Coronation of Napoleon",
      artist: "Jacques-Louis David",
      description:
        "This painting was completed in 1807. It depicts the crowning of Napoleon Bonaparte as Emperor of the French in Notre Dame Cathedral. The moment depicted is the coronation of his wife Josephine, with the viewer's focus drawn to her, rather than Napoleon himself.",
      img: "images/coronation_of_napoleon.jpg",
      rating: 8,
      category: "French Empire",
      location: "Exhibhition room C",
    },
    {
      id: 4,
      title: "Liberty Leading the People",
      artist: "Eugène Delacroix",
      description:
        "Completed in 1830, this painting commemorates the July Revolution of the same year. It depicts Liberty as a female allegorical figure leading the people forward over the bodies of the fallen, holding the French tricolor flag in one hand and a bayoneted musket in the other.",
      img: "images/liberty_leading_the_people.jpg",
      rating: 9,
      category: "French Romanticism",
      location: "Atrium",
    },
    {
      id: 5,
      title: "The Raft of the Medusa",
      artist: "Théodore Géricault",
      description:
        "This painting from 1819 depicts the aftermath of a contemporary French shipwreck, in which the frigate Medusa ran aground off the coast of Senegal. The crew constructed a makeshift raft, on which many of the survivors met a grisly end.",
      img: "images/raft_of_medusa.jpg",
      rating: 8,
      category: "French Romanticism",
      location: "Exhibhition room C",
    },
    {
      id: 6,
      title: "Psyche Revived by Cupid's Kiss",
      artist: "Antonio Canova",
      description:
        "This beautiful neoclassical sculpture, completed in 1793, shows the mythological lovers Psyche and Cupid at a moment of high drama. The sculpture captures the moment Cupid, the god of love, revives his lover Psyche from a deathlike sleep with a kiss.",
      img: "images/psyche_revived.jpg",
      rating: 9,
      category: "Neoclassicism",
      location: "Exhibhition room A",
    },
    {
      id: 7,
      title: "The Death of Sardanapalus",
      artist: "Eugène Delacroix",
      description:
        "Created in 1827, this painting illustrates a tale from ancient history, where the Assyrian king Sardanapalus chooses to destroy all his possessions, including his harem, in a massive sacrificial pyre when his city is besieged.",
      img: "images/death_of_sardanapalus.jpg",
      rating: 8,
      category: "French Romanticism",
      location: "Exhibhition room A",
    },
    {
      id: 8,
      title: "The Winged Victory of Samothrace",
      artist: "Unknown",
      description:
        "Created around 2nd-century BC, this Hellenistic sculpture depicts Nike, the Greek goddess of victory. The statue was discovered in several pieces on the island of Samothrace and was reconstructed. The figure's clothing appears to be dramatically blown by the wind, conveying a sense of forward movement.",
      img: "images/winged_victory.jpg",
      rating: 10,
      category: "Hellenistic Greece",
      location: "Exhibhition room A",
    },
    {
      id: 9,
      title: "The Lacemaker",
      artist: "Johannes Vermeer",
      description:
        "Created around 1669-1670, this oil on canvas painting is one of the most precise and beautiful of Vermeer's works. It depicts a young woman dressed in a yellow shawl, holding up a pair of bobbins in her left hand as she carefully places a pin in the pillow on her lap, a moment of calm concentration.",
      img: "images/lacemaker.jpg",
      rating: 9,
      category: "Dutch Golden Age",
      location: "Exhibhition room C",
    },
    {
      id: 10,
      title: "The Moneylender and His Wife",
      artist: "Quentin Matsys",
      description:
        "This painting from 1514 shows a moneylender and his wife in their office. The woman is reading a book of devotion with an illustration of the Virgin and Child before her. It subtly critiques the moral and spiritual corruption of money lending.",
      img: "images/moneylender_and_his_wife.jpg",
      rating: 8,
      category: "Northern Renaissance",
      location: "Exhibhition room C",
    },
    {
      id: 11,
      title: "The Bather",
      artist: "Jean-Auguste-Dominique Ingres",
      description:
        "Painted in 1808, this work shows a nude woman bathing in a simple, classic pose. Ingres was known for his love of the female form and meticulous attention to detail, as is evident in the softness of the figure and the attention to the play of light on her skin.",
      img: "images/bather.jpg",
      rating: 9,
      category: "Neoclassicism",
      location: "Atrium",
    },
    {
      id: 12,
      title: "Law Code of Hammurabi",
      artist: "Unknown",
      description:
        "Originated from ancient Babylon around 1754 BC, this seven-foot tall basalt stele contains a set of laws issued by the Babylonian King Hammurabi. It's one of the oldest deciphered writings of significant length in the world.",
      img: "images/law_code_of_hammurabi.jpg",
      rating: 10,
      category: "Ancient Mesopotamia",
      location: "Exhibhition room B",
    },
    {
      id: 13,
      title: "Oath of the Horatii",
      artist: "Jacques-Louis David",
      description:
        "Painted in 1784, this neoclassical masterpiece depicts a scene from early Roman history. It shows the Horatii brothers swearing an oath on their swords, held by their father, that they will fight to the death for Rome.",
      img: "images/oath_of_horatii.jpg",
      rating: 9,
      category: "Neoclassicism",
      location: "Exhibhition room A",
    },
    {
      id: 14,
      title: "Seated Scribe",
      artist: "Unknown",
      description:
        "Originated from the 4th or 5th Dynasty of Egypt (around 2600-2350 BC), this painted limestone statue shows a scribe at work. It is one of the most important examples of ancient Egyptian sculpture, showing an incredible level of detail, including carefully crafted rolls of fat, which signify wealth and status.",
      img: "images/seated_scribe.jpg",
      rating: 8,
      category: "Ancient Egypt",
      location: "Atrium",
    },
    {
      id: 15,
      title: "Saint George and the Dragon",
      artist: "Raphael",
      description:
        "Created around 1506, this artwork shows the Saint George slaying a dragon to save a princess, according to the Golden Legend. The scene is set against a landscape with a town, illustrating the Saint's bravery and gallantry.",
      img: "images/saint_george.jpg",
      rating: 8,
      category: "High Renaissance",
      location: "Exhibhition room C",
    },
    {
      id: 16,
      title: "The Valpinçon Bather",
      artist: "Jean-Auguste-Dominique Ingres",
      description:
        "Painted in 1808, this painting depicts a woman viewed from behind in a bathtub. The figure is observed in a moment of quiet privacy. The work is characteristic of Ingres's style, with his meticulous attention to detail and the smoothness of his figures.",
      img: "images/valpincon_bather.jpg",
      rating: 8,
      category: "Neoclassicism",
      location: "Exhibhition room B",
    },
    {
      id: 17,
      title: "Borghese Gladiator",
      artist: "Unknown",
      description:
        "This marble sculpture from 1st century BC represents a combatant, possibly a Pankratiast, in action. It was discovered at Anzio south of Rome and has been displayed in the Louvre since its acquisition in 1807.",
      img: "images/borghese_gladiator.jpg",
      rating: 8,
      category: "Hellenistic Greece",
      location: "Exhibhition room A",
    },
    {
      id: 18,
      title: "Madame Recamier",
      artist: "Jacques-Louis David",
      description:
        "Completed in 1800, this painting depicts Juliette Récamier, a famous Parisian socialite. She is portrayed reclining on an elegant chaise lounge in a simple Empire dress, an image of both style and restraint.",
      img: "images/madame_recamier.jpg",
      rating: 9,
      category: "French Empire",
      location: "Exhibhition room A",
    },
    {
      id: 19,
      title: "The Fortune Teller",
      artist: "Georges de La Tour",
      description:
        "Painted in 1630s, this artwork depicts a foppish young man having his fortune told by an old woman, who, under the pretense of reading his palm, is deftly robbing him of his money. This painting is a commentary on gullibility and deception.",
      img: "images/the_fortune_teller.jpg",
      rating: 8,
      category: "Baroque",
      location: "Exhibhition room C",
    },
    {
      id: 20,
      title: "Portrait of Baldassare Castiglione",
      artist: "Raphael",
      description:
        "Painted around 1514-1515, this portrait shows Baldassare Castiglione, a humanist and a diplomat. He was a close friend of the artist. Raphael has portrayed him with an air of calm intelligence and gentleness.",
      img: "images/portrait_of_baldassare.jpg",
      rating: 9,
      category: "High Renaissance",
      location: "Exhibhition room B",
    },
    {
      id: 21,
      title: "The Sangoma",
      artist: "Dumile Feni",
      description:
        "Created in the 1970s, this artwork portrays a traditional healer, known as a sangoma, in South African culture. The piece reflects the artist's exploration of spirituality and African identity during a time of political turmoil.",
      img: "images/the_sangoma.jpg",
      rating: 8,
      category: "South African Art - 20th Century",
      location: "Atrium",
    },
  
    {
      id: 22,
      title: "Untitled (Abstract Landscape)",
      artist: "Irma Stern",
      description:
        "Painted in the 1950s, this artwork by Irma Stern features an abstract representation of a South African landscape. With vibrant colors and expressive brushwork, it captures the essence of the country's diverse natural beauty.",
      img: "images/untitled_abstract_landscape.jpg",
      rating: 7,
      category: "South African Art - 20th Century",
      location: "Atrium",
    },
  
    {
      id: 23,
      title: "The Long March to Freedom",
      artist: "Various Artists",
      description:
        "Created as a collaborative project, this series of sculptures commemorates the individuals and events that played a significant role in South Africa's journey towards democracy. Each sculpture represents a different figure from the country's history.",
      img: "images/long_march_to_freedom.jpg",
      rating: 9,
      category: "South African Contemporary Art",
      location: "Exhibhition room B",
    },
  
    {
      id: 24,
      title: "The Potato Fields",
      artist: "Helen Sebidi",
      description:
        "This artwork, created in the 1990s, portrays the labor-intensive work of planting and harvesting potatoes in rural South Africa. It reflects the artist's exploration of the relationships between humans, nature, and social dynamics.",
      img: "images/the_potato_fields.jpg",
      rating: 7,
      category: "South African Contemporary Art",
      location: "Exhibhition room B",
    },
  
    {
      id: 25,
      title: "The Homestead",
      artist: "George Pemba",
      description:
        "Painted in the 1960s, this artwork depicts a traditional homestead in rural South Africa, showcasing the artist's attention to detail and capturing the essence of daily life in the country's communities.",
      img: "images/the_homestead.jpg",
      rating: 8,
      category: "South African Art - 20th Century",
      location: "Exhibhition room A",
    },
  
    {
      id: 26,
      title: "Ubuntu",
      artist: "Nicholas Hlobo",
      description:
        "Created in the 2010s, this contemporary art piece explores the concept of Ubuntu, which emphasizes the interconnectedness of humanity. The artwork incorporates various materials and textures, inviting viewers to reflect on their own relationships and identity.",
      img: "images/ubuntu.jpg",
      rating: 9,
      category: "South African Contemporary Art",
      location: "Exhibhition room A",
    },
  
    {
      id: 27,
      title: "The Miners",
      artist: "Gerard Sekoto",
      description:
        "This artwork, crafted in the 1930s, portrays a group of miners working in the depths of South Africa's mines. It reflects the artist's concern for the plight of laborers and the harsh working conditions they endured during that time.",
      img: "images/the_miners.jpg",
      rating: 8,
      category: "South African Art - 20th Century",
      location: "Exhibhition room C",
    },
  
    {
      id: 28,
      title: "The Street Kids",
      artist: "William Kentridge",
      description:
        "Created in the 1990s, this artwork by William Kentridge depicts a group of street children in South Africa. Through his distinctive drawing style, Kentridge explores themes of poverty, social inequality, and the resilience of marginalized communities.",
      img: "images/the_street_kids.jpg",
      rating: 9,
      category: "South African Contemporary Art",
      location: "Exhibhition room B",
    },
  
    {
      id: 29,
      title: "The Masked Figure",
      artist: "Jackson Hlungwani",
      description:
        "This sculpture, crafted in the 1980s, portrays a masked figure from South African folklore. The artwork reflects the artist's exploration of spirituality, ancestral beliefs, and the role of tradition in contemporary society.",
      img: "images/the_masked_figure.jpg",
      rating: 7,
      category: "South African Art - 20th Century",
      location: "Exhibhition room B",
    },
    {
      id: 30,
      title: "The Crossing",
      artist: "Mary Sibande",
      description:
        "This mixed-media installation, created in the 2010s, explores themes of identity, gender, and race in post-apartheid South Africa. The artwork features a life-sized sculpture of a woman dressed in a vibrant, flowing garment, symbolizing empowerment and resilience.",
      img: "images/the_crossing.jpg",
      rating: 9,
      category: "South African Contemporary Art",
      location: "Atrium",
    },
  
    {
      id: 31,
      title: "The Dance of the Spirits",
      artist: "John Muafangejo",
      description:
        "Printed in the 1970s, this linocut artwork depicts a vibrant scene of ancestral spirits dancing in celebration of life and cultural heritage. Muafangejo's work often highlights the significance of folklore and spirituality in Namibian and South African cultures.",
      img: "images/the_dance_of_the_spirits.jpg",
      rating: 8,
      category: "South African Art - 20th Century",
      location: "Atrium",
    },
  
    {
      id: 32,
      title: "The Silent Protest",
      artist: "Zanele Muholi",
      description:
        "Photographed in the 2000s, this powerful series of black-and-white images documents the lives and struggles of the LGBTQ+ community in South Africa. Through portraiture and self-representation, Muholi sheds light on the resilience and challenges faced by marginalized individuals.",
      img: "images/the_silent_protest.jpg",
      rating: 9,
      category: "South African Contemporary Art",
      location: "Atrium",
    },
  
    {
      id: 33,
      title: "The Farm Workers",
      artist: "Gerald Sekoto",
      description:
        "Painted in the 1940s, this artwork portrays farm workers laboring in South Africa's agricultural fields. Sekoto's empathetic depiction of their toil and humanity highlights the social and economic disparities prevalent during that era.",
      img: "images/the_farm_workers.jpg",
      rating: 8,
      category: "South African Art - 20th Century",
      location: "Exhibhition room B",
    },
  
    {
      id: 34,
      title: "The Cityscape",
      artist: "Mmakgabo Mapula Helen Sebidi",
      description:
        "This vibrant painting, created in the 2000s, captures the bustling energy and dynamic architecture of a South African cityscape. Through bold brushwork and expressive colors, Sebidi conveys the vibrancy and complexity of urban life in the country.",
      img: "images/the_cityscape.jpg",
      rating: 7,
      category: "South African Contemporary Art",
      location: "Exhibhition room A",
    },
  ];

  function getData(){
    return louvre_items
  }
  

  return {
    getData,
  }

}




