import character_json from '../data/characters'

export function createHeros(id) {
    return character_json.find(c=>c.id===id)
}
