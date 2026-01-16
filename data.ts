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
      { label: 'Anime', src: '' },
      { label: 'Photorealistic', src: '' },
      { label: 'Fantasy', src: '' },
      { label: 'Watercolour', src: '' },
      { label: 'Cartoon', src: '' },
      { label: 'Cinematic', src: '' },
      { label: '3D Render', src: '' },
    ],
  },
  {
    label: 'Gender',
    options: [
      { label: 'Male', src: '' },
      { label: 'Female', src: '' },
      { label: 'Non-binary', src: '' },
      { label: 'Androgynous', src: '' },
    ],
  },
  {
    label: 'Age',
    options: [
      { label: 'Teen', src: '' },
      { label: 'Young Adult', src: '' },
      { label: 'Middle Aged', src: '' },
      { label: 'Elderly', src: '' },
    ],
  },
  {
    label: 'Body Type',
    options: [
      { label: 'Athletic', src: '' },
      { label: 'Muscular', src: '' },
      { label: 'Curvy', src: '' },
      { label: 'Slim', src: '' },
      { label: 'Petite', src: '' },
      { label: 'Stocky', src: '' },
      { label: 'Tall', src: '' },
      { label: 'Short', src: '' },
      { label: 'Scrawny', src: '' },
      { label: 'Chubby', src: '' },
    ],
  },
  {
    label: 'Hair Type',
    options: [
      { label: 'Long Wavy', src: '' },
      { label: 'Short Spiky', src: '' },
      { label: 'Curly Shoulder-Length', src: '' },
      { label: 'Shaved Sides Undercut', src: '' },
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
