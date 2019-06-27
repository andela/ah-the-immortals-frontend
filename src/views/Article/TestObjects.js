const uncommentedStore = {
  comments: {
    data: {}
  },
  post: {
    likeError: {},
    post: {
      article: {
        slug: 'van-gals-4',
        title: 'Van Gals',
        description: 'Van Gals',
        body: 'Van Gals',
        image_url: 'No image uploaded',
        created_at: '2019-06-25T19:55:55.011540Z',
        updated_at: '2019-06-25T21:05:06.583494Z',
        author: {
          username: 'OgutuBrian',
          bio: '',
          image: 'https://res.cloudinary.com/grean/image/upload/v1556488518/samples/vbioaj1wwewmtmeryucv',
          following: false
        },
        ratings: 0,
        tagList: [],
        like_info: {
          like: false,
          dislike: false,
          likeCount: 0,
          dislikeCount: 0
        },
        comments: [],
        favorites: {
          favorite: false,
          favoritesCount: 0
        },
        readtime: '2 second(s)',
        bookmarked: false,
        highlights: {
          data: {
            highlights: []
          },
          error: {}
        }
      }
    }
  },
  signin: {
    currentUser: 'testuser'
  },
  highlight: {
    body: true,
    title: false,
    description: false
  },
  highlightmodal: {
    body: true,
    title: false,
    description: false
  }
};
const commentedStore = {
  ...uncommentedStore,
  post: {
    ...uncommentedStore.post,
    post: {
      ...uncommentedStore.post.post,
      article: {
        ...uncommentedStore.post.post.article,
        highlights: {
          data: {
            highlights: [{
              id: 370,
              article_slug: 'van-gals-4',
              field: 'title',
              comment: 'Comment',
              start_index: 0,
              end_index: 3,
              highlighted_text: 'Van',
            }, {
              id: 371,
              article_slug: 'van-gals-4',
              field: 'body',
              comment: 'Comment',
              start_index: 0,
              end_index: 3,
              highlighted_text: 'Van',
            },{
              id: 372,
              article_slug: 'van-gals-4',
              field: 'description',
              comment: 'Comment',
              start_index: 0,
              end_index: 3,
              highlighted_text: 'Van',
            }]
          },
          error: {}
        }
      }
    }
  },
  highlight: {
    body: true,
    title: false,
    description: false
  },
  highlightmodal: {
    body: true,
    title: false,
    description: false
  }
};
const storeWithoutUser={
  ...commentedStore,
  signin: {
    currentUser: ''
  }
};
const storeContents = {
  uncommentedStore,
  commentedStore,
  storeWithoutUser
};
export default storeContents;
