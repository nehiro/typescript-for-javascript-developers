export {}; 

let name = 'Hiroaki';
name = 'Taka';

let nickname = 'Hiro' as const;
nickname = 'Hiro';

let profile = {
  name: 'Hiroaki',
  height: 170
} as const;

// profile.name = 'Hiro';
// profile.height = 180;