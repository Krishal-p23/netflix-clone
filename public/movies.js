const movies = [
  {
    title: "Big Buck Bunny",
    description:
      "A large and gentle rabbit takes a stand against bullying in this animated short film.",
    videoUrl:
      "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
    thumbnailUrl:
      "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
    genre: "Animation",
    duration: "10 min",
    rating: 6.4,
    mood: "Light-hearted, playful, uplifting",
  },
  {
    title: "Sintel",
    description:
      "A young girl embarks on a quest to find her pet dragon in this action-packed fantasy tale.",
    videoUrl:
      "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
    thumbnailUrl:
      "https://durian.blender.org/wp-content/uploads/2010/05/sintel_poster.jpg",
    genre: "Fantasy",
    duration: "14 min",
    rating: 7.4,
    mood: "Adventurous, emotional, bittersweet",
  },
  {
    title: "Tears of Steel",
    description:
      "A group of warriors and scientists gather in Amsterdam to stage a crucial event from the past.",
    videoUrl:
      "https://download.blender.org/durian/movies/tears_of_steel/tears_of_steel_720p.mp4",
    thumbnailUrl:
      "https://mango.blender.org/wp-content/uploads/2013/05/tears_of_steel_poster.jpg",
    genre: "Sci-Fi",
    duration: "12 min",
    rating: 5.5,
    mood: "Intense, dramatic, futuristic",
  },
  {
  "title": "Ocean Waves Sample",
  "description": "Generic sample video used for testing HTML5 video playback.",
  "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
  "thumbnailUrl": "https://www.w3schools.com/html/pic_trulli.jpg",
  "genre": "Nature",
  "duration": "1 min",
  "rating": 7.0,
  "mood": "Calm, relaxing"
},
  {
  "title": "Color Bars Test",
  "description": "Standard test pattern video for debugging players.",
  "videoUrl": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
  "thumbnailUrl": "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
  "genre": "Test",
  "duration": "10 sec",
  "rating": 5.0,
  "mood": "Neutral"
},
];

const recommendationTestOutput = {
  recommendation: [
    {
      title: "Sintel",
      description:
        "A young girl embarks on a quest to find her pet dragon in this action-packed fantasy tale.",
      videoUrl: "https://commv12 min",
      thumbnailUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
      genre: "Fantasy",
      duration: "14 min",
      rating: 7.4,
      _id: "1",
      mood: "",
    },
    {
      title: "Big Buck Bunny",
      description:
        "A large and gentle rabbit takes a stand against bullying in this animated short film.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      genre: "Animation",
      duration: "10 min",
      rating: 6.4,
      _id: "1",
      mood: "",
    },
    {
      title: "For Bigger Blazes",
      description:
        "A dramatic fire scene designed to demonstrate the capabilities of high-resolution video.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnailUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      genre: "Action",
      duration: "1 min",
      rating: 6.6,
      _id: "1",
      mood: "",
    },
  ],
  reason:
    "Based on your preferences, I've recommended 'Sintel', 'Big Buck Bunny', and 'For Bigger Blazes'. 'Sintel' is a highly-rated fantasy film that aligns with your 'adventurous' and 'emotional' mood preferences. 'Big Buck Bunny' fits your 'Animation' genre preference and 'playful', 'light-hearted' mood. 'For Bigger Blazes' matches your 'Action' genre preference and 'intense', 'dramatic' mood. I've excluded 'Tears of Steel' and 'Elephant's Dream' as they don't strongly align with your 'adventurous', 'emotional', or 'futuristic' mood preferences. Please note that your minimum rating preference of 12 is not met by any of the movies, and your minimum duration preference of 4 minutes excludes 'For Bigger Blazes' from being a perfect match.",
};

export { recommendationTestOutput };
