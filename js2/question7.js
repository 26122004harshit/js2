function generateOtp() {
    const min = 100000;
    const max = 999999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
  }
  
  console.log(`Here is your otp: ${generateOtp()}`);
  
  // OUTPUT: Here is your otp: 2951