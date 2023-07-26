export function formatTime(timestamp) {
  const currentTime = new Date();
  const postTime = new Date(timestamp);

  const diffInMilliseconds = currentTime - postTime;
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));

  if (diffInHours < 1) {
    return '剛剛';
  } else if (diffInHours >= 1 && diffInHours <= 24) {
    return `${diffInHours}小時前`;
  } else {
    return `${postTime.getFullYear()}/${
      postTime.getMonth() + 1
    }/${postTime.getDate()}`;
  }
}
