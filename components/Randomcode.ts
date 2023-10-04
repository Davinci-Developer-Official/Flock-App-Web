
//reoccurence is not allowed
export function generateRandomAlphanumeric1(): string {
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';
    const usedChars: Set<string> = new Set();
  
    while (result.length < 6) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      const randomChar: string = characters.charAt(randomIndex);
  
      if (!usedChars.has(randomChar)) {
        result += randomChar;
        usedChars.add(randomChar);
      }
    }
  
    return result;
  }
   
//reoccurence allowed
export function generateRandomAlphanumeric0(): string {
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';
  
    for (let i: number = 0; i < 6; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
//after importing instance 0 {reoccurence};
  const randomAlphanumeric0: string = generateRandomAlphanumeric0();
  console.log(randomAlphanumeric0);

//after importing instance 1 {non-reoccurence};
  const randomAlphanumeric1: string = generateRandomAlphanumeric1();
  console.log(randomAlphanumeric1);
  
  