# Zenith MMO
> This is the Zenith MMO private api.

### Exemple of use

```js
const Zenith = require('zenith-private-api')
const api = new Zenith.API()

api.getUserInfo("username").then(user => {
    console.log(user)
})
```

```ts
import * as Zenith from 'zenith-private-api'
const api = new Zenith.API();

api.getUserInfo("username").then(user => {
    console.log(user)
})
```

### Functions :
```js
getUserInfo(username: string): Promise<User>
```

```js
getUserFriends(username: string): Promise<Friend[]>
```

```js
getUserCharacters(username: string): Promise<Character[]>
```

````js
getCharacterInventory(username: string, characterId: string): Promise<Item[]>
````

```js
getGuildInfo(name: string): Promise<Guild>
```
