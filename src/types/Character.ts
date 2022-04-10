interface Character {
    CharacterId: string;
    CharacterName: string;
    CharacterType: CharacterType;
    CharacterLevel: number;
    CharacterRole: CharacterRole;
    CharacterImage: string;
    HP: number,
    EP: number,
    ATK: number,
    DEF: number,
    CASTING_SPEED: number,
    ATTACK_SPEED: number,
    SPEED: number,
    STAMINA: number,
    Guilds: Guild[],
    XP: number,
    DPS_XP: number,
    TANK_XP: number,
    SUPPORT_XP: number
}
