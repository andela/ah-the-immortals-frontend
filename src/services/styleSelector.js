const styleDeterminer = (like, isAuthenticated) => (like == true && isAuthenticated) ? {
  color: '#007BFF',
  render: 'blue-color'
} : {
  color: '#909090',
  render: ''
};
const likeDeterminer=(like,dislike,isAuthenticated)=>(like || dislike) && isAuthenticated?({
  underline:'like-signed'
}):({
  underline:''
});

export  { styleDeterminer, likeDeterminer };
