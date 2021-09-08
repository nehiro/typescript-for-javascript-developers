export {}; 

let name: any = 'Neri';

// let length = name.length as number;

// let length = (name as string).length;

let length = (<string>name).length;

// length = 'foo';