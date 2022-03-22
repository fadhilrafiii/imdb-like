/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const QUERY_HOT_ANIME_BANNERS = gql`
  {
    Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: [SCORE_DESC, START_DATE_DESC], averageScore_greater: 80
      ) {
        id
        bannerImage
      }
    }
  }
`;

export const QUERY_HOT_ANIMES = gql`
  query GetHotAnimes {
    Page(page: 1, perPage: 12) {
      media(type: ANIME, sort: [SCORE_DESC, START_DATE_DESC]) {
        id
        title {
          romaji
          english
        }
        averageScore
        genres
        type
        description
        reviews {
          pageInfo {
            total
          }
        }
        bannerImage
      }
    }
  }
`;

export const QUERY_SEARCH_ANIMES = gql`
  query GetSearchedAnimes($page: Int!, $search: String!) {
    Page(page: $page, perPage: 12) {
      pageInfo {
        total
        currentPage
        lastPage
      }
      media(search: $search, type: ANIME, sort: [SCORE_DESC, START_DATE_DESC]) {
        id
        title {
          romaji
          english
        }
        averageScore
        genres
        type
        description
        reviews {
          pageInfo {
            total
          }
        }
        bannerImage
      }
    }
  }
`;
