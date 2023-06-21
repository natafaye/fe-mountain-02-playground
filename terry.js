function switchTvChannel(channel) {
  const tvString = `The TV is now on channel ${channel}.`;
  return tvString;
}

const firstChannelString = switchTvChannel(67);
console.log(firstChannelString);

const secondChannelString = switchTvChannel(13);
console.log(secondChannelString);
