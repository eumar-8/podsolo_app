const API_URL = "us-central1-podcasts-205113.cloudfunctions.net"; //STAGING

export const getCountries = () =>
  new Promise((resolve, reject) => {
    let url = `https://${API_URL}/countries`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(err => reject(err));
  });

export const getTopPodcastsForCountry = country =>
  new Promise((resolve, reject) => {
    let url = `https://${API_URL}/topPodcasts?country=${country}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(err => reject(err));
  });

export const getEpisodes = (podcastId, limit = 999) => {
  return fetch(
    `https://${API_URL}/episodes?podcastId=${podcastId}&limit=${limit}`
  )
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(episodes => {
      return episodes;
    })
    .catch(err => {
      console.error("Error retrieving episodes: ", err);
    });
};

export const audio = async file => {
  console.log("Trying to play sound...", file);

  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync({
      uri: file
    });
    await soundObject.playAsync();
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
  }
};
