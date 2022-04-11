import { gql } from "graphql-request";

export const QUERY_CHARACTER_SEARCH = gql`
query CharactersSearch($search: String) {
  characters(where: { slug_contains: $search}) {
    name
    slug
    characterStatus {
      atk
      hp
      def
      criticalHitChance
      criticalHitDamage
      dualAtackChance
      effectiveness
      effectResistance
      speed
    }
    memoryImprint {
      imprintRelease
      imprintConcentration
      position {
        url
      }
    }
    characterSkills {
      title
      description
      enhancement
      icon {
        url
      }
    }
    image {
      url
    }
  }
}


`