const __process =  typeof process !== 'undefined' ? process : 0;

// Only NodeJS has a process variable that is of [[Class]] proces
export const isNodeJS = Object.prototype.toString.call(__process) === '[object process]';
