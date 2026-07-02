// All copy, prices and asset references transcribed directly from the Figma design.

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Plants Type', href: '#top-selling', hasCaret: true },
  { label: 'More', href: '#trending' },
  { label: 'Contact', href: '#footer' },
]

// "Our Top Selling Plants" — 6 product cards
export const topSellingPlants = [
  {
    id: 'aglaonema',
    name: 'Aglaonema plant',
    description:
      'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: 'Rs. 300/-',
    image: '/assets/aglaonema.png',
  },
  {
    id: 'plantain-lilies',
    name: 'Plantain Lilies',
    description:
      'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 'Rs. 380/-',
    image: '/assets/plantain-lilies.png',
  },
  {
    id: 'cactus',
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 'Rs. 259/-',
    image: '/assets/cactus.png',
  },
  {
    id: 'swiss-cheese',
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 'Rs. 400/-',
    image: '/assets/swiss-cheese.png',
  },
  {
    id: 'sansevieria',
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: '/assets/sansevieria.png',
  },
  {
    id: 'agave',
    name: 'Agave plant',
    description:
      'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
    image: '/assets/agave.png',
  },
]

// "Our Trendy plants" — For Your Desks Decorations (2 feature cards)
export const trendingPlants = [
  {
    id: 'desk-1',
    title: 'For Your Desks Decorations',
    description:
      'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    image: '/assets/plantain-lilies.png',
  },
  {
    id: 'desk-2',
    title: 'For Your Desks Decorations',
    description:
      'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
    price: 'Rs. 399/-',
    image: '/assets/desk-decoration.png',
  },
]

// "Customer Review" — testimonials
export const reviews = [
  {
    id: 'shelly',
    name: 'Shelly Russel',
    avatar: '/assets/avatar-shelly.png',
    rating: 5,
    text: 'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!',
  },
  {
    id: 'lula',
    name: 'Lula Rolfson',
    avatar: '/assets/avatar-lula.jpg',
    rating: 5,
    text: 'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
  },
  {
    id: 'carol',
    name: 'Carol Huels',
    avatar: '/assets/avatar-carol.png',
    rating: 5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
]

// Hero trending testimonial (floating card over hero)
export const heroReview = {
  name: 'Ronnie Hamill',
  avatar: '/assets/avatar-ronnie.png',
  rating: 5,
  text: 'I can’t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.',
}

export const o2Points = [
  'We Have Small And Best O2 Plants Collection’s',
  'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
  'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
]

export const footer = {
  tagline:
    '"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."',
  socials: ['FB', 'TW', 'LI'],
  quickLinks: ['Home', 'Type’s Of plant’s', 'Contact', 'Privacy'],
  copyright: 'FloraVision © all right reserve',
}
