export interface Character {
    name: string
    slug: string
    status: Status
    memory_imprint?: MemoryImprint
    skills: Skill[]
    id: number
  }
  
  export interface Status {
    atk: string
    hp: string
    def: string
    "critical-hit-chance": string
    "critical-hit-damage": string
    "dual-attack-chance": string
    effectiveness: string
    "effect-resistance": string
    speed: string
  }
  
  export interface MemoryImprint {
    position: string
    imprint_release: string
    imprint_concentration: string
  }
  
  export interface Skill {
    _id: string
    title: string
    type: string
    description: string
    enhancement: Enhancement[]
    icon: string
  }
  
  export interface Enhancement {
    enhancement: string
    effect: string
  }
  