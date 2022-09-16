import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  changeReviewField,
  setAccessToken,
  logout,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      accessToken: '',
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: '',
        password: '',
      },
      reviewFields: {
        score: '',
        description: '',
      },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(
        initialState,
        setAccessToken('ACCESS_TOKEN'),
      );

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('logout', () => {
    it('resets accessToken', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(
        initialState,
        logout(),
      );

      expect(state.accessToken).toBe('');
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes email of loginFields', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'email', value: 'changed email' }),
        );

        expect(state.loginFields.email).toBe('changed email');
        expect(state.loginFields.password).toBe(initialState.loginFields.password);
      });
    });

    context('when password is changed', () => {
      it('changes password of loginFields', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'password', value: 'changed password' }),
        );

        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('changed password');
      });
    });
  });

  describe('changeReviewField', () => {
    context('when score is changed', () => {
      it('changes score of reviewFields', () => {
        const initialState = {
          reviewFields: {
            score: '0',
            description: 'description',
          },
        };

        const state = reducer(
          initialState,
          changeReviewField({ name: 'score', value: '5' }),
        );

        expect(state.reviewFields.score).toBe('5');
        expect(state.reviewFields.description).toBe(initialState.reviewFields.description);
      });
    });

    context('when password is changed', () => {
      it('changes password of reviewFields', () => {
        const initialState = {
          reviewFields: {
            score: '0',
            description: 'description',
          },
        };

        const state = reducer(
          initialState,
          changeReviewField({ name: 'description', value: 'changed description' }),
        );

        expect(state.reviewFields.score).toBe(initialState.reviewFields.score);
        expect(state.reviewFields.description).toBe('changed description');
      });
    });
  });
});
