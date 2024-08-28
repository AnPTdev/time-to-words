// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00'){
    return 'midday'
  }

  const [hour,minutes] = time.split(':').map(Number);

  const hourWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen","fourteen","dummy","sixteen","seventeen","eighteen","nineteen","twenty"];

  const curHourWord = hourWords[hour%12]
  const nextHourWord = hourWords[(hour+1)%12]
  const minutesWord = hourWords[minutes]
  const nextMinutesWord = hourWords[60-minutes]

  if(minutes == 0){
    return `${curHourWord} o'clock`
  }
  if(minutes==15){
    return `quarter past ${curHourWord}`
  }
  if(minutes==30){
    return `half past ${curHourWord}`;
  }
  if(minutes==45){
    return `quarter to ${nextHourWord}`
  }
  if(minutes<15){
    return `${minutesWord} past ${curHourWord}`
  }
  if(minutes>45){
    return `${nextMinutesWord} to ${nextHourWord}`
  }
  return `${minutes}: ${minutes}`;
}

module.exports = { convertTimeToWords };