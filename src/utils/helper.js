export const getLikeCount = (likeCount) => {
  let likeCnt;
  if (likeCount < 1000) {
    likeCnt = likeCount;
  } else if (likeCount >= 1000000) {
    likeCnt = Math.round(likeCount / 1000000) + "M";
  } else if (likeCount >= 1000) {
    likeCnt = Math.round(likeCount / 1000) + "K";
  }
  return likeCnt;
};
export const getViewCount = (viewCount) => {
  let views;
  if (viewCount < 1000) {
    views = viewCount;
  } else if (viewCount >= 1000000) {
    views = Math.round(viewCount / 1000000) + "M";
  } else if (viewCount >= 1000) {
    views = Math.round(viewCount / 1000) + "K";
  }
  return views;
};
export const getDiffInDays = (publishedAt) => {
  let date1 = new Date(publishedAt);
  let date2 = new Date();
  let diffInTime = date2.getTime() - date1.getTime();
  let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

  let publish;
  if (diffInDays === 0) {
    publish = "Few hours ago";
  } else if (diffInDays === 1) {
    publish = `${diffInDays} day ago`;
  } else if (diffInDays === 30) {
    publish = "1 month Ago";
  } else if (diffInDays > 30) {
    let months = Math.floor(diffInDays / 30);
    if (months < 12) {
      publish = `${months} months ago`;
    } else if (months >= 12) {
      publish = `${Math.floor(months / 12)} years ago`;
    }
  } else if (diffInDays > 1) {
    publish = `${diffInDays} days ago`;
  }
  return publish;
};

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function generate() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
