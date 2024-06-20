import { generateRandomId } from "./generate-random-id";
import { Anime } from "../types/anime";

export const ANIME: Anime[] = [
  {
    id: generateRandomId(),
    name: "Ajin",
    path: "/anime/ajin.jpeg",
    anilistId: 21341,
    watch: "https://9animetv.to/watch/ajin-demi-human-1512?ep=20878",
    description:
      "Kei NagaiU+2019s body should have died when a truck slams into his body, but instead, he finds himself resurrected with all of his wounds healed. Now revealed to be an Ajin, one of a mysterious new breed of immortal demi-human, heU+2019s been marked with an international bounty, and in the eyes of the world, Kei is a specimen to be taken by any means possible. Now heU+2019s on the run, and his only hope is to discover the terrifying secrets behind his new abilities before heU+2019s forced to use them in battle!",
    filter: "mystery",
    slug: "Ajin",
  },
  {
    id: generateRandomId(),
    name: "Baki",
    path: "/anime/baki.jpeg",
    anilistId: 97888,
    watch: "https://9animetv.to/watch/baki-2649?ep=28915",
    description:
      "The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world. Five of the world's most violent and brutal death row inmates are gathering to face Baki. Their objective is to taste defeat -- their unmatched strength and skill have led them to grow bored of life itself, and they now seek out Baki in the hopes that he can overwhelm and utterly crush them. In this crisis, other underground martial art warriors gather to fight by Baki's side: Kaoru Hanayama, Gouki Shibukawa, Retsu Kaioh, and Doppo Orochi. An epic showdown between violent death row inmates and Baki and his friends begins!",
    filter: "action",
    slug: "Baki",
  },
  {
    id: generateRandomId(),
    name: "Death Note",
    path: "/anime/death-note.jpeg",
    anilistId: 1535,
    watch: "https://9animetv.to/watch/death-note-60?ep=1464",
    description:
      "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a Death Note, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?",
    filter: "mystery",
    slug: "DEATH-NOTE",
  },
  {
    id: generateRandomId(),
    name: "Dragon Ball",
    path: "/anime/dragon-ball.png",
    anilistId: 223,
    watch: "https://9animetv.to/watch/dragon-ball-509?ep=10218",
    description:
      'Goku Son is a young boy who lives in the woods all alone—that is until a girl named Bulma runs into him in her search for a set of magical objects called the "Dragon Balls." Since the artifacts are said to grant one wish to whoever collects all seven, Bulma hopes to gather them and wish for a perfect boyfriend. Goku happens to be in possession of a dragon ball, but unfortunately for Bulma, he refuses to part ways with it, so she makes him a deal: he can tag along on her journey if he lets her borrow the dragon ball\'s power. With that, the two set off on the journey of a lifetime.',
    filter: "adventure",
    slug: "Dragon-Ball",
  },
  {
    id: generateRandomId(),
    name: "Fullmetal Alchemist: Brotherhood",
    path: "/anime/fullmetal-alchemist-brotherhood.jpeg",
    anilistId: 5114,
    watch: "https://9animetv.to/watch/fullmetal-alchemist-brotherhood-1?ep=1",
    description:
      'Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of EdwardU+2019s right arm that he is able to affix AlphonseU+2019s soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called "automail" and become a state alchemist, the Fullmetal Alchemist.',
    filter: "action",
    slug: "Hagane-no-Renkinjutsushi-FULLMETAL-ALCHEMIST",
  },
  {
    id: generateRandomId(),
    name: "Kiseijuu: Sei no Kakuritsu",
    path: "/anime/kiseijuu-sei-no-kakuritsu.jpeg",
    anilistId: 20623,
    watch: "https://9animetv.to/watch/parasyte-the-maxim-136?ep=3884",
    description:
      "They arrive in silence and darkness. They descend from the skies. They have a hunger for human flesh. They are everywhere. They are parasites, alien creatures who must invadeU+2013and take control ofU+2013a human host to survive. And once they have infected their victims, they can assume any deadly form they choose: monsters with giant teeth, winged demons, creatures with blades for hands. But most have chosen to conceal their lethal purpose behind ordinary human faces. So no one knows their secretU+2013except an ordinary high school student. Shin is battling for control of his own body against an alien parasite, but can he find a way to warn humanity of the horrors to come?",
    filter: "horror",
    slug: "Kiseijuu-Sei-no-Kakuritsu",
    english: "Parasyte",
  },
  {
    id: generateRandomId(),
    name: "Nanatsu no Taizai",
    path: "/anime/nanatsu-no-taizai.jpeg",
    anilistId: 20789,
    watch: "https://9animetv.to/watch/the-seven-deadly-sins-561?ep=10966",
    description:
      "When they were accused of trying to overthrow the monarchy, the feared warriors the Seven Deadly Sins were sent into exile. Princess Elizabeth discovers the truth - the Sins were framed by the king's guard, the Holy Knights - too late to prevent them from assassinating her father and seizing the throne! Now the princess is on the run, seeking the Sins to help her reclaim the kingdom. But the first Sin she meets, Meliodas, is a little innkeeper with a talking pig. He doesn't even have a real sword! Have the legends of the Sins' strength been exaggerated?",
    slug: "Nanatsu-no-Taizai",
    filter: "action",
    english: "The Seven Deadly Sins",
  },
  {
    id: generateRandomId(),
    name: "One Piece",
    path: "/anime/one-piece.jpeg",
    anilistId: 21,
    watch: "https://9animetv.to/watch/one-piece-100?ep=2142",
    description:
      "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",
    filter: "adventure",
    slug: "ONE-PIECE",
  },
  {
    id: generateRandomId(),
    name: "Shingeki no Kyojin",
    path: "/anime/shingeki-no-kyojin.jpeg",
    anilistId: 16498,
    watch: "https://9animetv.to/watch/attack-on-titan-112?ep=3303",
    description:
      "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.",
    filter: "action",
    slug: "Shingeki-no-Kyojin",
    english: "Attack on Titan",
  },
  {
    id: generateRandomId(),
    name: "Yakusoku no Neverland",
    path: "/anime/yakusoku-no-neverland.jpeg",
    anilistId: 101759,
    watch: "https://9animetv.to/watch/the-promised-neverland-55?ep=1389",
    description:
      "Emma, Norman and Ray are the brightest kids at the Grace Field House orphanage. And under the care of the woman they refer to as “Mom,” all the kids have enjoyed a comfortable life. Good food, clean clothes and the perfect environment to learn—what more could an orphan ask for? One day, though, Emma and Norman uncover the dark truth of the outside world they are forbidden from seeing.",
    filter: "horror",
    slug: "Yakusoku-no-Neverland",
    english: "The Promised Neverland",
  },
  {
    id: generateRandomId(),
    name: "Deadman Wonderland",
    path: "/anime/deadman-wonderland.png",
    anilistId: 6880,
    watch: "https://9animetv.to/watch/deadman-wonderland-2555?ep=28287",
    description:
      "Ganta is the only survivor after a mysterious man in red slaughters a classroom full of teenagers. He's framed for the carnage, sentenced to die, and locked away in the most twisted prison ever built: Deadman Wonderland. And then it gets worse. At Deadman Wonderland, convicts are forced into brutal deathmatches for the amusement of the masses, the cheers of the crowd drowning out the screams of the dismembered. Even when Ganta befriends Shiro, an unusual female inmate, his dark fate crushes all hope —until he discovers the strange ability to wield his spilled blood as a weapon. Ganta learns his new skill might be related to the murderous man in red and uncovers disturbing secrets that could expose those who stole his freedom. He's determined to see justice served —but first he'll have to fight for his life in a prison that holds a million ways to die.",
    filter: "horror",
    slug: "Deadman-Wonderland",
  },
  {
    id: generateRandomId(),
    name: "Assassination Classroom",
    path: "/anime/assassination-classroom.jpg",
    anilistId: 20755,
    watch: "https://9animetv.to/watch/assassination-classroom-372?ep=8586",
    description:
      "The students of class 3-E have a mission: kill their teacher before graduation. He has already destroyed the moon, and has promised to destroy the Earth if he can not be killed within a year. But how can this class of misfits kill a tentacled monster, capable of reaching Mach 20 speed, who may be the best teacher any of them have ever had?",
    filter: "supernatural",
    slug: "Assassination-Classroom",
  },
  {
    id: generateRandomId(),
    name: "Classroom of the Elite",
    path: "/anime/classroom-of-the-elite.jpg",
    anilistId: 98659,
    watch: "https://9animetv.to/watch/classroom-of-the-elite-713?ep=12865",
    description:
      'Koudo Ikusei Senior High School is a leading school with state-of-the-art facilities. The students there have the freedom to wear any hairstyle and bring any personal effects they desire. Koudo Ikusei is like a utopia, but the truth is that only the most superior students receive favorable treatment. Kiyotaka Ayanokouji is a student of D-class, which is where the school dumps its "inferior" students in order to ridicule them. For a certain reason, Kiyotaka was careless on his entrance examination, and was put in D-class. After meeting Suzune Horikita and Kikyou Kushida, two other students in his class, Kiyotaka\'s situation begins to change.',
    filter: "school",
    slug: "Classroom-of-the-Elite",
  },
];
