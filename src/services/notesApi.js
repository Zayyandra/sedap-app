import axios from "axios";

const API_URL = "https://mvgqnprueqenefqoddjc.supabase.co/rest/v1/Sedap-app2";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12Z3FucHJ1ZXFlbmVmcW9kZGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MTA4ODEsImV4cCI6MjA2NDQ4Njg4MX0.pPMT_I2A0X7acI0mCXQeezUZTO9gVcgGEPkO7PgJr-k";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
  },
  async deleteNote(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
  async updateNote(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },
};
