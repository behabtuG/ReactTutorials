const apiService = new ApiService();
const observable = apiService.getNewsArticles();
observable.subscribe((articles) => {
  console.log(articles);
});
// Output: [ { title: 'Some news article' }, { title: 'Another news article' } ]
// console.table(observable);
// console.table(apiService);
// console.table(apiService.getNewsArticles());
// console.table(apiService.getNewsArticles().subscribe());
