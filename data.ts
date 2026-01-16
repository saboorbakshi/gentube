export const CATEGORIES = [
  {
    label: 'For You',
    count: null,
    subcategories: [
      { label: 'Favourites', count: null },
      { label: 'All', count: 14 },
    ],
  },
  {
    label: 'Style',
    count: 166,
    subcategories: [
      { label: 'Favourites', count: null },
      { label: 'My Blocks', count: 0 },
      { label: 'Art Style', count: 55 },
      { label: 'Medium', count: 16 },
      { label: 'Vibe', count: 7 },
      { label: 'Effects', count: 21 },
      { label: 'Color & Lightening', count: 30 },
      { label: 'Theme', count: 11 },
      { label: 'Composition', count: 12 },
      { label: 'All', count: 14 },
    ],
  },
  {
    label: 'Place',
    count: 54,
    subcategories: [
      { label: 'Favourites', count: null },
      { label: 'My Blocks', count: 0 },
      { label: 'Worlds', count: 18 },
      { label: 'Cities', count: 12 },
      { label: 'Backgrounds', count: 24 },
      { label: 'All', count: 54 },
    ],
  },
  {
    label: 'Subject',
    count: 123,
    subcategories: [
      { label: 'Favourites', count: null },
      { label: 'My Blocks', count: 0 },
      { label: 'Person', count: 34 },
      { label: 'Animal', count: 19 },
      { label: 'Object', count: 27 },
      { label: 'Outfit', count: 15 },
      { label: 'Activity', count: 14 },
      { label: 'Pose', count: 8 },
      { label: 'Expression', count: 6 },
      { label: 'All', count: 23 },
    ],
  },
  {
    label: 'Characters',
    count: 3,
    subcategories: null,
  },
  {
    label: 'Search All',
    count: null,
    subcategories: null,
  },
]


export const FEATURES = [
  {
    label: 'Name',
    placeholder: 'e.g. Aria Stormbinder',
    limit: 60
  },
  {
    label: 'Style',
    options: [
      { label: 'Anime', src: 'placeholder.webp' },
      { label: 'Photorealistic', src: 'placeholder.webp' },
      { label: 'Fantasy', src: 'placeholder.webp' },
      { label: 'Watercolour', src: 'placeholder.webp' },
      { label: 'Cartoon', src: 'placeholder.webp' },
      { label: 'Cinematic', src: 'placeholder.webp' },
      { label: '3D Render', src: 'placeholder.webp' },
    ],
  },
  {
    label: 'Gender',
    options: [
      { label: 'Male', src: 'features/male.png' },
      { label: 'Female', src: 'features/female.png' },
      { label: 'Non-binary', src: 'features/non-binary.png' },
      { label: 'Androgynous', src: 'features/androgynous.png' },
    ],
  },
  {
    label: 'Age',
    options: [
      { label: 'Teen', src: 'placeholder.webp' },
      { label: 'Young Adult', src: 'placeholder.webp' },
      { label: 'Middle Aged', src: 'placeholder.webp' },
      { label: 'Elderly', src: 'placeholder.webp' },
    ],
  },
  {
    label: 'Body Type',
    options: [
      { label: 'Muscular', src: 'features/muscular.png' },
      { label: 'Curvy', src: 'features/curvy.png' },
      { label: 'Slim', src: 'features/slim.png' },
      { label: 'Petite', src: 'features/petite.png' },
      { label: 'Stocky', src: 'features/stocky.png' },
      { label: 'Tall', src: 'features/tall.png' },
      { label: 'Short', src: 'features/short.png' },
      { label: 'Athletic', src: 'features/athletic.png' },
      { label: 'Scrawny', src: 'features/scrawny.png' },
      { label: 'Chubby', src: 'features/chubby.png' },
    ],
  },
  {
    label: 'Hair Type',
    options: [
      { label: 'Short Spiky', src: 'features/short-spiky.png' },
      { label: 'Shaved Sides Undercut', src: 'features/shaved-sides-undercut.png' },
      { label: 'Long Wavy', src: 'features/long-wavy.png' },
      { label: 'Curly Shoulder Length', src: 'features/long-wavy.png' }

    ],
  },
  {
    label: 'Description',
    placeholder: 'Describe who your character is, where they are from, what drives them, the more details, the better results.',
    limit: 1500
    
  },
  {
    label: 'Seed',
    placeholder: 'Use the same seed to recreate similar images. Leave empty for random generation.'
  },
]
