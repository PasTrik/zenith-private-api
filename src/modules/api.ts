import axios from "axios";

const api = axios.create({
    baseURL: "https://skywave.zenithmmo.com/api/info/",
    headers: {
        "Auth" : "Bearer fab1f50a-a92a-4bae-95df-3dad3cbd0fc1",
        'Content-Type': 'application/json'
    }
})

export class API {
    public async getUserInfo(username: string) {
        return (await api.post<User>(`me`, {
            username: username
        })).data.resp;
    }
    public async getUserCharacters(username: string) {
        return (await api.post<Character[]>(`characters`, {
            username: username,
            sessionId: ""
        })).data;
    }
    public async getCharacterInventory(username: string, characterId: string) {
        return (await api.post<Item[]>(`inventory`, {
            username: username,
            characterId: characterId
        })).data;
    }
    public async getGuildInfo(name: string) {
        return (await api.post<Guild>(`guild`, {
            guildName: name
        })).data;
    }

    public async getUserFriends(username: string) {
        return (await api.post<Friend[]>(`friends`, {
            username: username
        })).data;
    }
}
