import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPickupsByUid = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pickups.json?orderBy="uid"&equalTo"${uid}"`)
    .then((result) => {
      const allPickupsObj = result.data;
      const pickups = [];
      if (allPickupsObj != null) {
        Object.keys(allPickupsObj).forEach((pickupId) => {
          const newPickup = allPickupsObj[pickupId];
          newPickup.id = pickupId;
          pickups.push(newPickup);
        });
      }
      resolve(pickups);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSinglePickup = (pickupId) => axios.get(`${baseUrl}/pickups/${pickupId}.json`);

const savePickup = (pickupInfo) => axios.post(`${baseUrl}/pickups.json`, pickupInfo);

const updatePickup = (pickupId, newPickupInfo) => axios.put(`${baseUrl}/pickups/${pickupId}.json`, newPickupInfo);

const deletePickup = (pickupId) => axios.delete(`${baseUrl}/pickups/${pickupId}.json`);

export default {
  getPickupsByUid,
  getSinglePickup,
  savePickup,
  updatePickup,
  deletePickup,
};
