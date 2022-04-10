interface User {
  resp: {
    id: string;
    created_at: Date;
    username: string;
    displayname: string;
    unchosen_keyed_platforms: number;
    platforms: string[];
    avatar_url: string;
    roles: [];
    rewards: Reward[];
    badges: [];
    permissions: [];
    private: boolean;
    friends_private: boolean;
  }
}
