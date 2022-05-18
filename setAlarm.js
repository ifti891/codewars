// L1: Set Alarm

function setAlarm(employed, vacation) {

  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}