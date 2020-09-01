//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  if (!Number.isInteger(num)) throw new Error("Input must be a number");
  let output = [];

  // Bitwise & operator returns a '1' if both digits are a '1'
  if ((num & 0b00001) === 0b00001) output.push("wink");
  if ((num & 0b00010) === 0b00010) output.push("double blink");
  if ((num & 0b00100) === 0b00100) output.push("close your eyes");
  if ((num & 0b01000) === 0b01000) output.push("jump");
  if ((num & 0b10000) === 0b10000) output.reverse();
  
  return output;
};
